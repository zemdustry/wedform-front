### STAGE 1:BUILD ###
FROM node:18.15.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
# Copy files from local machine to virtual directory in docker image
COPY ./ .

#ARG configuration=production
RUN npm install
RUN npm run build --configuration production


### STAGE 2:RUN ###
FROM nginx:latest
RUN mkdir /app
COPY --from=build-stage /app/dist/wedformfront /app
COPY nginx.conf /etc/nginx/nginx.conf

# Exposing a port, here it means that inside the container
 #EXPOSE 80
 USER nginx
