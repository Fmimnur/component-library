# Stage 1: Build React app
FROM node:18-alpine AS builder

# Required working directory name
WORKDIR /Mimnur_Ferdous_ui_garden_build_checks

# Copy and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build production version
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:stable-alpine

# Copy production build to nginx directory
COPY --from=builder /Mimnur_Ferdous_ui_garden_build_checks/build /usr/share/nginx/html

# Expose port 80 (we'll map host port 8018)
EXPOSE 80

# Default command to run nginx
CMD ["nginx", "-g", "daemon off;"]
