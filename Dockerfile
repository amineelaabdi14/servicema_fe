# Use the node:20-alpine image as the base image and name it 'angular'
FROM node:20-alpine as angular

# Set the working directory inside the container to '/app'
WORKDIR /app

# Copy the package.json and package-lock.json files from the host to the '/app' directory in the container
COPY package.json package-lock.json ./

# Run 'npm ci' command to install the project dependencies based on the package-lock.json file, using the '--legacy-peer-deps' flag
RUN npm ci --legacy-peer-deps

# Copy all files from the host to the '/app' directory in the container
COPY . .

# Run 'npm run build --prod' command to build the Angular application in production mode
RUN npm run build --prod

# Use the nginx:alpine image as the base image
FROM nginx:alpine

# Copy the custom Nginx configuration file 'nginx-custom.conf' from the host to the '/etc/nginx/conf.d/default.conf' path inside the container
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular application files from the 'angular' stage (previous stage) to the '/usr/share/nginx/html' directory in the container
COPY --from=angular /app/dist/servicema/browser /usr/share/nginx/html