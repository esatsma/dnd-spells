# Local Development

Voor locale development is er een test api opgebouwd in de folder api.
Ga naar deze folder, draai npm install en je kunt de api aanzetten door
'node index.js' te draaien in de terminal

Check welke localhost port deze op draait, en save dit als je locale apiBase in de index.ts van je project

# Deploy

Deployen naar de website
Om de wijzigingen van de steigerconfigurator live te zetten naar de website moet er een NPM package geupdate worden. Dit doe je door;

Doe je wijzigingen in github

Commit je changes

Maak een gebuilde versie voor de shadowdom npm run build-shadow

Update de npm versie: npm version minor

publish de package: npm publish

Mocht je op deze stap een foutmelding krijgen:

Login op NPM

Binnen de  website kan je de package nu updaten:

npm update configurator

Commit je package-lock.json en package.json

Deploy de repo
