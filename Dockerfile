# Stage 1: Build the application
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
