import React, {memo} from 'react';

interface filterItemInterface {
    title?: string,
    items?: any
}
interface interfaceRecommendation {
    slug: string,
    name: string,
}

const FilterItem: React.FC<filterItemInterface> = ({
                                                       title,
                                                       items
                                                   }) => {

    return (
        <>

            {
                title
            }
            {
                items.map((item,index)=> (
                    <div key={index}>
                        {item.name}
                    </div>
                ))
            }
        </>
    )
}
export default memo(FilterItem);