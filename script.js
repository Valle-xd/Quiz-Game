const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startgame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++ 
    setNextQuestion()
})


function startgame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer )
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
   nextButton.classList.add('hide')
   while (answerButtonsElement.firstChild){
       answerButtonsElement.removeChild(answerButtonsElement.firstChild)
   } 
}

function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    } else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Hvad hedder den største ø i Danske Kongerige?',
        
        answers: [
        {text: 'Sjælland', correct: false},
        {text: 'Bornholm', correct: false},
        {text: 'Grønland', correct: true},
        {text: 'Lolland', correct: false}
        ]
    },
    {
        question: 'Hvad hedder det største hav i hele verden?',
        
        answers: [
        {text: 'Stillehavet', correct: true},
        {text: 'Middelhavet', correct: false},
        {text: 'Atlanterhavet', correct: false},
        {text: 'Det indiske Ocean', correct: false}
        ]
    },
    {
        question: 'Hvor mange knogler er der i en menneskekrop?',
        
        answers: [
        {text: '620', correct: false},
        {text: '135', correct: false},
        {text: '440', correct: false},
        {text: '206', correct: true}
        ]
    },
    {
        question: 'Fødes kaniner blinde?',
        
        answers: [
        {text: 'Ja', correct: true},
        {text: 'Nej', correct: false}
        ]
    },
    {
        question: 'Hvor mange stjerner er der i det amerikanske flag?',
        
        answers: [
        {text: '51', correct: true},
        {text: '44', correct: false},
        {text: '29', correct: false},
        {text: '38', correct: false}
        ]
    },
    {
        question: 'Hvad er det største kattedyr i hele verden?',
        
        answers: [
        {text: 'Puma', correct: false},
        {text: 'Leopard', correct: false},
        {text: 'Tiger', correct: true},
        {text: 'Jaguar', correct: false}
        ]
    }, 
    {
        question: 'Nogle måneder har 31 dage, mens andre har 30. Hvor mange af dem har 28 dage?',
        
        answers: [
        {text: '1', correct: false},
        {text: '10', correct: false},
        {text: '4', correct: false},
        {text: '12', correct: true}
        ]
    },
    {
        question: 'Hvor gammel skal man være, før man kan tage kørekort til hhv. stor bil og motorcykel?',
        
        answers: [
        {text: '30 år', correct: false},
        {text: '24 år', correct: false},
        {text: '21 år', correct: true},
        {text: '18 år', correct: false}
        ]
    },
    {
        question: 'Hvor langt skal man gå for at forbrænde en Mars-bar?',
        
        answers: [
        {text: '3 til 4 km', correct: false},
        {text: '7 til 8 km', correct: false},
        {text: '2 til 3 km', correct: false},
        {text: '5 til 6 km', correct: true}
        ]
    },
    {
        question: 'Hvor høj er Frihedsgudinden i New York?',
        
        answers: [
        {text: '42 meter', correct: false},
        {text: '54 meter', correct: false},
        {text: '25 meter', correct: false},
        {text: '55 meter', correct: true}
        ]
    },
    {
        question: 'Hvor høj er Frihedsgudinden i New York?',
        
        answers: [
        {text: '42 meter', correct: false},
        {text: '54 meter', correct: false},
        {text: '25 meter', correct: false},
        {text: '55 meter', correct: true}
        ]
    },

]