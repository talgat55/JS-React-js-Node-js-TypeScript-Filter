import React, {memo} from 'react';
import FilterItem from './FilterItem';
interface interfaceRecommendation {
    slug: string,
    name: string,
}
const Filter: React.FC = () => {
    const RECOMMENDATIONS_LIST : Array<interfaceRecommendation> = [
        {
            slug: "recommendation",
            name: "Мы рекомендуем",
        },{
            slug: "new",
            name: "Новинки",
        },{
            slug: "price_desc",
            name: "Цена по убыванию",
        },{
            slug: "price_asc",
            name: "Цена по возрастанию",
        }
    ]

    return (
        <div>
            <FilterItem
                title="Сортровка"
                items={RECOMMENDATIONS_LIST}
            />
        </div>
    )
}

export default memo(Filter);