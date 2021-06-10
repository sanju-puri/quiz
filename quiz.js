const quizDB=[
    {
        question:"Q1:'MOV' extension refers usually to what kind of file?",
        a:"Image file",
        b:"Animation/movie file",
        c:"Audio file",
        d:"MS Office document",
        ans:"ans2"
        
    },

    {
        question:"Q2:'MPG' extension refers usually to what kind of file?",
        a:"Word Perfect Document file",
        b:"MS Office document",
        c:"Animation/movie file",
        d:"Image file",
        ans:"ans3"
    },
    {
        
        question:"Q3:What is part of a database that holds only one type of information?",
        a:"Report",
        b:"Field",
        c:"Record",
        d:"File",
        ans:"ans2"

    },

    {
        question:"Q3:'OS' computer abbreviation usually means?",
        a:"Order of Significance",
        b:"Open Software",
        c:"Operating System",
        d:"Optical Sensor",
        ans:"ans3"

    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const  option3 = document.querySelector('#option3');
const  option4 = document.querySelector('#option4');
const  submit = document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');

let questionCount= 0;
let score=0;

const loadQuestion= () => {
    const questionList =quizDB[questionCount];
    question.innerText = questionList.question;


    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d;

}
loadQuestion();
 const getcheckAnswer =() => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }




    });
    return answer;
    

};
const deselectAll=() =>{
    answers.forEach((curAnsElem) => curAnsElem.checked=false);

}


submit.addEventListener('click',() => {


const checkedAnswer = getcheckAnswer();
console.log(checkedAnswer);
if(checkedAnswer== quizDB[questionCount].ans){
    score++
};


questionCount++;
deselectAll();
if(questionCount<quizDB.length){
    loadQuestion();

}

else{
    showscore.innerHTML=`<h3>you scored ${score}/${quizDB.length}🔥</h3>
    <button class ='btn' onclick="location.reload()"> Play Again </button>
    
    
    `;
    showscore.classList.remove('scorearea');

    

    
    
    
    
    
    
    
}

});