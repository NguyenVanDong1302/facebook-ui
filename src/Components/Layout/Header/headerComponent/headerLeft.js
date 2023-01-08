import { Logo } from '~/Asset';
import Input from '~/Components/reuseComponent/Input/FormInput';

function HeaderLeft() {
    return (
        <div className='header-left'>
            <Logo />
            <Input />
        </div>
    );
}

export default HeaderLeft;
