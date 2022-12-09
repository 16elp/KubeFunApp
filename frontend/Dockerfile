FROM python:latest

RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .

CMD python3 -m http.server 2000
