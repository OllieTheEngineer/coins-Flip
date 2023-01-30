import React from 'react'

function Coin(props) {
  return (
    <div>
       <img src={props.image}
            alt={props.quarter}
            style={{width:'150px', height:'150px'}}
        />
    </div>
  )
}

export default Coin;