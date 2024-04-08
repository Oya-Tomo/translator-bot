FROM ubuntu:latest

RUN mkdir /var/www/
RUN mkdir /var/www/bot
WORKDIR /var/www/bot

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y git vim g++ cmake

RUN apt-get -y install curl dirmngr apt-transport-https lsb-release ca-certificates

RUN curl -sL https://deb.nodesource.com/setup_21.x | bash -
RUN apt-get install -y nodejs

RUN git clone https://github.com/Oya-Tomo/translator-bot .

RUN npm install

CMD npm run build
CMD npm run start