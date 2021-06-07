import classes from './Backdrop.module.css'

const Backdrop = props => {
    const cls = [
        classes.Backdrop
    ]

    return (
        <div
            onClick={props.onClick}
            className={cls.join(' ')}
        >
        </div>
    )
}

export default Backdrop;