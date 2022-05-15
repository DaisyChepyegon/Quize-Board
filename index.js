
const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')

const questionContainerElement = document.getElementById('questions-container')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,correctQuestionsIndex;
let quizScore=0;



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
    questions: '',
    answers:[
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
    ],
  },
  {
    questions: '',
    answers:[
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
    ],
  },
  {
    questions: '',
    answers:[
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
    ]
  },
  {
    questions: '',
    answers:[
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
    ]
  },
  {
    questions: '',
    answers:[
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
    ]
  },
  {
    questions: '',
    answers:[
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
      {text:'',correct:},
    ]
  },

]