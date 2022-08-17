FROM node

USER root

RUN mkdir -p /root/api-test 

WORKDIR /root/api-test

COPY . /root/api-test/

RUN npm ci

CMD ["npm", "run", "test"]

