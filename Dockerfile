### STAGE 1:BUILD ###
FROM node:18.15.0-alpine as build-stage

WORKDIR /app
COPY package*.json ./
# Copy files from local machine to virtual directory in docker image
COPY ./ .

#ARG configuration=production
RUN npm install
#RUN npm run build -- --configuration=production
RUN npm run build -- --configuration=production --localize=true

### STAGE 2:RUN ###
FROM nginx:latest
COPY --from=build-stage /app/dist/wedformfront /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf" && nginx -g 'daemon off;'
# Exposing a port, here it means that inside the container
 USER nginx
