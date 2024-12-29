// /*Problem Statement: You are creating a score management system for student results. Start with an array of 10 student scores. The program should do the following:
// For any student with a score below 40, increase their score by 20. For students with scores over 90, adjust their score to a maximum of 90. Count and log how many students passed (score of 50 or more) after the adjustments. Log the final adjusted array of scores. *//

let studentScore= [17, 45, 69, 90, 87, 99, 23, 55, 34, 78];
let count= 0;
for(let i=0; i<=studentScore.length; i++){
    if(studentScore[i] <40){
        studentScore[i] +=20;
    }if(studentScore[i] > 90){
        studentScore[i] =90;
    }if(studentScore[i] >= 50){
        count++;
    }
}
let UpdatedScore = studentScore
console.log("Updated Score :-", UpdatedScore);
console.log("Number of Students are pass :", count);