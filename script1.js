const getQuote = document.getElementById("btn");
const content = document.getElementById("quote");
const author  = document. getElementById("author");

async function codeGenerator() {

    let apiQuote = "https://dummyjson.com/quotes/random";
   
    let response =  await fetch(apiQuote);
    console.log(response);
    
    if (response.ok) {
     let data = await response.json();
     console.log(data);

    quote.textContent = data.quote;
    author.textContent = data.author;
        
    }
    
}

getQuote.addEventListener("click" , codeGenerator );