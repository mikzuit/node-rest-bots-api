# node-rest-bots-api

And Rest api build with Node.js and mongo. tested with mocha and supertest

# local installation 
    1. clone the repo
    2. inside the dir of the repo run :
    `docker-compose build`
    3. run tests: (you might need to kill with ctrl+c after)
    `docker-compose run robots-api npm test`
    4. check postman collections to test manually:
        [Postman Collection](https://www.getpostman.com/collections/d52a815efeba53b708f)
    5. launch the app in local so you can test with postman collections or curl 
    `docker-compose up`
    6. check in your browser:
        [Local Url](http://localhost:3000/)

enjoy!