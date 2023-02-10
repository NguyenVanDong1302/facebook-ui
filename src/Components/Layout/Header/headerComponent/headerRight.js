import { MenuIcon, MessengerIcon, NotificationIcon } from '~/Asset/HeaderRight';
import AvatarImage from '~/Components/reuseComponent/Avatar/Avatar';
import * as React from 'react';

import Switch from '@mui/material/Switch';
import Login from '~/Components/Login/Login';

function HeaderRight() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div className="header-right">
            <ul>
                {/* <Switch/> */}
    
                <li className="">
                    <div className="header-right-item active">
                        <MenuIcon />
                    </div>
                </li>
                <li>
                    <div className="header-right-item">
                        <MessengerIcon />
                    </div>
                </li>
                <li>
                    <div className="header-right-item">
                        <NotificationIcon />
                    </div>
                </li>
                <li>
                    <div className="">
                        <AvatarImage />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default HeaderRight;
