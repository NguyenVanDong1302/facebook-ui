import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);
function AvatarUser({
    className,
    width = '36px',
    height = '36px',
    alt,
    src = 'https://github.com/NguyenVanDong1302/facebook-ui/blob/main/src/Asset/Image/AvatarUser/noavatar.png?raw=true',
}) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(
            'https://github.com/NguyenVanDong1302/facebook-ui/blob/main/src/Asset/Image/AvatarUser/noavatar.png?raw=true',
        );
    };
    return (
        <img
            className={cx('user-avatar-sidebar', className)}
            src={fallback || src}
            alt={alt}
            onError={handleError}
            style={{
                width,
                height,
            }}
        />
    );
}

export default AvatarUser;
