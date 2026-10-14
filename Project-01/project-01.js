// Variables
let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote:` “Anyone who knows me, should learn to know me again;For I am like the Moon,you will see me with new face everyday.” `,
    person: ` Rumi`
}, {
    quote: ` “Do not dare not to dare.” `,
    person: ` JC.S. Lewis, The Horse and His Boy`
}, {
    quote: ` “You're never given a dream without also being given the power to make it true.” `,
    person: ` Richard Bach`
}, {
    quote: ` “Think, Believe, Dream, and Dare.” `,
    person: ` JWalt Disney`
}, {
    quote: ` Can you remember who you were, before the world told you who you should be?” `,
    person: ` Charles Bukowski`
}, {
    quote: ` “You have every right to a beautiful life.” `,
    person: ` Selena Gomez`
}, {
    quote: ` “You’re not obligated to win. You’re obligated to keep trying. To the best you can do everyday.” `,
    person: ` Jason Mraz`
},];

btn.addEventListener('click', function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})