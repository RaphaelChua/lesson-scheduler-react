FROM node as builder

WORKDIR /source

COPY package.json /source

RUN yarn install

COPY . /source

RUN yarn run build

FROM nginx

COPY --from=builder /source/build /usr/share/nginx/html

EXPOSE 80