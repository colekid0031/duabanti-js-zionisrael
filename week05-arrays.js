const students = [
  {name: 'Zion', Score: 50},
  {name: 'Mark', Score: 100},
  {name: 'King', Score: 72},
  {name: 'Lily', Score: 9},
  {name: 'Tide', Score: 55},
  {name: 'Joey', Score: 30},
  {name: 'Lee', Score: 60},
  {name: 'Tai', Score: 90},
];

const getNames = students.map(student => student.name);

function getPassing(students) {
  return students.filter(student => student.Score >= 50);
}

const getTotal = students.reduce((total, student) => total + student.Score, 0);


function getTopScorer(students) {
  if (students.length === 0) {
    return undefined;
  }

  let winner = students[0].Score;

  for (const student of students) {
    if (student.Score > winner) {
      winner = student.Score;
    }
  }
return students.find((student) => student.Score === winner);

}
const rank = students.slice().sort((a, b) => b.Score - a.Score);

console.log( `The students are ${getNames}. (${getNames.length}) Students in Total.` );
console.log(`The People who passed are ${getPassing(students).length} People altogether. They are`,getPassing(students));
console.log(`The Total of all the grades is ${getTotal} out of 800`);
console.log(`The top scorer in the school is `,getTopScorer(students));
console.log(`Ranking of people by grades`,rank);
