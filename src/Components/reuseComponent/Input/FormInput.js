import { SearchIcon } from '~/Asset';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);
function Input({placeholder = 'Tìm kiếm trên Facebook' , className}) {
    return (
        <>
            <label className={cx('header-search', className)}>
                <span>
                    <SearchIcon />
                </span>
                <input placeholder={placeholder} />
            </label>
        </>
    );
}

export default Input;
