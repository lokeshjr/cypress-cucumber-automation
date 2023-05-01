FROM cypress/included:latest

RUN mkdir /cypress-docker

WORKDIR /cypress-docker

COPY . .

RUN npm install

CMD [""] 