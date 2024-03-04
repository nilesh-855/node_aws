import React from 'react'
import './item.scss';

const Item = ({item,onRemoveClick}) => {
  return (
    <div className='item'>
      <div className='card'>
        <div className='image'>
            <img src={item.image.url} alt="#  "/>
        </div>
        <div className='details'>
            <div className='detail1'>
                <div>Price : {item.price.formatted_with_symbol}</div>
                <div>Quantity : {item.quantity}</div>
            </div>
            <div className="detail2">
                <button className="remove_btn" onClick={()=>{onRemoveClick(item.id)}}>Remove</button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Item
