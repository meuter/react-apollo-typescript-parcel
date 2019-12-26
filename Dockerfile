FROM nginx

# Install nodejs and yarn globally
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn

# Install the app in /app/
WORKDIR /app/

# Install dependencies
COPY package*.json ./
RUN yarn install

# Build the app
COPY ./ ./
RUN npm config set scripts-prepend-node-path true
RUN yarn build

# Install the frontend part to nginx
RUN cp -rv build/frontend/*  /usr/share/nginx/html/

# Setup ^C to terminte the container
STOPSIGNAL SIGTERM

# Export ports 3000=backend 80=nginx
EXPOSE 3000
EXPOSE 80

# Start the app and nginx
CMD [ "/bin/bash" , "-c", "nginx -g \"daemon off;\" & node build/backend/index.js" ]

