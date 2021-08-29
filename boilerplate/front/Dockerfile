# build stage
FROM node as build-stage

# working folder
WORKDIR /var/app/front
COPY . ./
RUN yarn --silent

# run server
EXPOSE 3000
CMD ["yarn", "start"]
