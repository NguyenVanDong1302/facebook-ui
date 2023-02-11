import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase';
import HeaderCenter from './headerComponent/headerCenter';
import HeaderLeft from './headerComponent/headerLeft';
import HeaderRight from './headerComponent/headerRight';

function Header() {
    return (
        <div className="mainHeader">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    );
}

export default Header;
