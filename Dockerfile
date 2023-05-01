FROM cypress/included:latest

WORKDIR /

COPY . .

RUN npm install

CMD [""] 