let studentGrades = process.argv.slice(2).map(Number);
console.log("Input grades:", studentGrades);

if (studentGrades.length === 0) {
    for (let i = 1; i < 4; i++) {
        studentGrades.push(38 * i);
    }
}

function isValidScore(score) {
    if (Number.isNaN(score)) {
        console.log(`Hey post your scores must be from 0 to 100`);
        return false;
    } else if (score < 0 || score > 100) {
        console.log(`It must be from 0 to 100.`);
        return false;
    }
    return true;
}

function calculateAverage(gradesArray) {
    const test1 = gradesArray[0] || 0;
    const test2 = gradesArray[1] || 0;
    const test3 = gradesArray[2] || 0;

    let avg = (test1 + test2 + test3) / 3;
    return avg;
}

function getGrade(averageValue) {
    let gradeString = `${averageValue.toFixed(2)}% percent out of 100`;
    return gradeString;
}

function passOrFail(averageValue, gradeString) {
    if (averageValue >= 50) {
        console.log(`You passed with a grade of ${gradeString}`);
    } else {
        console.log(`You failed with a score of ${gradeString}`);
    }
}

isValidScore(studentGrades[0]);
let finalAverage = calculateAverage(studentGrades);
let finalGradeString = getGrade(finalAverage);
passOrFail(finalAverage, finalGradeString);
