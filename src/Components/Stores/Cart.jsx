import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { remove } from './CartSlice'


const Cart = () => {
    
    const cartdata = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    console.log(cartdata)
    const [quantities, setQuantities] = useState(
        cartdata.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
        }, {})
    );

    const handleQuantityChange = (id, change) => {
        setQuantities(prevQuantities =>
        ({
            ...prevQuantities, [id]: Math.max((prevQuantities[id] || 0) + change, 1)
        }));
    }

    const handleremove = (id) => {
        dispatch(remove(id))

    }

    useEffect(() => {
        const initialquantity = {};
        cartdata.forEach(item => {
            initialquantity[item.id] = initialquantity[item.id] ? initialquantity[item.id] + 1 : 1;
        })
        setQuantities(initialquantity);
    }, [cartdata]);
    const samedata = Object.values(cartdata.reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = { ...item, count: 0 };

        }
        acc[item.id].count++;
        return acc
    }, {}))

    const Totalprice = () => {
        return Object.keys(quantities).reduce((total, id) => {
            const item = cartdata.find(item => item.id === id);
            const itemTotal = item ? item.price * quantities[id] : 0;
            return total + itemTotal;
        }, 0).toFixed(2);
    };
    
    return (
        <div className="conatainer">
       
            <div className="row mt-2 border">
                <div className="col-md-8">
                    {
                        samedata && samedata.length > 0 ? (
                            samedata.map((item) => (
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={item.imgUrl} className="img-fluid" style={{ height: "200px" }} />
                                    </div>
                                    <div className="col-md-3">
                                        <h4 className="mt-5">{item.productName}</h4>
                                        <p className="mt-5">price:${item.price} * {quantities[item.id] || 0}  = ${(item.price * (quantities[item.id] || 0)).toFixed(2)}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <button className="mt-5" style={{border:'none'}}
                                            onClick={() => { handleremove(item.id) }}>X</button><br></br>
                                        <button className="mt-5 m-2 " onClick={() => { handleQuantityChange(item.id, 1) }} style={{ height: '30px', width: '30px', border: 'none' }}>+</button>
                                        <button className="mt-5 m-2" onClick={() => { handleQuantityChange(item.id, -1) }} style={{ height: '30px', width: '30px', border: 'none' }}>-</button>
                                    </div>
                                </div>
                            ))
                        ) : <p>Please add some product</p>
                    }
                </div>
                <div className="col-md-4">
                    <h4 className="mt-5">Cart Summary</h4>
                    <p>Total Price:</p>
                    <p>${Totalprice()}</p>
                </div>
            </div>
        </div>


    )
}
export default Cart





















