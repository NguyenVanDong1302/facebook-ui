import {
    GamingActiveIcon,
    GamingIcon,
    GroupActiveIcon,
    GroupIcon,
    HouseActiveIcon,
    HouseIcon,
    MarketActiveIcon,
    MarketPlaceIcon,
    WatchActiveIcon,
    WatchIcon,
} from '~/Asset/HeaderRouter';

import '../Header.scss';
import { useLocation } from 'react-router-dom';
import HeaderRouter from '~/Components/reuseComponent/HeaderRouter/HeaderRouter';
function HeaderCenter() {
    const location = useLocation();
    const checkPathname = location.pathname.split('/')[1]
    return (
        <div className="HeaderCenter">
            <ul>
                <li>
                    <HeaderRouter to={'/'} active={checkPathname === '' ? 'active' : ''}>
                        <span className="icon-header-center">
                            {checkPathname === '' ? <HouseActiveIcon /> : <HouseIcon />}
                        </span>
                    </HeaderRouter>
                </li>
                <li>
                    <HeaderRouter to="/watch" active={checkPathname === 'watch' ? 'active' : ''} >
                        <span className="icon-header-center">
                            {checkPathname === 'watch' ? <WatchActiveIcon /> : <WatchIcon />}
                        </span>
                    </HeaderRouter>
                </li>
                <li>
                    <HeaderRouter to="/market" active={checkPathname === "market" ? "active" : ""}>
                        <span className="icon-header-center">
                            {checkPathname === 'market' ? <MarketActiveIcon /> : <MarketPlaceIcon />}
                        </span>
                    </HeaderRouter>
                </li>
                <li>
                    <HeaderRouter to="/group" active={checkPathname === "group" ? "active" : ""}>
                        <span className="icon-header-center">
                            {checkPathname === 'group' ? <GroupActiveIcon /> : <GroupIcon />}
                        </span>
                    </HeaderRouter>
                </li>
                <li>
                    <HeaderRouter to="/gaming" active={checkPathname === "gaming" ? "active" : ""}>
                        <span className="icon-header-center">
                            {checkPathname === 'gaming' ? <GamingActiveIcon /> : <GamingIcon />}
                        </span>
                    </HeaderRouter>
                </li>
            </ul>
        </div>
    );
}

export default HeaderCenter;
