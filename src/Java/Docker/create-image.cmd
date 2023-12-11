docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dokumentooborot5-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t dokumentooborot5-java/app ../../..
