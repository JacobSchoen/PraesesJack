# Praeses Technical Sample (PraesesJack)

This project is to be used for the Praeses Technical take home project. This technical brief was made with Angular for the frontend and C# .NET core for the backend utilizing a postgreSQL Database

# How to run

Start up the frontend (the-floor) and backend (the-pit) spin up a docker container of postgres

Afterwards open your browser and navigate to `http://localhost:4200/` to interact with PrasesJack

## The Floor
this is the angular frontend 

1. install dependencies 
```bash
npm install
```
2. run app
```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The Floor will automatically reload whenever you modify any of the source files./

## The Pit
this is the c# .NET core backend utilizing entity framework

1. build project
```bash
dotnet build
```
2. run app
```bash
dotnet run
```

3. Once postgres container is running run the database update to build tables
```bash
 dotnet ef database update
```

once the serve is running, you can access swagger at `http://localhost:5274/swagger`. Port 5274 is what the floor will use for api calls (its currently hardcoded)

## Postgres Container
you will need to run these commands to have the database setup

1. create docker volume 
```bash
docker volume create thepit-postgres-data
```
2. run docker with these settings port is hardcoded to The Pit so dont change
```bash
docker run --name thepit-postgres `
  -e POSTGRES_USER=postgres `
  -e POSTGRES_PASSWORD=postgres `
  -e POSTGRES_DB=thepit `
  -p 5432:5432 `
  -v thepit-postgres-data:/var/lib/postgresql/data `
  -d postgres:17
```

# Future Feature List
-MutiPlayer
    -Update to include a player name
-Betting(hey without this currently its kid friendly!)
-Offer Insurance
-Add a game history display and save game outcomes
-splitting of cards
-unit tests
-background music 
-smooth card drawing animation
-selection of amount of decks in shoe
