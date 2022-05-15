
const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')

const questionContainerElement = document.getElementById('questions-container')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,correctQuestionsIndex;
let quizScore=0;

function selectAnswer(e){
  const selectedButtons=e.target
  const correct=selectedButton.dataset.correct

  setStatusClass(document.body,correct)
  Array.from(answerButtonElement.children).forEach((button)=>{
    setStatusClass(button,button.dataset.correct)
  })
  
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