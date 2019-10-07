function solve() {

  //debugger

  let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let rightAnswered = 0;
  let index = 0;

  //let answers = document.querySelectorAll('.answer-text');

  
  Array.from(document.querySelectorAll('.answer-text'))
  .map((x) => x.addEventListener('click', function nextSection (e){

    //debugger

    if (correctAnswers.includes(e.target.innerHTML)) {
      rightAnswered++;
    }

    let currentsection = document.querySelectorAll('section')[index]
    currentsection.style.display = 'none';

    //debugger
    if (document.querySelectorAll('section')[index +1] !== undefined) {
      let nextSection = document.querySelectorAll('section')[index+1];
      nextSection.style.display = 'block';
      index++;
        }else{

          document.querySelector('#results').style.display = 'block';
          if (rightAnswered !==3) {
            document.querySelector('#results h1').innerHTML = `You have ${rightAnswered} right answers`;
          }else{
            document.querySelector('#results h1').innerHTML = 'You are recognized as top JavaScript fan!';
            
          }
        }

  }));
  //console.log(answers)




  // let correctAnswer = 0;
  // let tempIndex =0;
  // let answers = [...document
  //  .querySelectorAll('.quiz-answer')]
  //  .map((x, index) => x.addEventListener('click',  function nextQuestion(e) {
  //    if(e.target.innerText==='onclick'
  //    ||e.target.innerText==='JSON.stringify()'
  //    ||e.target.innerText==='A programming API for HTML and XML documents'){
  //     correctAnswer++;
  //    }
  //    let currentSection = document.querySelectorAll('section')[tempIndex];
  //    currentSection.style.display = 'none'
  //    currentSection.classList.add('hidden');

  //    let nextSection = document.querySelectorAll('section')[tempIndex+1];

  //    if (nextSection) {
  //         nextSection.classList.remove('hidden');       
  //    }
  //    else{
  //      showResult(correctAnswer);
  //    }
  //        nextSection.style.display = 'block';

  //    tempIndex++;
  //  }));


  // function showResult(correctAnswer) {
   
  //   document.querySelector('#results').style.display = 'block';
  //   if (correctAnswer === 2) {
  //     document.querySelector('#results > li > h1').innerText = 'You are recognized as top JavaScript fan!'
  //   }else{
  //     document.querySelector('#results > li > h1').innerText = `You have ${correctAnswer} right answers`;
  //   }
  // }
}
