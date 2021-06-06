import React, {memo} from 'react';
import styled from 'styled-components';
interface interfaceCats {
    slug: string,
    title: string,
}
const LIST_CATS = [
    {
        slug: 'bermudi',
        title: 'Бермуды'
    },
    {
        slug: 'bridji',
        title: 'Бриджи'
    },
    {
        slug: 'bruki',
        title: 'Брюки'
    },
    {
        slug: 'kilt',
        title: 'Килт'
    },
    {
        slug: 'taytsi',
        title: 'Тайтсы'
    }
];
const CatBlock = () => {

    const handleClick = (item : string) => {

    }
    return (<CatComponent>
        <h3>
            Категория
        </h3>
        <ul>
            {
                LIST_CATS && LIST_CATS.length && LIST_CATS.map((item : interfaceCats, index : number) => (
                    <li
                        onClick={() => handleClick(item.slug)}
                        key={index}
                    >
                        <label>
                       <input type="checkbox"   name="cat"  value={item.slug}  />
                           {item.title}
                       </label>
                    </li>
                ))
            }
        </ul>
    </CatComponent>)
}
export default memo(CatBlock);

const CatComponent = styled.div`
  ul{
    margin: 0;
    padding: 0;
    li{
      list-style: none;
      margin-bottom: 5px;
      cursor: pointer;
      input{
        margin-right: 9px;
      }
      label{
        cursor: pointer;
      }
    }
  }

`;