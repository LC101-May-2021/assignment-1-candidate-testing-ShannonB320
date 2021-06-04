const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 

let candidateName = ""; 

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
];

let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name: "); 
return candidateName;
}


function askQuestion(arrOfQuestions) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0; i < arrOfQuestions.length; i++) {
    candidateAnswers[i] = input.question(arrOfQuestions[i]);
  }
  return candidateAnswers
}


let numCorrect = 0;
let grade = 0;

function gradeQuiz(arrOfAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i=0; i < arrOfAnswers.length; i++) {
    if (correctAnswers[i].toUpperCase() === arrOfAnswers[i].toUpperCase()) {
      numCorrect += 1;
    } else {
      numCorrect += 0;    
    }
  grade = numCorrect/5*100
  }
  return grade;
}



function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
    console.log("Hello, " + candidateName + "!\n");
  
  askQuestion(questions);
    console.log(`\nCandidate Name: ${candidateName}`)
    
    for (let i=0; i < questions.length; i++) {
      console.log(`\n${i+1}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}`);
    }

  gradeQuiz(this.candidateAnswers);
    console.log(`\n>>> Overall grade: ${grade}% (${numCorrect} out of 5 responses correct) <<<`)

    if (grade >= 80) {
      console.log(">>> Status: PASSED <<<");
    } else {
      console.log(">>> Status: FAILED <<<");
    }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};