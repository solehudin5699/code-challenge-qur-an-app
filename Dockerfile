FROM playcourt/nodejs:16-alpine

# Set Arguments On Build
ARG ARGS_NODE_BUILD=development

# Set Environment Variable
ENV ARGS_NODE_START=${ARGS_NODE_BUILD}
ENV BABEL_DISABLE_CACHE=1

# Set Working Directory
WORKDIR /usr/src/app

# Change Working User to "root"
USER root

# Copy Node Packages Requirement
COPY package*.json .npmrc ./

# Copy
COPY . .

# Install & Build Node Source Code File
RUN npm i && npm run build 

# Change Working User to "User"
USER user

# Expose Application Port
EXPOSE 3000

# Run The Application
CMD ["npm","run", "preview"]
