# Use Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/api

# Copy the backend-related files and dependencies
COPY package*.json ./
RUN npm install

# Copy everything else (including api folder)
COPY . .

# Expose port 3000 (backend runs here)
EXPOSE 3000

# Start the backend using npm
CMD ["npm", "start"]