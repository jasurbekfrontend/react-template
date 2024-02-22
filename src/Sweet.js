import React, { useState } from 'react';

const Sweet = () => {
    const sweetData = JSON.parse(localStorage.getItem('sweet')) || [];
    const [loading, setLoading] = useState(false)
    if (sweetData.length === 0) {
        return (
            <div className='noneProduct'>
                <p>No products have been added yet :(</p>
            </div>
        );
    }
    

    function plus(id) {
        sweetData.map((item) => {
            if (item.id === id) {
                item.count++
                localStorage.setItem('sweet', JSON.stringify(sweetData))
            }
        })
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }
    function minus(id) {
        sweetData.map((item) => {
            if (item.id === id) {
                if (item.count > 0) {
                    item.count--
                    localStorage.setItem('sweet', JSON.stringify(sweetData))
                }
            }
        })
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }

    
    
   
    

    return (
        <div className='burgerPage'>
            {sweetData.map((item, index) => {
                return (
                    <div className='card' key={index}>
                        <div className='title'>
                            <b>{item.name}</b>
                            <p>Unit price: ${item.price}</p>
                            <p>{item.count} pcs</p>
                            <p>${item.count * item.price}</p>
                        </div>
                        <img src={item.image} alt={item.name} />
                        <div className='count'>
                            <button onClick={(id) => plus(item.id)}>+</button>
                            <button onClick={(id) => minus(item.id)}>-</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


export default Sweet;