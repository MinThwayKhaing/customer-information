# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config that listens on port 3200
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3200
EXPOSE 3200

CMD ["nginx", "-g", "daemon off;"]
