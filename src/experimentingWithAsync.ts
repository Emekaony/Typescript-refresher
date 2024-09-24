/*
I want to show that async work blocks the thread, but the 
async function itself does not block.
*/

async function returnNumberAsync(): Promise<number> {
  return 8;
}

async function getAsyncNumber() {
  const num = await returnNumberAsync();
  console.log("type of number is: " + typeof num);
}

getAsyncNumber();

// just a basic async function that returns a string after 3 seconds
async function getDataFromServer(): Promise<string> {
  return new Promise<string>((resolve) => {
    // setTimeour is just a way to make javascript code wait for a while
    setTimeout(() => {
      const movie: string = "Dark Knight Rises";
      resolve(movie);
    }, 3000);
  });
}

async function doSomeAsyncWork(): Promise<void> {
  console.log("Inside the doSomeAsyncWork function, this will print asap");
  let movieTitle: string = await getDataFromServer();
  console.log(
    "Also inside the doSomeAsyncWork function but this will print after 3 seconds due to the blocking nature of await keyword!"
  );
  console.log(`Finally got the title of the movie: ${movieTitle}`);
}

console.log("The async function has started executing");
doSomeAsyncWork();
console.log(
  "Async function is done executing, you see this will print BEFORE async function is actually done!"
);
