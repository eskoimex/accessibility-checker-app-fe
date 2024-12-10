# Use a lightweight Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
