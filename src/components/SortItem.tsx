import React, {memo, useState} from 'react';

interface filterItemInterface {
    title?: string,
    items?: any
}

interface interfaceRecommendation {
    slug: string,
    name: string,
}

const SortItem: React.FC<filterItemInterface> = ({
                                                     title,
                                                     items
                                                 }) => {
    const [activeElement , setActiveElement] = useState<null | number>(null);

    const handlerClickOnSortItem = (index: number) => {
        setActiveElement(index);
    }
    return (
        <>

            <h3 className="filter_sort-title">
                {title}:
            </h3>
            <ul className="filter_sort-items">
                {
                    items.map((item, index) => (
                        <li
                            className={activeElement === index ? 'active' : '' }
                            key={index}
                            onClick={() => handlerClickOnSortItem(index)}
                        >
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default memo(SortItem);