// npm init
var oneLinerJoke = require("one-liner-joke");
/*The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}*/
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);
const x = getRandomJoke.body;


const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: x,
    e: "ee",
    T: "",
  })
);


const y = {
  Name: "Soham",
  Organisation: "BITS",
  food_likes: ["Paneer", 79, "true", "a"],
};
console.log(y.food_likes[1]);
