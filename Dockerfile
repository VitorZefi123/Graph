# Use Nginx to serve static files
FROM nginx:alpine

# Copy your frontend static files to the Nginx directory
COPY ./GraphDevelopment/GraphProject/Client /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
