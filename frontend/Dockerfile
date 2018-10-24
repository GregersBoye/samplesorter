FROM node:10.4
WORKDIR /code
COPY ./ /code
RUN npm install
ENTRYPOINT ["npm"]
CMD ["start"]







#FROM nginx:1.13.7
#WORKDIR /usr/share/nginx/html
#COPY ./src /usr/share/nginx/html
#
#
#RUN rm -f /etc/nginx/conf.d/*
#COPY default.conf /etc/nginx/conf.d/default.conf
