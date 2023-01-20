import React from 'react';
import { CloseIcon, OptionalIcon, PublicIcon } from '~/Asset';
import AvatarImage from '~/Components/reuseComponent/Avatar/Avatar';

import './HeaderPosts.scss';

function HeaderPosts({ pages, dataUser, dbGroup }) {
    return (
        <div className={`header-post ${pages === 'watch' ? 'header-posts-watch' : ''}`}>
            <div className={'user-posts'}>
                <div className={'avatar-user'}>
                    <AvatarImage width="40px" height="40px" src={dataUser.avatar} pages={pages} />
                </div>
                <div className={'name-time-user'}>
                    {pages === 'group' ? (
                        <span className={`span-title span-title__${pages}`}>{dbGroup.name}</span>
                    ) : (
                        <span className={`span-title`}>{dataUser.name}</span>
                    )}
                    <div className={'time-post'}>
                        {pages === 'group' ? <span>{dataUser.name} · </span> : undefined}
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
    );
}

export default HeaderPosts;
