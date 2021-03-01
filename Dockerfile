from node:8-alpine

RUN npm install -g http-server
RUN npm install -g parcel-bundler
EXPOSE 80
RUN mkdir -p /source/
COPY ./ /source/
WORKDIR /source/
RUN rm -rf ./.git/

RUN chgrp -R 0 /source
RUN chmod -R g+rwX /source

USER 1001

RUN npm install
RUN npm run-script build
RUN mkdir -p /var/www/html/
RUN mv /source/dist/* /var/www/html
RUN mv /source/treemap /var/www/html
RUN mv /source/data /var/www/html
WORKDIR /var/www/html/

CMD http-server -p 80
