# first stage builds vue
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build-dev

FROM nginx:stable-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
