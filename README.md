## Description
Why Nest.js, Nest.js has a built-in structure to get started easily, also supports TypeScript right away, also has many features that are convenient for development and use, also easy to use for different types of architectures, strictly typed.

What server will do after running, you can open postman or any instrument what can make api call.
After starting the server, you can use this url, copy and paste in the terminal 
1. curl -X POST -H "Content-Type: application/json" -d '{"signals": [2,2,2,2,8,8,8,8,8,8,9,9,9,9]}' http://localhost:3000/test  </br>
2. curl -X POST -H "Content-Type: application/json" -d '{"signals": [2,8,9,2,2,8,8,8,8,8,8,9,9,9,9]}' http://localhost:3000/test/pattern  </br>
</br>
Or if you have postman: 
you need to run open postman or any other tool that can make API calls. We have 2 endpoints:
1. http://localhost:3000/test is where the "industrial test" is checked, in the body of the request you insert the field </br>
{
"signals": [2,2,2,2,8,8,8,8,8,8,9,9,9,9]
} </br>
And check if this is an "industrial test", if it turns out that it is, then you will get something like this answer
</br>{
"289": {
"pattern": "289",
"start": "4",
"stop": "13",
"duration": "9"
}
}</br>
If this is not "industrial test" then the answer will be {}

2. http://localhost:3000/test/pattern Identify every instance of a test based on the patterns mentioned. </br>
in the body of the request you insert the field </br> {
   "signals": [2,8,9,2,8,8,8,8,8,8,9,9,9,9]
   } </br>
   If something is found, it will come in this way, with this pattern ["2,8,9"]</br>
   If this is not "industrial test" then the answer will be []
## Improvements
I see room for improvement if I convert APIs to websockets and accept numbers one by one


## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## API

```bash
# Analyze Time Series
http://localhost:3000/test/

# Test Pattern
http://localhost:3000/test/pattern
```