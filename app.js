/**
 * Example store structure
 */
const STORE = [
  {
    question: 'Where was Gondor when the Westfold fell?',
    answers: [
      'Cair Andros',
      'Osgiliath',
      'Ravenhill',
      'Dunland',
      'Angmar'
      ],
    correctAnswer: 'Osgiliath' || 'Cair Andros',
  },
  {
    question: 'One does not simply walk into which realm?',
    answers: [
      'Mordor',
      'Rohan',
      'Hobbiton',
      'Gondor',
      'Iron Hills'
    ],
    correctAnswer: 'Mordor',
  },
  {
    question: 'Gimli won the battle of killing orcs by what score at Helm\'s Deep?',
    answers: [
      '43-42',
      '37-16',
      '28-3',
      'It was a tie',
      'Gimlie actually lost'
    ],
    correctAnswer: '43-42',
  },
  {
    question: 'In Fangorn forest, what do Merry and Pippen drink in order to inexplicably grow taller?',
    answers: [
      'Water',
      'Mead',
      'Ent-draught',
      'Ale',
      'Orc-draught'
    ],
    correctAnswer: 'Ent-draught',
  },
  {
    question: 'What is the password which need be spoken in order to enter the Mines of Moria through the Doors of Durin?',
    answers: [
      'Open Sesame',
      'Annon Edhellen, edro hi ammen!',
      'Fennas Nogothrim, lasto beth lammen',
      'Mellon',
      'Ando Eldarinwa…a lasta quettanya, Fenda Casarinwa'
    ],
    correctAnswer: 'Mellon',
  },
  {
    question: 'Viggo Mortensen (Aragorn) actually breaks his toe after kicking the helmet of a fallen Uruk-hai after believing what to be true?',
    answers: [
      'They had run out of Elvish bread',
      'His reservation at the inn of the Prancing Pony was mistakenly cancelled',
      'He believed to have failed Merry and Pippen',
      'Legolas had led them down the wrong path in pursuit of Merry and Pippen across the Gap of Rohan'
    ],
    correctAnswer: 'He believed to have failed Merry and Pippen',
  }
];

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

function generateWelcomeScreen () {
  return `
  <div class="startQuizScreen">
    <form>
        <h2>The Not By Any Means Complete or Exhaustive Quiz On Middle Earth</h2>
        <h3>Click the button below when you're ready for an adventure</h3>
        <button type="button" class="startQuiz" autofocus>I'm going on an adventure!</button>
      </form>
    </div> 
    `;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)