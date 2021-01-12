/**
 * Example store structure
 */
const STORE = {
  questions: [
    {
      question: "Where was Gondor when the Westfold fell?",
      answers: ["Cair Andros", "Osgiliath", "Ravenhill", "Dunland", "Angmar"],
      correctAnswer: "Osgiliath" || "Cair Andros",
    },
    {
      question: "One does not simply walk into which realm?",
      answers: ["Mordor", "Rohan", "Hobbiton", "Gondor", "Iron Hills"],
      correctAnswer: "Mordor",
    },
    {
      question:
        "Gimli won the battle of killing orcs by what score at Helm's Deep?",
      answers: [
        "43-42",
        "37-16",
        "28-3",
        "It was a tie",
        "Gimlie actually lost",
      ],
      correctAnswer: "43-42",
    },
    {
      question:
        "In Fangorn forest, what do Merry and Pippen drink in order to inexplicably grow taller?",
      answers: ["Water", "Mead", "Ent-draught", "Ale", "Orc-draught"],
      correctAnswer: "Ent-draught",
    },
    {
      question:
        "What is the password which need be spoken in order to enter the Mines of Moria through the Doors of Durin?",
      answers: [
        "Open Sesame",
        "Annon Edhellen, edro hi ammen!",
        "Fennas Nogothrim, lasto beth lammen",
        "Mellon",
        "Ando Eldarinwa…a lasta quettanya, Fenda Casarinwa",
      ],
      correctAnswer: "Mellon",
    },
    {
      question:
        "Viggo Mortensen (Aragorn) actually breaks his toe after kicking the helmet of a fallen Uruk-hai after believing what to be true?",
      answers: [
        "They had run out of Elvish bread",
        "His reservation at the inn of the Prancing Pony was mistakenly cancelled",
        "He believed to have failed Merry and Pippen",
        "Legolas had led them down the wrong path in pursuit of Merry and Pippen across the Gap of Rohan",
      ],
      correctAnswer: "He believed to have failed Merry and Pippen",
    },
  ],
  quizStarted: false,
  currentQuestion: 0,
  score: 0,
};
/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function generateQuizStartScreen() {
  return `
    <div class="startScreen">
      <h2>Fool of a Took! Click the button below to test your knowledge.</h2>
      <button type="button" id="startButton">Begin Quiz</button>
      </div>
  `;
}

function generateQuestionNumberAndScore() {
  return `
    <ul class="question-score">
      <li id="question-number">
        Question Number: ${STORE.currentQuestion + 1}/${STORE.questions.length};
      </li>
      <li id="score">
        Score: ${STORE.score}/${STORE.questions.length};
      </li>
      </ul>
  `;
}

function generateAnswers() {
  const answersArray = STORE.questions[STORE.currentQuestion].answers;
  let answers = "";
  let i = 0;

  answersArray.forEach((answer) => {
    answers += `
    <div id="answer-option-${i}">
      <input type="radio" name="option" id="option${
        i + 1
      }" value="${answer}" tabindex="${i + 1}" required>
      <label for="option${i + 1}">${answer}</label>
      </div>
    `;
    i++;
  });
  return answers;
}

function generateQuestion() {
  let currentQuestion = STORE.questions[STORE.currentQuestion];
  return `
    <form id="question-form">
      <fieldset>
        <div class="question">
          <legend> ${currentQuestion.question}</legend>
        </div>
        <div class="options">
          <div class="answers>
            ${generateAnswers()};
          </div>
        </div>
        <button type="submit" id="submit-answer-button" tabindex="5">Submit</button>
        <button type="button" id="next-question-button" tabindex="6">Next Question</button>
      </fieldset>
    </form>
  `;
}

function generateResults() {
  return `
    <div class="results">
      <form id="js-restart-quiz">
        <fieldset>
          <div class="row">
            <div class="col-12">
              <legend>Final Result: ${STORE.score}/${STORE.questions.length}</legend>
            </div>

          <div class="row">
            <div class="col-12">
              <button type="button" id="restart">Restart Quiz</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  `;
}

function generateFeedback (answerStatus) {
  let correctAnswer = STORE.questions[STORE.currentQuestion].correctAnswer;
  let html = '';
  if (answerStatus === 'correct') {
    html = `
    <p class="right-answer">Correct!</p>
    `;
  } else if (answerStatus === 'incorrect') {
    html = `
    <p class="wrong-answer">Incorrect. The right answer is ${correctAnswer}</p>
    `;
  }
  return html;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render() {
  let html = '';

  if(STORE.quizStarted === false) {
    $('main').html(generateQuizStartScreen());
    return;
  } else if (STORE.currentQuestion >= 0 && STORE.currentQuestion < STORE.questions.length) {
    html = generateQuestionNumberAndScore();
    html += generateQuestionNumberAndScore();
    $('main').html(html);
  } else {
    $('main').html(generateResultsScreen());
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
