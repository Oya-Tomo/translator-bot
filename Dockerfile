FROM ubuntu:latest

RUN mkdir /var/www/
RUN mkdir /var/www/bot
WORKDIR /var/www/bot

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y git vim g++ cmake

RUN apt-get -y install curl dirmngr apt-transport-https lsb-release ca-certificates

RUN curl -fsSL https://deb.nodesource.com/setup_21.x | -E bash -
RUN apt-get install -y nodejs

RUN git clone https://github.com/Oya-Tomo/translator-bot

RUN npm install
RUN npm update

RUN npm run build
RUN npm run start