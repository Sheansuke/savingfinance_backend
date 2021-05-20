FROM node:14-alpine AS BUILD_IMAGE

WORKDIR /usr/src/savingfinance_backend_dev

COPY package.json yarn.lock ./

RUN yarn install

COPY . /usr/src/savingfinance_backend_dev

FROM node:12-alpine

ENV NODE_ENV=development

WORKDIR /usr/src/savingfinance_backend_dev

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/savingfinance_backend_dev ./
COPY --from=BUILD_IMAGE /usr/src/savingfinance_backend_dev/node_modules ./node_modules


EXPOSE 7000

CMD ["yarn", "dev"]