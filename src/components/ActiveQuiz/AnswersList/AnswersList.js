import classes from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => {
    // console.log('AnswersList ', props);
    return (
        <div className={classes.AnswersList}>
            {props.answers.map((answer, index) => 
                <AnswerItem
                    key={index}
                    answer={answer}
                    index={index}
                    onAnswerClickHandler={props.onAnswerClickHandler}
                    answerState={props.answerState ? props.answerState[answer.id] : null}
                />
            )}
        </div>
    )
}

export default AnswersList;