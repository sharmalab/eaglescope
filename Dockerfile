from node:12-alpine
RUN npm config set unsafe-perm true
RUN npm install -g http-server
RUN npm install -g parcel-bundler

RUN mkdir -p /source/
COPY ./ /source/
WORKDIR /source/
RUN rm -rf ./.git/

RUN npm install --legacy-peer-deps
RUN npm run-script build
RUN mkdir -p /var/www/html/
RUN mv /source/dist/* /var/www/html
WORKDIR /var/www/html/

EXPOSE 1180
CMD http-server -p 1180
