FROM node
LABEL app="ms-codexam"

WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 8080
CMD [ "npm", "start" ]
