### Builder
FROM node:18 as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

#### Runtime
FROM nginx:stable as app

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY .docker/expires.conf /etc/nginx/conf.d/expires.conf

RUN mkdir /app
COPY --from=builder /app/dist /app

CMD ["nginx", "-g", "daemon off;"]
