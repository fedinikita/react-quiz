import classes from './AnswerItem.module.css'
// import {state} from '../../../../containers/Quiz/Quiz'

const AnswerItem = props => {
    const cls = [classes.AnswerItem];
    // console.log('AnswerItem ', props);

    if (props.answerState) {
        cls.push(classes[props.answerState])
    }

    return (
        <li 
            className={cls.join(' ')}
            onClick={props.onAnswerClickHandler.bind(this, props.answer.id)}
            // onClick={() => props.onAnswerClickHandler(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem;