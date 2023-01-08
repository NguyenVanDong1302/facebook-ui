import { useEffect, useState } from 'react';
import { ListFriends } from '../../List/List';
import AvatarUser from '../../Avatar/User/AvatarUser';
import './SidebarRight.scss';
import {
    BoxGiftsIcon,
    DotHorizontalIcon,
    LiveIcon2,
    LoudspeakerIcon,
    MessengerIcon2,
    SearchIcon,
    SwitchPageIcon,
} from '~/Asset';

export const ApiUrl = 'https://6397f76c86d04c7633a1c4d5.mockapi.io/facebook';

function SidebarRight() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(ApiUrl)
            .then((response) => response.json())
            .then((data) => {
                setResults(data);
            });
    }, []);
    return (
        <div className="sidebar-right-wrapper">
            <div className="sidebar-right-items">
                <div className="tag-sponsor sidebar-right-item">
                    <span className="span-title">Được tài trợ</span>
                </div>
                <div className="tag-fan-page-user sidebar-right-item">
                    <div className="fan-page__header">
                        <span className="span-title fan-page__header_title">Trang và trang cá nhân của bạn</span>
                        <span className="fan-page__header_icon">
                            <DotHorizontalIcon />{' '}
                        </span>
                    </div>
                    <div className="tag-user fan-page-tag-user">
                        <AvatarUser
                            src="https://github.com/NguyenVanDong1302/facebook-ui/blob/main/src/Asset/Image/AvatarPage/id01.jpg?raw=true"
                            alt="Avatar-my-pages"
                        />
                        <span className="tag-user__name span-title">Nguyễn Văn Đông</span>
                    </div>
                    <div className="fan-page-feature">
                        <ul>
                            <li>
                                <MessengerIcon2 />
                                <span>4 Tin nhắn</span>
                            </li>
                            <li>
                                <SwitchPageIcon />
                                <span> Chuyển sang Trang</span>
                            </li>
                            <li>
                                <LoudspeakerIcon />
                                <span> Tạo quảng cáo</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tag-birthday sidebar-right-item">
                    <span className="tag-birthday__header span-title">Sinh nhật</span>
                    <div className="tag-birthday__content">
                        <BoxGiftsIcon />
                        <span className="tag-birthday__content__title">
                            Hôm nay là sinh nhật của <strong className="name__user__birthday"> Thịi Lệ </strong>
                        </span>
                    </div>
                </div>
                <div className="tag-user__menu sidebar-right-item">
                    <div className="tag-user__menu__header">
                        <span className="span-title tag-user__title"> Người liên hệ </span>
                        <ul>
                            <li>
                                <LiveIcon2 />
                            </li>
                            <li>
                                <SearchIcon />
                            </li>
                            <li>
                                <DotHorizontalIcon />
                            </li>
                        </ul>
                    </div>
                    <div className="tag-user__menu__list__user">
                        {results.map((item, index) => (
                            <div className="tag-user" key={index}>
                                <AvatarUser src={item.img} alt={item.name} />
                                <span className="tag-user__name span-title">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SidebarRight;
