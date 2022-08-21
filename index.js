//How well do you know me quiz
//Project 1

var readLineSync = require('readline-sync');

function quiz(){
  var score = 0;
  console.log('Do you know me?\n');
  var q1 = readLineSync.question("Do I like Marvel movies?(yes/no)");
  if(q1 === 'yes'){
    score++;
    console.log('You are right!');
    console.log('score: ', score);
  }
  else{
    console.log('You are wrong');
    console.log();
  }

  console.log();
  var q2 = readLineSync.question("Is Ironman my favourite superhero?(yes/no)");
  if(q2 === 'yes'){
    score++;
    console.log('You are right!');
    console.log('score: ', score);
  }
  else{
    console.log('You are wrong');
    console.log();
  }
  console.log();
  var q3 = readLineSync.question("Is coding my favourite passion?(yes/no)");
  if(q3 === 'yes'){
    score++;
    console.log('You are right!');
    console.log('score: ', score);
  }
  else{
    console.log('You are wrong');
    console.log();
  }
  console.log();
  var q4 = readLineSync.question("Do I like playing chess?(yes/no)");
  if(q4 === 'no'){
    score++;
    console.log('You are right!');
    console.log('score: ', score);
  }
  else{
    console.log('You are wrong');
    console.log();
  }
  console.log();
  var q5 = readLineSync.question("Do I like playing cricket?(yes/no)");
  if(q5 === 'yes'){
    score++;
    console.log('You are right!');
    console.log('score: ', score);
  }
  else{
    console.log('You are wrong');
    console.log();
  }
  console.log();
  var q6 = readLineSync.question("Do I live in Mumbai?(yes/no)");
  if(q6 === 'yes'){
    score++;
    console.log('You are right!');
    console.log('score: ', score);
  }
  else{
    console.log('You are wrong');
    console.log();
  }

  console.log('\nFinal score: ', score);
}

quiz();