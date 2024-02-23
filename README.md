# Tickets

## Running the project
Prerequisites:
* Node v18+ installed
* Angular CLI v17

Steps:
1. Install dependencies
```sh
npm i
```
2. Serve
```sh
ng serve
```

## About
The project was developed in about 4 hours using Angular 17. <br />
I started by exploring TicketMaster's API to see all the possibilities. <br />
Then, I quickly sketched how I wanted the app to look in Figma - this helped me define the priorities and develop in a more objective manner. <br />
After that, I planned how the components would communicate and started coding. <br />

## What I would've done different
I would never expose API keys in the front end. I would definitely create a backend containing the credentials to proxy the requests. Since this is not a real app and TicketMaster's API is free and has rate limits, I considered it okay to directly make the requests and expose the key inside environment.ts. <br />
I wouldn't use Tailwind to avoid code repetition, but I am very productive with it and it saved me some time. <br />
I would have created unit and E2E tests. <br />
I would have used URL query parameters for the queries, to maintain state when sharing links or reloading the page.<br />
I would have created better error handling.

![image](https://github.com/brunocapri/tickets/assets/43188628/ce7c2e32-ef7e-4ed2-90dc-e91db526e53c)

<img src="https://github.com/brunocapri/tickets/assets/43188628/ef14309f-607d-4b1b-b3b9-6153a76045e9" width="40%" />
