# Build stage
FROM oven/bun:latest AS build

# Set the working directory
WORKDIR /app

# Copy the package files to install dependencies
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile --production

FROM oven/bun:latest

# Set the working directory
WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY src ./

# Expose the port your app will run on
EXPOSE 3000

# Run the Elysia app with Bun
CMD ["bun", "run", "src/main.ts"]
