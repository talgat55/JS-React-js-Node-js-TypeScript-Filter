import React, {memo } from 'react';
import SortItem from './SortItem';
import styled from 'styled-components';
import TypeItems from './TypeItems';
import CatBlock from "./CatBlock";

interface interfaceRecommendation {
    slug: string,
    name: string,
}

const Filter: React.FC = () => {
    const RECOMMENDATIONS_LIST: Array<interfaceRecommendation> = [
        {
            slug: "recommendation",
            name: "Мы рекомендуем",
        }, {
            slug: "new",
            name: "Новинки",
        }, {
            slug: "price_desc",
            name: "Цена по убыванию",
        }, {
            slug: "price_asc",
            name: "Цена по возрастанию",
        }
    ]



    return (
        <FilterComponent>
            <SortItem
                title="Сортровка"
                items={RECOMMENDATIONS_LIST}
            />
            <TypeItems/>
            <div className="aside">
                <CatBlock/>
            </div>
        </FilterComponent>
    )
}

export default memo(Filter);

const FilterComponent = styled.div`
  .filter_sort-title{
    font-size: 15px;
    color: #d7d7d7;
  }
  
  .filter_sort-items{
    margin: 0;
    padding: 0;
    display: flex;
    
    li {
      list-style: none;
      margin-right: 10px;
      border-bottom: 1px dashed #333; 
      cursor: pointer;
      user-select: none;
      transition: all .3s;
      &:hover{
        color: #B4F8C8;
      }
      &.active{
        color: #529d6f;
      }
    }
  }

`;