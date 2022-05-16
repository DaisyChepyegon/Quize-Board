var score=0;
var percentage=0;
var  calculate=0;

// get the score
function quizScore(){

    if(document.getElementById("correct1").checked){score++;};
    if(document.getElementById("correct2").checked){score++;};
    if(document.getElementById("correct3").checked){score++;};
    if(document.getElementById("correct4").checked){score++;};
    if(document.getElementById("correct5").checked){score++;};
    if(document.getElementById("correct6").checked){score++;};

    alert("Total Score:"+""+ score);
    calcPercentage(score);

}


// calculates percentage
function calcPercentage(score) {
  percentage = (score / 6) * 100;

  if(percentage>=80
    ){
    alert(""+ percentage + "%" +"[performed excellently]")
  }
  else if(percentage>=50 && percentage<80){
    alert(""+ percentage + "%" +"[fairly passed]")
  }
  else{
    alert(""+ percentage + "%" +"[performed poorly Retake Quize]")
  }

}