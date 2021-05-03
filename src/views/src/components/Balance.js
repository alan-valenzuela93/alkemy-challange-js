import React from 'react'

const Balance = (props) => {
    return (
        <div class = 'alert alert-info'>
            <span>{props.total}</span>                        
        </div>
    )
}

export default Balance;
