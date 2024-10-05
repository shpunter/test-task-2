what can be improved:
Firs of all request error handling. Can be done in fetcher.ts. Catch an error and create an event. Using event listener (somewhere in the app) 
handle how to show an error for a user.

In real life you have way more posts. That is why you can't just fetch all posts. You should fetch 50-100 posts at a time and load more
only if needed (for example user start scrolling). In this case nice to have infinite loading with infinite scroll.



Set up: clone the project and run "npm install".
To start an app: "npm run dev"