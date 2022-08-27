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
        'answer_1': 'Text Fett',
        'answer_2': 'Container',
        'answer_3': 'Ein Link',
        'answer_4': 'Kursiv',
        'right_answer': 2
    },

    {
        'question': 'Wie bindet man eine JavaScript Datei in eine HTML Datei ein?',
        'answer_1': 'link rel="stylesheet" href="script.js"',
        'answer_2': 'link rel="style" href="script.js"',
        'answer_3': 'script rel="stylesheet" src="script.js"',
        'answer_4': 'script src="script.js"',
        'right_answer': 4
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
        'question': 'Wie heißen die Gründer von Microsoft?',
        'answer_1': 'Steve Jobs und Walter White',
        'answer_2': 'Bill Gates und Paul Allen',
        'answer_3': 'Elon Musk und Bill Gates',
        'answer_4': 'Mark Zuckerberg und Andrew McCollum',
        'right_answer': 1
    },

    {
        'question': 'Wie heißt der Gründer von Microsoft?',
        'answer_1': 'Die beiden divs werden nebeneinander angezeigt',
        'answer_2': 'Die beiden divs werden untereinander angezeigt',
        'answer_3': 'Es passiert nichts',
        'answer_4': 'Das zweite div überdeckt das erste div',
        'right_answer': 1
    }
];

let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }

    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
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