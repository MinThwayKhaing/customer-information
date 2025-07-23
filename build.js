const esbuild = require('esbuild');
const fs = require('fs-extra');
const path = require('path');

async function build() {
  const buildDir = 'dist';

  // Clean the build directory
  fs.emptyDirSync(buildDir);

  // Bundle the JavaScript/TypeScript code
  try {
    await esbuild.build({
      entryPoints: ['index.tsx'],
      bundle: true,
      minify: true,
      sourcemap: true,
      outfile: path.join(buildDir, 'index.js'),
      jsx: 'automatic',
      loader: {
        '.ts': 'ts',
        '.tsx': 'tsx'
      },
      define: {
        'process.env.NODE_ENV': '"production"',
      },
    });
    console.log('JavaScript bundled successfully.');
  } catch (error) {
    console.error('esbuild failed:', error);
    process.exit(1);
  }

  // Copy and modify index.html
  const sourceHtmlPath = 'index.html';
  const destHtmlPath = path.join(buildDir, 'index.html');
  let htmlContent = fs.readFileSync(sourceHtmlPath, 'utf-8');
  
  // Remove the importmap script block
  htmlContent = htmlContent.replace(/<script type="importmap">[\s\S]*?<\/script>/, '');

  // Replace the module script with the bundled script
  htmlContent = htmlContent.replace(
    /<script type="module" src="\/index.tsx"><\/script>/,
    '<script defer="defer" src="/index.js"></script>'
  );

  fs.writeFileSync(destHtmlPath, htmlContent);
  console.log('index.html processed and copied to dist.');
  
  console.log('\nBuild finished successfully!');
}

build();
