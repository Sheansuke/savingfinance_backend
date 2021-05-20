FROM node:14-alpine AS BUILD_IMAGE

WORKDIR /usr/src/savingfinance_backend_dev

COPY package.json yarn.lock ./

# install dependencies
RUN yarn install  --frozen-lockfile --production

COPY . .

CMD ["yarn", "build"]


FROM node:12-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/savingfinance_backend_dev

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/savingfinance_backend_dev/dist ./dist
COPY --from=BUILD_IMAGE /usr/src/savingfinance_backend_dev/.env ./
COPY --from=BUILD_IMAGE /usr/src/savingfinance_backend_dev/node_modules ./node_modules

EXPOSE 7000

CMD ["node", "./dist/app.js"]
