
import MenuItem from '../MenuItem/MenuItem';
import './MenuAllFeature.scss';

function ItemAllFeature({ data, clItem, className, classOfIconL }) {
    return (
        <div className={('Feature-items')}>
            {data.title ? <span className={('feature-header-item')}>{data.title}</span> : null}
            <div className={('feature-menu-items')}>
                {data.children.map((result) => (
                    <MenuItem data={result} className={(clItem, className)} classOfIconL={classOfIconL} />
                ))}
            </div>
        </div>
    );
}

export default ItemAllFeature;
