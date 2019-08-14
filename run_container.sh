docker rm ds2
docker build -t ds2 .
docker run --name ds2 -p 80:80 -v $(pwd)/data:/var/www/html/data/ ds2
