const studentScores = process.argv.slice(2).map(Number);
const money = Math.round(Math.random() * 1000) + 1;


const CheckValidScore = function(grade){
    const grade1 = grade[0] || 0;
    const grade2 = grade[1] || 0;
    const grade3 = grade[2] || 0;
    if(grade1 > 100 || grade1 < 0 || grade2 > 100 || grade2 < 0 || grade3 > 100 || grade3 < 0 ){
        return false;
    } else {
        return true;
    }
}


function isValidScore(score){
    if(typeof score !== 'number' || score > 100 || score < 0){
        return false;
    } else {
        return true;
    }
}

function calculateAverage(numbers){
    
    if(CheckValidScore(numbers)){ 
        const grade1 = numbers[0] || 0;
        const grade2 = numbers[1] || 0;
        const grade3 = numbers[2] || 0;
        
        const studentAverage = (grade1 + grade2 + grade3) / 3;
        return studentAverage;
    } else {
        return "Failed";
    }
} 

function getGrade(score){
    if (score === "Failed") return "N/A"; 
    
    switch (true) {
        case (score >= 90):
            return `A`;
        case (score >= 80):
            return `B`;
        case (score >= 70):
            return `C`;
        case (score >= 50):
            return `D`;
        default: 
            return `F`;
    }
}

function formatCedis(amount){
    const fomattedAmount = amount.toFixed(2);
    const FormatedCedis = `GH₵${fomattedAmount}`;
    return FormatedCedis;
}

console.log("Is first score valid?:", isValidScore(studentScores[0])); 
console.log("Are all scores valid?:", CheckValidScore(studentScores));

const avg = calculateAverage(studentScores);
console.log("Average:", avg);
console.log("Grade:", getGrade(avg));
console.log("Money:", formatCedis(money));
