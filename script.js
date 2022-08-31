let questions = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3
    },

    {
        'question': 'Was bedeutet das HTML Tag a?',
        'answer_1': 'Text Fett',
        'answer_2': 'Container',
        'answer_3': 'Ein Link',
        'answer_4': 'Kursiv',
        'right_answer': 3
    },

    {
        'question': 'Wie bindet man eine Website in eine Website ein?',
        'answer_1': 'iframe, frame, and frameset',
        'answer_2': 'iframe',
        'answer_3': 'frame',
        'answer_4': 'frameset',
        'right_answer': 2
    },

    {
        'question': 'Was passiert wenn man einem div, welches 2 weitere divs beinhaltet, display:flex übergit?',
        'answer_1': 'Die beiden divs werden nebeneinander angezeigt',
        'answer_2': 'Die beiden divs werden untereinander angezeigt',
        'answer_3': 'Es passiert nichts',
        'answer_4': 'Das zweite div überdeckt das erste div',
        'right_answer': 1
    },

    {
        'question': 'Was bedeutet CSS?',
        'answer_1': 'Cascading Style Sheets',
        'answer_2': 'Calculate Syntax Style',
        'answer_3': 'Comprimating Style Sheets',
        'answer_4': 'Cropped Style Sources',
        'right_answer': 1
    },

    {
        'question': 'Wie definiert man die Funktion showName in JavaScript?',
        'answer_1': 'function showName',
        'answer_2': 'ShowName',
        'answer_3': 'ShowName()',
        'answer_4': 'function showName()',
        'right_answer': 4
    },

    {
        'question': 'Wie bindet man eine JavaScript Datei in eine HTML Datei ein?',
        'answer_1': 'link rel="stylesheet" href="script.js"',
        'answer_2': 'link rel="style" href="script.js"',
        'answer_3': 'script rel="stylesheet" src="script.js"',
        'answer_4': 'script src="script.js"',
        'right_answer': 4
    }
];


let currentQuestion = 0;

let rightQuestions = 0;

let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');
let AUDIO_END = new Audio('audio/end.mp3');


function init() {
    document.getElementById('start-screen').style = 'display: none;';
    document.getElementById('question-body').style = '';
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
        AUDIO_END.play();
    }

    else { //show question
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}


function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none;';

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('js').classList.add('color-blue');
}


function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}


function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_span_1').innerHTML = question['answer_1'];
    document.getElementById('answer_span_2').innerHTML = question['answer_2'];
    document.getElementById('answer_span_3').innerHTML = question['answer_3'];
    document.getElementById('answer_span_4').innerHTML = question['answer_4'];

    if (currentQuestion < 3) {
        document.getElementById('html').classList.remove('color-blue');
    }

    else {
        document.getElementById('html').classList.add('color-blue');
    }

    if (currentQuestion >= 3 && currentQuestion < 5) {
        document.getElementById('css').classList.remove('color-blue');
    }

    else {
        document.getElementById('css').classList.add('color-blue');
    }

    if (currentQuestion >= 5 && currentQuestion < 7) {
        document.getElementById('js').classList.remove('color-blue');
    }

    else {
        document.getElementById('js').classList.add('color-blue');
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(question, selectedQuestionNumber)) { //richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    }

    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }

    document.getElementById('next-button').disabled = false;
}


function rightAnswerSelected(question, selectedQuestionNumber) {
    return selectedQuestionNumber == question['right_answer'];
}


function nextQuestion() {
    currentQuestion++; //z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}


function restartGame() {
    document.getElementById('header-image').src = "img/logo1.png";
    document.getElementById('end-screen').style = 'display: none;'; //Endscreen ausblenden
    document.getElementById('question-body').style = ''; //question Body wieder anzeigen 
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}