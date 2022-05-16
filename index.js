
/*const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')

const questionContainerElement = document.getElementById('questions-container')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,correctQuestionsIndex;
let quizScore=0;

startButton.addEventListener('click',startGame)

nextButton.addEventListener('click',()=>{
  currentQuestionIndex++
  setnextQuestion()
})

function startGame(){
  startButton.classList.add('hide')
  shuffledQuestions=questions.sort(()=>Math.random( -0.5))
  currentQuestionIndex=0;
  questionContainerElement.classList.remove("hide")
  setnextQuestion()
  quizScore=0
}

function setnextQuestion(){
  resetState();
  showquestion(shuffledQuestions[currentQuestionIndex])
}

function showquestion(question) { 
  questionElement.innerText=question.question;
  question.answers.forEach((answer)=>{
    const button=document.createElement('button')
    button.innerText=answer.text;
    button.classList.add('btn')
    if(answer.correct){
      button.dataset.correct=answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState(){
  clearStatusClass(document.body)
  nextButtons.classList.add('hide')
  while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


function selectAnswer(e){
  const selectedButtons=e.target
  const correct=selectedButton.dataset.correct

  setStatusClass(document.body,correct)
  Array.from(answerButtonElement.children).forEach((button)=>{
    setStatusClass(button,button.dataset.correct)
  })
  if(shuffledQuestions.length>currentQuestionIndex +1){
    nextButton.classList.remove("hide")
  }else{
    startButton.innerText="restart"
    startButton.classList.remove("hide")
  }
  if(selectedButtons.dataset=correct){
    quizScore++
  }
  document.getElementById('right-answer').innerText=quizScore
}


function setStatusClass(element,correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add("correct")
  }else{ 
    element.classList.add("wrong")
  }
}


function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
const question=[
  {
    questions: 'What is javascript?',
    answers:[
      {text:'',correct:true},
      {text:'',correct:false},
      {text:'',correct:false},
      {text:'',correct:false},
    ],
  },
  {
    questions: '',
    answers:[
      {text:'',correct:false},
      {text:'',correct:false},
      {text:'',correct:true},
      {text:'',correct:false},
    ],
  },
  {
    questions: '',
    answers:[
      {text:'',correct:false},
      {text:'',correct:false},
      {text:'',correct:false},
      {text:'',correct:true},
    ]
  },
  {
    questions: '',
    answers:[
      {text:'',correct:true},
      {text:'',correct:false},
      {text:'',correct:false},
      {text:'',correct:false},
     
    ]
  },
  {
    questions: '',
    answers:[
      {text:'',correct:false},
      {text:'',correct:false},
      {text:'',correct:false},
      {text:'',correct:true},
    ]
  },
  {
    questions: '',
    answers:[
      {text:'',correct:false},
      {text:'',correct:true},
      {text:'',correct:false},
      {text:'',correct:false},
    ]
  },

]*/
/*(function(){

const quizeContainer = document.getElementById('questions');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');



function buildQuize(){
const output=[]; //var to store the output

myQuestions.forEach(
  (currentQuestion,questionNumber)=>{
    const answer=[];//var to store the list of possible answers

    for(letter in currentQuestion.answers){

      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}"value="${letter}"></input>
          ${letter}:
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }
//adds question and answer to output
    output.push(
      `<div class="question">${currentQuestion.questions}</div>
      <div class="answers">${answers.join('')}</div>`
    );
  }
);

quizeContainer.innerHTML=output.join('');//combines our output into one string

}



function showResults(){
  const answerContainers = quizeContainer.querySelectorAll('.answers');

  let numCorrect = 0;


  myQuestions.forEach( (currentQuestion, questionNumber) => {

    
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    
    if(userAnswer === currentQuestion.correctAnswer){
  numCorrect++;


  answerContainers[questionNumber].style.color = 'limegreen';
}

else{

  answerContainers[questionNumber].style.color = 'red';
}
});

resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

}

buildQuize();

submitButton.addEventListener('click',showResults);

const myQuestions =[
  {
    question:"How to declare an array of 10 elements in javascript?",
    answers:{
      a:"arr=new Array(10)" ,
      b:"var arr[10]" ,
      c:"var arr=array(10)" ,
      d:"var arr(10)"
    },
    correctAnswer:"a"
  },
  {
    question:"How to get a random number between 5 and 9 inclusive?",
    answers:{
      a:"math.floor((math.random()*5)+4);" ,
      b:"math.floor((math.random()*4)+4);" ,
      c:"math.floor((math.random()*4)+5);" ,
      d:"math.floor((math.random()*5)+5);"
    },
    correctAnswer:"d"
  },
  {
    question:"To check if three variables are equal, we are going to use_____?",
    answers:{
      a:"x=y=z" ,
      b:"(x==B)&&(y==z)" ,
      c:"(X = B) && (Y = Z)" ,
      d:"(X == B) & (Y == Z)"
    },
    correctAnswer:"b"
  },
  {
    question:"How many parameters can be passed to a function?",
    answers:{
      a:"any" ,
      b:" As much as you want" ,
      c:"One for each argument" ,
      d:" One argument"
    },
    correctAnswer:"c"
  },
  {
    question:"Which of these parameters is not valid?",
    answers:{
      a:"text" ,
      b:"a variable" ,
      c:"an operator" ,
      d:"a number"
    },
    correctAnswer:"c"
  },
  {
    question:"Which one is not a comparison operator?",
    answers:{
      a:"<" ,
      b:">" ,
      c:"=" ,
      d:"!="
    },
    correctAnswer:"c"
  }
]
})();*/

function quizScore(){
    var score=0;
    var percentage=0;
    var  calculate=0;


    if(document.getElementById("correct1").checked){score++;};
    if(document.getElementById("correct2").checked){score++;};
    if(document.getElementById("correct3").checked){score++;};
    if(document.getElementById("correct4").checked){score++;};
    if(document.getElementById("correct5").checked){score++;};
    if(document.getElementById("correct6").checked){score++;};

    document.write("Total Score:"+""+ score);
    alert("get your total score");

    calculate=score/6;
    percentage=score/6*100;

    if(percentage>=80
      ){
      document.write(""+"[performed excellently]")
    }
    else if(percentage>=50 && percentage<=80){
      document.write(""+"[fairly passed]")
    }
    else{
      document.write(""+"[performed poorly]")
    }
}

function next(id){
  document.getElementsById("question")
}