import React, { useState } from 'react';
import {
  Quiz, QuestionSection, QuestionCount, Question,
  AnswerSection, SubmitButton,PrimarySection, Score,BackButton
} from './style.js';

function App() {

 const questions = [
      {
        questionText: 'Farthest planet from Sun ?',
        answerOptions: [
          { answerText: 'Pluto', isCorrect: true },
          { answerText: 'Venus', isCorrect: false },
          { answerText: 'Mars', isCorrect: false },
          { answerText: 'Earth', isCorrect: false }
        ],
        id: 1,
      },
      {
        questionText: 'How fast does light travel meters per second ?',
        answerOptions: [
          { answerText: '100000', isCorrect: false },
          { answerText: '300000', isCorrect: false },
          { answerText: '600000', isCorrect: false },
          { answerText: '500000', isCorrect: true }
        ],
        id: 2,
   },
      {
        questionText: 'How many bones are in our whole body ?',
        answerOptions: [
          { answerText: '180', isCorrect: false },
          { answerText: '293', isCorrect: false },
          { answerText: '206', isCorrect: true },
          { answerText: '130', isCorrect: false }
        ],
        id: 2,
      },
      {
        questionText: 'What are clouds made of ?',
        answerOptions: [
          { answerText: 'Hydrogen', isCorrect: false },
          { answerText: 'Nytrogen', isCorrect: false },
          { answerText: 'Atmosphere', isCorrect: false },
          { answerText: 'Water', isCorrect: true }
        ],
        id: 2,
   },
      {
        questionText: 'What is the letter for carbon ?',
        answerOptions: [
          { answerText: 'C', isCorrect: true },
          { answerText: 'CO', isCorrect: false },
          { answerText: 'CA', isCorrect: false },
          { answerText: 'C+', isCorrect: false }
        ],
        id: 2,
      },
      
    ]
  const [questionItem, setQuestionItem] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const handleQuestion = (isCorrect) => {
    const nextQuestion = questionItem + 1;
    if (nextQuestion < questions.length) {
       setQuestionItem(nextQuestion);
    } else {
      setShowScore(true);
    };
    if (isCorrect === true) {
      setCorrectAnswer(correctAnswer + 1);
    };
  };

  return (
    <div>
        <PrimarySection>
      <Quiz>
          {showScore ? (<Score>{` Your Score Is : ${correctAnswer} out of ${questions.length} `}
          <BackButton>Home</BackButton></Score>) : (
          <>
          <QuestionSection>
          <QuestionCount>
            <span>Question {questionItem + 1}</span>/{questions.length}</QuestionCount>
        </QuestionSection>
        <Question>
          {questions[questionItem].questionText}
        </Question>
        <AnswerSection>
          {questions[questionItem].answerOptions.map((item) => {
            const { answerText } = item;
            return (
              <SubmitButton onClick={() => handleQuestion(item.isCorrect)}>{ answerText }</SubmitButton>
            )
          } )}
            </AnswerSection>
          </>
        )}
      </Quiz>
    </PrimarySection>
    </div>
  );
}

export default App;
