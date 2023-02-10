import './PostsItem.scss';
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper';

import Interactive from './Interactive/Interactive';
import InteractiveWatch from './Interactive/InteractiveWatch';
import HeaderPosts from './HeaderPosts/HeaderPosts';

function PostsItem({ items, dataUser, pages, dbGroup = undefined }) {
    const handleShowContent = () => {
        if (items.video) {
            return (
                <div className={`posts-item-video ${pages === 'watch' ? 'posts-item-video-watch' : ''}`}>
                    <video loop controls>
                        <source src={items.video} type="video/mp4" />
                    </video>
                </div>
            );
        } else if (items.image) {
            return (
                <div className="posts-item-image">
                    <img src={items.image} alt="" />
                </div>
            );
        } else {
            return null;
        }
    };

    const handleTitlePosts = () => {
        const title = items.title.split('&enter');
        return (
            <div className="content-posts__title">
                {title.map((item, index) => {
                    return <span key={index}>{item}</span>;
                })}
            </div>
        );
    };
    return (
        <PopperWrapper>
            <HeaderPosts pages={pages} dataUser={dataUser} dbGroup={dbGroup} />
            <div className={'content-posts'}>
                {items.title ? (
                    <div className={`content-posts-title ${pages === 'watch' ? 'content-posts-title-watch' : ''}`}>
                        <span>{handleTitlePosts()}</span>
                    </div>
                ) : undefined}
                <div className={`content-posts-items ${pages === 'watch' ? 'content-posts__items-watch' : ''}`}>
                    {handleShowContent()}
                </div>
            </div>
            {pages === 'watch' ? <InteractiveWatch items={items} /> : <Interactive items={items} />}
        </PopperWrapper>
    );
}

export default PostsItem;
