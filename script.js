const quote = document.querySelector("#quote");

const author = document.querySelector("#author");

const btn = document.querySelector("#btn");
 

  function generate_quote() {


    let API="https://dummyjson.com/quotes/random";


    fetch(API)

    .then((response) => response.json())

    .then((data) => {
    
    console.log(`The famous saying, ${data.quote} by ${data.author}`);
    
    quote.textContent = data.quote;
    author.textContent = data.author;
   
    })
 
   .catch((error) => alert(`fetch error : ${error}`));
  
}

   btn.addEventListener("click" ,  generate_quote);
   
   






