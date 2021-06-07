import classes from './Layout.module.css'
import { useState } from 'react'
import MenuToogle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'

const Layout = (props) => {
    const [menu, setMenu] = useState(false);
    const toggleMenuHandler = () => setMenu(!menu);

    return (
        <div className={classes.Layout}>

            <Drawer 
                isOpen={menu}
                onClick={toggleMenuHandler}
            />

            <MenuToogle 
                onToggle={toggleMenuHandler}
                isOpen={menu}
            />

            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;