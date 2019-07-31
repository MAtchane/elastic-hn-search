# Elastic HN Search
![Elastic HN Search Log](extra/elastic-hn-search.png?raw=true "App Logo")

A Spring Boot - Angular application that indexes hacker news posts and provides ElasticSearch powered search of them.

## Prerequisites

* Java 8 (tested on 1.8.0_212)
* Node.js (tested on v10.16.0)
* Elastic Search server, v6+ (tested on 6.8.1)

## Get started

The project will index existing Hacker News posts once started then check periodically for new items to add to the Elastic Search server.

By default, it will only index posts of the types: `job, story, poll & pollopt`.

You can customize the indexing behaviour using the following `properties` (see [application.properties](./src/main/resources/application.properties)):
 
```properties
#---------------------
# Elastic Config
#---------------------
es.task.period=5000 //ES Indexing period
#es.server.uri=${SEARCHBOX_URL} // ES server Uri, picked up from the environment variables
es.server.uri=http://localhost:9200 // ES server Uri hardcoded
es.hn-items.index.name=hn_item // HN items ES index name
es.hn-items.index.overwrite=true // Overwrite existing items index
es.hn-items.type.toindex=job;story;poll;pollopt // Item types to index, separated by a comma

#---------------------
# HN Api Config
#---------------------
hn.api.base=https://hacker-news.firebaseio.com/v0 // HN Api base Uri
hn.api.item=${hn.api.base}/item/ // HN Api item Uri
hn.api.max-id=${hn.api.base}/maxitem.json // HN Api max Id Uri
hn.item.start-id=20207800 // Index starting id
```

## Usage

The project is divided into two parts: the backend (`Spring-boot`) & the web client (`Angular 7`).

The repository already contains a pre-compiled web client (`./client/dist`), so you can start the entire project by only running the server.

To start the server, cd into the project root folder and run:
 
```bash
./mvnw spring-boot:run
```

If you want to start the client independently, you'll have to install the Angular Cli first:
 
```bash
npm install -g @angular/cli
```

then cd into the `client` sub-folder and run:

```bash
ng serve
```

For more information, checkout the [client README]

## Build

To build the project into a java package (an executable “fat” JAR by default), you'll have to build the web client first:

```bash
cd client
ng build --prod
```

then:

```bash
cd ..
mvn clean package
```

N.B. The `Maven Resources Plugin` will automatically pickup the content of the `./client/dist` and add it to the `public` folder of the resulting java package.

## Publishing on Heroku

TBA

## Credits

The timestamps are powered by the [ngx-timeago module](https://github.com/ihym/ngx-timeago)

## Contributing

PRs accepted.

## License

© Mosab ATCHANE

[clientReadme]: ./client/README.md
