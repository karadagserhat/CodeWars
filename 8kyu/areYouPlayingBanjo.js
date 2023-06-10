/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
*/

function areYouPlayingBanjo(name) {
  //   const letter = name.toLowerCase().at(0);
  //   const letter = name[0];
  //   return letter.toLowerCase() === 'r' ? name + ' plays banjo' : name + ' does not play banjo';
  return name + (name[0].toLowerCase() === 'r' ? ' plays' : ' does not play') + ' banjo';
}

console.log(areYouPlayingBanjo('ring'));
