/* 
Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
Input will always be valid, i.e. no negative integers.
*/

const countSheep = function (num) {
  //your code here
  if (num <= 0) return '';
  const a = [];
  for (let i = 0; i < num; i++) {
    a.push(`${i + 1} sheep...`);
  }
  return a.join('');
};

const countSheep2 = function (num) {
  //your code here
  let str = '';
  for (let i = 0; i < num; i++) {
    str += `${i + 1} sheep...`;
  }
  return str;
};

console.log(countSheep2(3));
