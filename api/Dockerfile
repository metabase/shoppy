FROM node:22-bullseye AS runner

ARG DB_URL
ENV DB_URL=${DB_URL}

WORKDIR /app

COPY ./api ./api

WORKDIR /app/api

RUN yarn --frozen-lockfile

RUN yarn build

RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]

CMD ["yarn", "start"]
