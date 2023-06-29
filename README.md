# Arcadia_server
Server: Full Stack Ecommerce Application

## Packages Used

body-parser
```
 Parses the JSON, buffer, string and URL encoded data submitted using HTTP requests
```

cors
```
  Restricts who can make requests to server
```

dotenv
```
  Environment variables to store secret keys
```

express
```
  Most popular node route manager
```

nodemon
```
   It monitors your project directory and automatically restarts your node application when it detects any changes.
```

stripe
```
  Sever authentication of requests to client (Stripe UI)
  https://stripe.com/docs/api/authentication?lang=node
```

## To Run Locally
```
  git clone git@github.com:hakeem0114/arcadia_server
```
```
  npm i 
```
## Secret Keys
Create your own keys in a .env file called:
```
  PORT: <insert local host PORT>
  STRIPE_API_KEY: <insert your stripe secret key>
```