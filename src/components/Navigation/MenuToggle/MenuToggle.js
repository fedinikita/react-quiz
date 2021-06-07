import classes from './MenuToggle.module.css'

const MenuToggle = props => {
    let cls = [
        classes.MenuToggle,
        'fa'
    ]

    props.isOpen ? cls = [...cls, 'fa-times', classes.open] : cls.push('fa-bars');

    return (
        <i 
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle;