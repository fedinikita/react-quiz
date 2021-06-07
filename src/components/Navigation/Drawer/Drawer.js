import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

const Drawer = props => {
    const links = [
        {to: '/', label: 'Список', exact: true},
        {to: '/auth', label: 'Авторизация', exact: false},
        {to: '/quiz-creator', label: 'Создать тест', exact: false},
    ];

    const cls = [classes.Drawer];

    const clickHandler = () => {
        props.onClick();
    }

    if (!props.isOpen) {
        cls.push(classes.close)
    }

    return (
        <>
            <nav className={cls.join(' ')}>
                <ul>
                    {links.map((link, index) => {
                        return (<li
                            key={index}
                        >
                            <NavLink 
                                to={link.to}
                                exact={link.exact}
                                activeClassName={classes.active}
                                onClick={clickHandler}
                            > 
                                {link.label}
                            </NavLink>
                        </li>)
                    })}
                </ul>
            </nav>
            { props.isOpen ? <Backdrop onClick={props.onClick}/> : null}
            
        </>
    )
}

export default Drawer;