/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/

let quotes = [
    {
        quote: `I'm a programmer and I never give up`,
        author: `Md Safayet Hossain`
    },

    {
        quote: `Programming isn't about what you know; it's about what you can figure out.`,
        author: `Chris Pine`
    },

    {
        quote: `The only way to learn a new programming language is by writing programs in it.`,
        author: `Dennis Ritchie`
    },

    {
        quote: `Sometimes it's better to leave something alone, to pause, and that's very true of programming`,
        author: `Joyce Wheeler`
    },

    {
        quote: `In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.`,
        author: `Andrew Hunt`
    },

    {
        quote: `Testing leads to failure, and failure leads to understanding.`,
        author: `Burt Rutan`
    }
]

let quoteBtn = document.getElementById('load-quote')
let quote = document.querySelector('.quote')
let author = document.querySelector('.source')


quoteBtn.addEventListener('click', function(){
 
    let random = Math.floor(Math.random()*quotes.length)
    quote.innerHTML = quotes[random].quote
    author.innerHTML = quotes[random].author 


})

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 ***/
