import SidebarLeft from '~/Components/reuseComponent/Sidebar/SidebarLeft';
import './HomePageContent.scss';
import { ListFeatureUser1 } from '~/Components/reuseComponent/List/List';
import SidebarRight from '~/Components/reuseComponent/Sidebar/SidebarRight';
import PostsStory from './HomeContentItems/PostStory/PostsStory';
import PostsNews from './HomeContentItems/PostsNews/PostsNews';
import TestFireBase from './HomeContentItems/PostsNews/TestfireBase';
function HomePage() {
    document.title = 'Facebook';
    return (
        <div className="home-page-wrapper">
            <SidebarLeft data={ListFeatureUser1} />
            <div className="home-page-content">
                <div className="home-page-content__items">
                    <PostsStory />
                    <PostsNews />
                    {/* <TestFireBase />  */}
                </div>
            </div>
            <SidebarRight />
        </div>
    );
}

export default HomePage;
