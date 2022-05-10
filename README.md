# Base blog

## Project setup 

### App

```yarn```

### Server

- Signup on [Ngrok](https://dashboard.ngrok.com/signup)
- Download [Ngrok](https://ngrok.com/download) and follow the
instructions written.
- Then install the server dependancies :

```cd jsonserver && yarn```

### Start the server

- ```cd jsonserver```
- ```yarn db``` : to run your json server
- ```yarn tunnel``` : to run the ngrok service
- Copy the url *ngrok.io* from **Forwarding**

### Start the app

- ```cp .env.example .env```
- Paste the copied url in SERVER_URL
- ```cd .. && yarn start```



