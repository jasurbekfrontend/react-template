import React,  {  useState  } from 'react';

const Drink = () => {
    const drinkData = JSON.parse(localStorage.getItem('drink')) || [];
    const [loading, setLoading] = useState(false)
    if (drinkData.length === 0) {
        return (
            <div className='noneProduct'>
                <p>No products have been added yet :(</p>
            </div>
        );
    }
    

    function plus(id) {
        drinkData.map((item) => {
            if (item.id === id) {
                item.count++
                localStorage.setItem('drink', JSON.stringify(drinkData))
            }
        })
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }
    function minus(id) {
        drinkData.map((item) => {
            if (item.id === id) {
                if (item.count > 0) {
                    item.count--
                    localStorage.setItem('drink', JSON.stringify(drinkData))
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
            {drinkData.map((item, index) => {
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


export default Drink;