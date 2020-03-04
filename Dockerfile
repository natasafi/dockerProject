#base image
FROM node:alpine

WORKDIR /usr/app

#install dependencies
COPY ./ ./
RUN npm install

#default command
CMD ["npm", "start"]