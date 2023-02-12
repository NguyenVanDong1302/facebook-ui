import { SearchIcon } from '~/Asset';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);
function Input({placeholder = 'Tìm kiếm trên Facebook' , className , onKeyDown, onChange, value}) {
    return (
        <>
            <label className={cx('header-search', className)}>
                <span>
                    <SearchIcon />
                </span>
                <input placeholder={placeholder} onKeyDown={onKeyDown} onChange={onChange} value={value} />
            </label>
        </>
    );
}
export default Input;
