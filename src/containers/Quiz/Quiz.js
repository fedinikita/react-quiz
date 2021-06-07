import React, { useState } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

const state = {
    quiz: [
        {
            question: 'Какого цвета небо?',
            rightAnswerId: 2,
            id: 1,
            answers: [
                {text: 'Черный', id: 1},
                {text: 'Синий', id: 2},
                {text: 'Оранжевый', id: 3},
                {text: 'Фиолетовый', id: 4},
            ]
        },
        {
            question: 'В каком году основали Питер?',
            rightAnswerId: 3,
            id: 2,
            answers: [
                {text: '1701', id: 1},
                {text: '1702', id: 2},
                {text: '1703', id: 3},
                {text: '1704', id: 4},
            ]
        },
    ]
};


const Quiz = (props) => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answerState, setAnswerState] = useState(null);
    const [isFinished, setIsFinished] = useState(false);
    const [results, setResults] = useState({});

    const onAnswerClickHandler = (answerId) => {
        const question = state.quiz[activeQuestion];

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                setResults({...results, [question.id]:'success'})
            }

            setAnswerState({[answerId]: 'success'});

            const timeout = window.setTimeout(() => {
                if (isQuizFinished()) {
                    setIsFinished(!isFinished);
                } else {
                    setActiveQuestion(activeQuestion + 1);
                    setAnswerState(null);
                }
                window.clearTimeout(timeout);
            }, 1000)
        } else {
            setAnswerState({[answerId]: 'error'});
            setResults({...results, [question.id]:'error'})
        }
    }

    const onRetry = () => {
        setActiveQuestion(0);
        setAnswerState(null);
        setIsFinished(false);
        setResults({});
    }

    const isQuizFinished = () => {
        return activeQuestion + 1 === state.quiz.length;
    }


    return (
        <div className={classes.Quiz}>

            <div className={classes.QuizWrapper}>
                <h1>Ответьте на все вопросы</h1>

                {
                    isFinished 
                    ? <FinishedQuiz 
                            results={results}
                            quiz={state.quiz}
                            onRetry={onRetry}
                        />
                    : <ActiveQuiz 
                            answers={state.quiz[activeQuestion].answers}
                            question={state.quiz[activeQuestion].question}
                            onAnswerClickHandler={onAnswerClickHandler}
                            quizLength={state.quiz.length}
                            answerNumber={activeQuestion + 1}
                            answerState={answerState}
                        />
                }
                
            </div>
        </div>
    )
}

export default Quiz;
