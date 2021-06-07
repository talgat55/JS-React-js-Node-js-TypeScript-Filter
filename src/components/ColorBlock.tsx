import React, {memo, useState} from 'react';
import styled from 'styled-components';

interface interfaceColors {
    slug: string,
    value: string
}


const COLORS_ITEMS = [
    {
        slug: 'white',
        value: '#fff'
    },
    {
        slug: 'black',
        value: '#000'
    }
    ,
    {
        slug: 'green',
        value: 'green'
    }
    ,
    {
        slug: 'blue',
        value: 'blue'
    }
    ,
    {
        slug: 'orange',
        value: '#ffa500'
    }
    ,
    {
        slug: 'yellow',
        value: 'yellow'
    }
]
const ColorBlock = () => {
    const [activeElements, setActiveElements] = useState<null | Array<string> >(null);
    const handleClick = (item:string) => {
        if( activeElements !== null && activeElements.length){
            setActiveElements([
                ...activeElements,
                item
            ]);
        } else{
            setActiveElements([item]);
        }
    }

    return (<ColorComponent>
        <h3>
            Цвет
        </h3>
        <ul>
            {
                COLORS_ITEMS && COLORS_ITEMS.length && COLORS_ITEMS.map((item: interfaceColors, index: number) => (
                    <li
                        key={index}
                        className={activeElements !==null && activeElements.length && activeElements.includes(item.slug) ? 'active' : ''}
                        onClick={() => handleClick(item.slug.toString())}
                        style={{backgroundColor: item.value}}
                    >
                    </li>
                ))
            }
        </ul>

    </ColorComponent>)
}
export default memo(ColorBlock);

const ColorComponent = styled.div`
  ul{
    margin: 0;
    padding: 0;
    display: flex;
    li{
      list-style: none;
      margin: 0 0 10px 10px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #eee;
      cursor: pointer;
      &.active{
        border-color: #529d6f;
      }
    }
  }

`;