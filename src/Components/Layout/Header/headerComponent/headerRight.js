import { MenuIcon, MessengerIcon, NotificationIcon } from '~/Asset/HeaderRight';
import AvatarImage from '~/Components/reuseComponent/Avatar/Avatar';

function HeaderRight() {
    return (
        <div className="header-right">
            <ul>
                <li className="active">
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
