# Use an official Nginx image as a base
FROM nginx:alpine

# Copy the website files to the container
COPY ./index.html /usr/share/nginx/html/
COPY ./styles.css /usr/share/nginx/html/
COPY ./images /usr/share/nginx/html/images/

# Expose port 80
EXPOSE 80

# Run Nginx server
CMD ["nginx", "-g", "daemon off;"]
