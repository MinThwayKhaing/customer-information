const esbuild = require('esbuild');
const http = require('http');
const fs = require('fs');

const ESBUILD_PORT = 8000;
const DEV_SERVER_PORT = 3000;

async function startDevServer() {
    try {
        const ctx = await esbuild.context({
            entryPoints: ['index.tsx'],
            bundle: true,
            outfile: 'index.js',
            sourcemap: true,
            jsx: 'automatic',
            define: {
                'process.env.NODE_ENV': '"development"',
            },
        });

        await ctx.watch();

        const { host, port } = await ctx.serve({
            port: ESBUILD_PORT,
        });
        
        http.createServer((req, res) => {
            // Serve modified index.html for the root path
            if (req.url === '/' || req.url === '/index.html') {
                let html = fs.readFileSync('index.html', 'utf-8');
                html = html.replace(/<script type="importmap">[\s\S]*?<\/script>/, '');
                html = html.replace(
                    '<script type="module" src="/index.tsx"></script>',
                    '<script src="/index.js" defer></script>'
                );
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(html);
                return;
            }

            // Proxy other requests to the esbuild server
            const options = {
                hostname: host,
                port: port,
                path: req.url,
                method: req.method,
                headers: req.headers,
            };

            const proxyReq = http.request(options, proxyRes => {
                res.writeHead(proxyRes.statusCode, proxyRes.headers);
                proxyRes.pipe(res, { end: true });
            });
            
            req.pipe(proxyReq, { end: true });

            proxyReq.on('error', (err) => {
                console.error(`Error proxying request for ${req.url}:`, err.message);
                res.writeHead(502);
                res.end();
            });

        }).listen(DEV_SERVER_PORT, () => {
            console.log(`🚀 Development server started at http://localhost:${DEV_SERVER_PORT}`);
        });

    } catch (e) {
        console.error("Failed to start development server:", e);
        process.exit(1);
    }
}

startDevServer();
