import { CloseIcon, OptionalIcon, PublicIcon } from '~/Asset';
import './PostsItem.scss';
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper';

import AvatarUser from '~/Components/reuseComponent/Avatar/User/AvatarUser';
import Interactive from './Interactive/Interactive';

// const cx = classNames.bind(styles);
function PostsItem({ items, dataUser }) {
    setTimeout(() => {});

    return (
        <PopperWrapper>
            <div className={'header-post'}>
                <div className={'user-posts'}>
                    <div className={'avatar-user'}>
                        <AvatarUser width="40px" height="40px" src={dataUser.avatar} />
                    </div>
                    <div className={'name-time-user'}>
                        {dataUser.name ? <span className="span-title">{dataUser.name}</span> : undefined}
                        <div className={'time-post'}>
                            <span>1 giờ</span>
                            <span>·</span>
                            <span>
                                <i style={{ height: '12px' }}>
                                    <PublicIcon />
                                </i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={'edit-posts'}>
                    <i className={'edit-posts-icon'}>
                        <OptionalIcon />
                    </i>
                    <i className={'edit-posts-icon'}>
                        <CloseIcon />
                    </i>
                </div>
            </div>
            <div className={'content-posts'}>
                {items.title ? (
                    <div className={'content-posts-title'}>
                        <span>{items.title}</span>
                    </div>
                ) : undefined}
                <div className={'content-posts-image'}>
                    {items.video ? (
                        <video width="100%" height="100%" loop controls>
                            <source src={items.video} type="video/mp4" />
                        </video>
                    ) : undefined}
                </div>
            </div>
            <Interactive items={items} />
        </PopperWrapper>
    );
}

export default PostsItem;
