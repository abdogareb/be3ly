FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install -g nodemon
RUN npm install
COPY . /app
CMD ["nodemon", "/server.js"]

