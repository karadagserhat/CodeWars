/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
*/

function points(games) {
  let point = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) point += 3;
    if (games[i][0] === games[i][2]) point += 1;
  }

  return point;
}

// const points2 = (games) =>
//   games.reduce((output, current) => {
function points2(games) {
  return games.reduce((output, current) => {
    return (output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);
}

console.log(points2(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']));
