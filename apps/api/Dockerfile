# Use an official Node.js runtime as a parent image
FROM node:20 AS builder

# Set the working directory
WORKDIR /app


# Copy the API app dependencies
COPY package*.json ./
COPY prisma ./prisma/

# Copy the environment configuration file
COPY .env.production .env

# Install app-specific dependencies
RUN npm install
RUN npx prisma generate

# Copy the API app source code
COPY . .

# Build the application
RUN npm run build

FROM node:20

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/prisma ./prisma


# Expose the application port
EXPOSE 8080

# Run the application
CMD [ "npm", "run", "start:migrate:prod" ]

# Use a non-root user for better security
USER node
