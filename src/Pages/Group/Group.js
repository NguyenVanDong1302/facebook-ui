import { Outlet } from 'react-router-dom';
import { ListFeatureGroup } from '~/Components/reuseComponent/List/List';
import SidebarLeft from '~/Components/reuseComponent/Sidebar/SidebarLeft';

function GroupPage() {
    document.title = 'Nhóm | Facebook ';
    return (
        <div className="Group-page-wrapper">
            <SidebarLeft data={ListFeatureGroup} />
                <Outlet />
        </div>
    );
}

export default GroupPage;
