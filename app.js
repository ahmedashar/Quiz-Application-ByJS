var quizContainer = document.getElementById('quiz_container');
var score = 0;

var questions = [
    {
        title: 'Inside which HTML element do we put the JavaScript?',
        options: ['scripting', 'js', 'script', 'javascript'],
        answer: 'script'
    },
    {
        title: 'Correct JS syntax to change the content of the HTML element below?\n\n <p id="demo">This is a demonstration.</p>',
        options: ['#demo.innerHTML = "Hello World!"', 'document.getElement("p").innerHTML = "Hello World!"', 'document.getElementById("demo").innerHTML = "Hello World!"', 'document.getElementByName("p").innerHTML = "Hello World!"'],
        answer: 'document.getElementById("demo").innerHTML = "Hello World!"'
    },
    {
        title: 'How do you write "Hello World" in an alert box?',
        options: ['msgBox("Hello World")', 'alertBox("Hello World")', 'msg("Hello World")', 'alert("Hello World")'],
        answer: 'alert("Hello World")'
    },
    {
        title: 'How do you create a function in JavaScript?',
        options: ['function = myFunction()', 'function myFunction()', 'function.myFunction', 'function:myFunction()'],
        answer: 'function myFunction()'
    },
    {
        title: 'How do you call a function named "myFunction"?',
        options: ['call function myFunction()', 'myFunction()', 'call myFunction()', 'myFunction.call'],
        answer: 'myFunction()'
    },
    {
        title: 'How to write an IF statement in JavaScript?',
        options: ['if i == 5 then', 'if i = 5 then', 'if (i==5)', 'if i = 5'],
        answer: 'if (i==5)'
    },
    {
        title: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        options: ['if i isnt 5', 'if i =! 5 then', 'if (i != 5)', 'if i != 5'],
        answer: 'if (i != 5)'
    },
    {
        title: 'How do you round the number 7.25, to the nearest integer?',
        options: ['Math.rnd(7.25)', 'Math.round(7.25)', 'rnd(7.25)', 'round(7.25)'],
        answer: 'Math.round(7.25)'
    }
]


var currentQuestion = 0;

renderQuiz();

function renderQuiz() {
    if (currentQuestion >= 0 && currentQuestion < questions.length) {
        
        // question counter -------------
        var QuesCounter = document.createElement('span')
        QuesCounter.setAttribute('class','question_counter')
        var textNode = document.createTextNode(  currentQuestion +1 +' / 10')
        QuesCounter.appendChild(textNode)
        quizContainer.appendChild(QuesCounter)
        // ------------------
        var titleElement = document.createElement('h3');
        titleElement.setAttribute('class','quiz_question')
        titleElement.innerText = questions[currentQuestion].title;
        quizContainer.appendChild(titleElement);

        var ul = document.createElement('ul')
        ul.setAttribute('class','ul')
        

        for (var i = 0; i < questions[currentQuestion].options.length; i++) {
            

            var li = document.createElement('li')

            ul.appendChild(li)

            // create radio input in each iteration of loop
            var optionElement = document.createElement('input');
            optionElement.setAttribute('type', 'radio');
            //for select one radio buttton at a time
            optionElement.setAttribute('name', 'ans');

            optionElement.setAttribute('class', `radio${i}`);
            optionElement.className += " li" ;
            optionElement.value = questions[currentQuestion].options[i];

            var spanElement = document.createElement('span')
            spanElement.setAttribute('class', 'span')
            spanElement.innerHTML = questions[currentQuestion].options[i];

            li.style.listStyle = 'none';

            li.appendChild(optionElement)
            li.appendChild(spanElement)

        }
        quizContainer.appendChild(ul)

        var nextBtn = document.createElement('button')
        nextBtn.innerText = 'Next'

        nextBtn.setAttribute('onclick', 'nextQuestion()')
        nextBtn.setAttribute('class', 'next_btn')

        quizContainer.appendChild(nextBtn);
    }
    else {
        var result = (score * 100) / questions.length;
        alert("Your Result is: " + result + '%')
    }

}
// for next btn
function nextQuestion() {
    var radio0 = document.querySelector('.radio0');
    var radio1 = document.querySelector('.radio1');
    var radio2 = document.querySelector('.radio2');
    var radio3 = document.querySelector('.radio3');

    if (radio0.checked === true || radio1.checked === true || radio2.checked === true || radio3.checked === true) {

        var allRadio = [radio0, radio1, radio2, radio3];

        for (var i = 0; i < allRadio.length; i++) {
            if (allRadio[i].checked === true) {
                if (allRadio[i].value === questions[currentQuestion].answer) {

                    console.log('sahi')
                    score++;

                }

            }
        }

        currentQuestion++;
        quizContainer.innerHTML = ''
        renderQuiz()
    }


}