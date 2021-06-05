import React, {memo, useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as LineSvg} from "../static/line.svg";
import {ReactComponent as MasonrySvg} from "../static/masonry.svg";

const TypeItems = () => {
    const ITEMS = [
        {
            id: 0,
            slug: 'list'
        },
        {
            id: 1,
            slug: 'masonry'
        }

    ];
    const [activeElement, setActiveElement] = useState(null);
    const handlerCLick = slug => {
        setActiveElement(slug);
    }
    return (
        <TypeItemsComponent>
            {
                ITEMS && ITEMS.length && ITEMS.map((item, index) => (
                    <li
                        className={activeElement === item.slug ? 'active' : ""}
                        key={index}
                        onClick={() => handlerCLick(item.slug)}
                    >
                        {
                            item.slug === 'list' ?
                                <LineSvg/>
                                :
                                <MasonrySvg/>
                        }
                    </li>
                ))
            }

        </TypeItemsComponent>
    )
}

export default memo(TypeItems);

const TypeItemsComponent = styled.ul`
  display: flex;
  align-items: center;
  li{
    list-style: none;
    margin-left: 10px;
    svg {
    cursor: pointer;
    * {
      fill: #333;
    }
    }
    &:hover{
      svg * {
        fill: #B4F8C8;
      }
    }
    &.active{
      svg *{
        fill: #529d6f;
      }
    }
  }

`;