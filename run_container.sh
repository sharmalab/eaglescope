docker rm eaglescope
docker build -t eaglescope .
docker run --name eaglescope -p 1180:1180 -v $(pwd)/config:/var/www/html/config/ eaglescope
