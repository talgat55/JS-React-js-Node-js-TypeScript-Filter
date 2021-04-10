import React, {memo} from 'react';

interface filterItemInterface {
    title: string,
    items: any
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
                items.map((item: string,index: number)=>(
                    <div key={index}>
                        {item}
                    </div>
                ))
            }
        </>
    )
}
export default memo(FilterItem);