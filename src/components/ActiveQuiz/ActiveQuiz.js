import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.answerNumber}. </strong>
                    {props.question}
                </span>
                <small>{props.answerNumber} из {props.quizLength}</small>
            </p>

            <AnswersList 
                onAnswerClickHandler={props.onAnswerClickHandler}
                answers={props.answers}
                answerState={props.answerState}
            />
        </div>
    )
}

export default ActiveQuiz;