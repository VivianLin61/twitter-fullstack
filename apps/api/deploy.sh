echo What should the version be?
read VERSION

docker buildx create --use
docker buildx build --platform linux/amd64 --push -t vivianlin61/retwitter:$VERSION .
docker push vivianlin61/retwitter:$VERSION
ssh -i ~/.ssh/id_rsa root@134.209.38.244 "docker pull vivianlin61/retwitter:$VERSION && docker tag vivianlin61/retwitter:$VERSION dokku/retwitter-api:$VERSION && dokku deploy retwitter-api $VERSION"
