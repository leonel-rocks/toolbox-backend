# toolbox-backend

Welcome to my code challenge. 

This repository contains a API Rest, using **NodeJS + ExpressJS**, which consumes an external API about CSV files.

First of all you should run the project on **NodeJs 14**. You can use nvm to easily change versions. 

**Example:** ```nvm use 14.0.0```

Then ```npm install``` and run ```npm start```

Once you run the project you can consume the following endpoint:

http://localhost:4000/files/data

This endpoint returns an array of csv files with their respective lines formatted as follows:

![image](https://user-images.githubusercontent.com/34432135/158006232-b0facb92-67c1-44dc-9ebc-638ddfe60c0c.png)

Where line keys are the column names.

Also you can add a query string called fileName to this request:

http://localhost:4000/files/data?fileName=test9.csv

This request returns the information of just one csv file only if exists:

![image](https://user-images.githubusercontent.com/34432135/158006283-b8cf9880-b954-499a-bb66-b5840cf00d6b.png)

Otherwise, in case the file does not exist it returns empty lines:
```
[
   {
      "file":"idontexist.csv",
      "lines":[
         
      ]
   }
]
```

Unit tests were implemented using **Mocha + Chai**. Coverage results are as follows:

![image](https://user-images.githubusercontent.com/34432135/158006503-12a7eb93-9f94-42fa-b63e-2e1083d7b0cb.png)

To run tests use ```npm test```

I'm always happy to receive feedback. If you think I need to improve my code, please leave a comment ;)
