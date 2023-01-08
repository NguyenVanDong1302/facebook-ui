import { useLocation } from 'react-router-dom';
import ListTag from './ListTag';
import './MenuItems.scss';

function MenuItems({ data }) {
    const location = useLocation();
    let checkPage = location.pathname.split('/')[1];
    if (checkPage === ''){
        checkPage = 'home'
    }
    return (
        <div className={`menu-items ${checkPage + '-page-active'}`}>
            {data.map((item, index) => {
                return (
                    <div className={'menu-item'} key={index}>
                        <div className={'menu-item__tag'}>
                            <span className={item.title ? 'menu-item__title' : 'menu-item__header'}>{item.title}</span>
                            <ListTag items={item.children} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default MenuItems;
