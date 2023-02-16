import { async } from '@firebase/util';
import Tippy from '@tippyjs/react/headless';
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore';
import React, { useContext } from 'react';
import { CloseIcon, OptionalIcon, PenIcon2, PublicIcon } from '~/Asset';
import AvatarImage from '~/Components/reuseComponent/Avatar/Avatar';
import { db } from '~/firebase';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import ShowTime from '../../ShowTime/ShowTime';

import './HeaderPosts.scss';

function HeaderPosts({ pages, dataUser, dbGroup, datePosts }) {
    const { currentUser } = useContext(AuthContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const checkText = document.querySelector('.input__textContent')
        // const file = e.target[0].files[0];
        const textContent = checkText.innerHTML
        await updateDoc(doc(db, "testUpdatePosts", '514818e6-2088-4773-8b53-a6533258d31e'), {
            NewsPost: arrayUnion({
                textContent,
                usrPosts: currentUser.uid,
                date: Timestamp.now(),
            })
        });
    }
    const handleUpdatePosts = () => {
        return <div className='edit-posts-wrapper'>
            <form className="addPosts__form" onSubmit={handleSubmit}>
                <span className='input__textContent' contentEditable='true' placeholder='Bạn đang nghĩ gì?'>
               hello
                </span>
                <input type="file" placeholder="Img" />
                <button className="button-login login__button">Đăng</button>
            </form>
        </div>
    }
    const RenderResult = () => {
        return <>
            <Tippy
                interactive
                trigger="click"
                placement="bottom-end"
                // delay= '0, 500'
                // hideOnClick = 'false'
                render={
                    handleUpdatePosts
                }>
                {
                    dataUser.uid === currentUser.uid && <div className='header-posts__feature'>
                        <PenIcon2 />
                        <span>Chỉnh sửa bài viết</span>
                    </div>
                }

            </Tippy>


        </>
    }
    return (
        <div className={`header-post ${pages === 'watch' ? 'header-posts-watch' : ''}`}>
            <div className={'user-posts'}>
                <div className={'avatar-user'}>
                    <AvatarImage width="40px" height="40px" src={dataUser?.photoURL} pages={pages} />
                </div>
                <div className={'name-time-user'}>
                    {pages === 'group' ? (
                        <span className={`span-title span-title__${pages}`}>{dbGroup.name}</span>
                    ) :
                        <span className={`span-title`}>{dataUser.displayName}</span>
                    }
                    <div className={'time-post'}>
                        {pages === 'group' ? <span>{dataUser.displayName} · </span> : undefined}
                        <span><ShowTime datePosts={datePosts.seconds} /></span>
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
                <Tippy
                    // visible
                    interactive
                    trigger="click"
                    placement="bottom-end"
                    // delay= '0, 500'
                    // hideOnClick = 'false'
                    render={RenderResult}
                >
                    <i className={'edit-posts-icon'}>
                        <OptionalIcon />
                    </i>
                </Tippy>
                <i className={'edit-posts-icon'}>
                    <CloseIcon />
                </i>
            </div>
        </div>
    );
}

export default HeaderPosts;
