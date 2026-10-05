docker volume create thepit-postgres-data

docker run --name thepit-postgres `
  -e POSTGRES_USER=postgres `
  -e POSTGRES_PASSWORD=postgres `
  -e POSTGRES_DB=thepit `
  -p 5432:5432 `
  -v thepit-postgres-data:/var/lib/postgresql/data `
  -d postgres:17