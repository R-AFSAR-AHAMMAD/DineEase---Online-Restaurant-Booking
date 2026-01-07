import React from 'react'
import './index.css'
const PopularDish = (props) => {
    const {dishData} = props;
    const {imgUrl,name,category} = dishData;
  return (
    <li className='popular-dish'>
        <img className='popular-dish-img' alt={name} src={imgUrl} />
        <h1 className='dish-name'>{name}</h1>
    </li>
  )
}

export default PopularDish
