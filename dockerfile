FROM node:12.17.0-slim as node
WORKDIR /app
COPY package*.json /app/
RUN npm install --silent
COPY ./ /app/
RUN npm run build

FROM nginx:1.13
COPY --from=node /app/dist/erp-ui /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf