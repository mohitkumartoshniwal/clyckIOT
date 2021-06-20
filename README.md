
# Clyck

We are Clyck, an IOT platform that allows you to control your IOT devices from any part of the world.




## Authors

- [@vinayakaraju46](https://github.com/vinayakaraju46)
- [@mohitkumar](https://github.com/mohitkumartoshniwal)

  
## Tech Stack

**Client:** Vue, Vuetify

**Server:** Node, Express, MongoDB, FireBase

  
## Project Installation

Clone the project

```bash
  git clone https://github.com/vinayakaraju46/firebaseIOT
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies at Server

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Install dependencies at client

```bash
   cd client
   npm install

```
Start Client server

```bash
   npm run serve
```



  
## FireBase Setup 

* Create project in firebase
* Click on Authentication tab and get started
* Under sign-in method, enable Google sign
* You can get your Firebase configuration object containing keys and identifiers for your app under Project settings in Firebase
* Navigate to /src in client and create firebaseCredentials.js file
* Replace with your own credentials
* Navigate to /config in server and create serviceAccountKey.json

firebaseCredentials.js
```javascript 
  const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXX",
  measurementId: "XXXXXXXXXXXXXX",
};

export default firebaseConfig;
```


serviceAccountKey.json
```json
{
    "type": "service_account",
    "project_id": "XXXXXXXXXXXXXXXX",
    "private_key_id": "XXXXXXXXXXXXXXXX",
    "private_key": "XXXXXXXXXXXXXXXX",
    "client_email": "XXXXXXXXXXXXXXXX",
    "client_id": "XXXXXXXXXXXXXXXX",
    "auth_uri": "XXXXXXXXXXXXXXXX",
    "token_uri": "XXXXXXXXXXXXXXXX",
    "auth_provider_x509_cert_url": "XXXXXXXXXXXXXXXX",
    "client_x509_cert_url": "XXXXXXXXXXXXXXXX"
}
```
## MongoDB Setup
* Paste your MongoDB URI in .env file. Refer sample.env for structure. 
* Refer this article:- [MongoDB](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database)

    
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.





  
## Demo
* [Clyck](https://iotfrontendvue.herokuapp.com)
* [Video](https://youtu.be/iuoQcgHl23I)


  
## Roadmap

- Adding unit and integration test. 

- Adding rate limit to API calls from Hardware.

- Over-the-air programming to update code in Hardware. 

- Adding features to authenticate Hardware.

- Add PWA support.

- Add Swagger for API.
- Implement CI/CD.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MongoURI`

  
## Lessons Learned

What did we learn while building this project? 

* To build single page applications using Front End frameworks like Vue from scratch.
* To create REST services with NodeJs and Express.
* Integration of MongoDB with NodeJs.
* Authorization and Authentication using Firebase(Google single sign-In).
* Deployment of client and server in Heroku. 
* Integration of hardware(esp32 and esp8266) with REST services.
* System Design.
* WireFraming and designing layouts for UI screens.

What challenges did we face ?
* Authentication of requests and user sign-In.
* Deployment of frontend and backend in single server.
* Personal commitment.

## License

[MIT](https://choosealicense.com/licenses/mit/)

  
