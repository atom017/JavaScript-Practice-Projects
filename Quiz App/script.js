const quizData = [
    {
        question:'How old is Antonio',
        a: '22',
        b: '37',
        c: '45',
        d: '18',
        correct: 'a'
    },
    {
        question:'What is the most used programming language in 2021',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'c'
    },
    {
        question:'Who is the president of US',
        a: 'Barack Obama',
        b: 'Joe Biden',
        c: 'Helery Clinton',
        d: 'Antony Blinkin',
        correct: 'b'
    },
    {
        question:'What does HTML stand for?',
        a: 'How To Manage Love',
        b: 'Cascading style Sheet',
        c: 'Hyper Tech Mechanical Language',
        d: 'Hyper Text Markup Language',
        correct: 'd'
    },
    {
        question:'When was Javascript launched?',
        a: '1998',
        b: '1997',
        c: '2018',
        d: 'None of the above',
        correct: 'd'
    }
];

let currentQuestion = 0;
let selectAns = '';
let score = 0;
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

loadQuiz();

function loadQuiz(){
    const currentQuiz = quizData[currentQuestion];
   
    question.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;
 
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");
    
    answerEls.forEach((answerEl )=>{
        if(answerEl.checked){
            selectAns = answerEl.id;
            //return answerEl.id;
        }
    });
    console.log(selectAns);
    return selectAns;
}

function uncheck(){
    const answerEls = document.querySelectorAll(".answer");
    
    answerEls.forEach((answerEl )=>{
        if(answerEl.checked){
            answerEl.checked = false;
        }
    });
}

submitBtn.addEventListener("click",() =>{
    const answer = getSelected();
    selectAns = '';
   
    if(answer !== ''){
       
        if(answer === quizData[currentQuestion].correct){
          
            score++;   
        }
        currentQuestion++;
        
        if(currentQuestion < quizData.length){
            loadQuiz();
            uncheck();
            
        }else{
           quiz.innerHTML = `<h2>Correct Answers ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Restart</button>`;
        }
    }
 
})