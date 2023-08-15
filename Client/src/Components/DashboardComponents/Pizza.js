
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction } from '../../actions/actions';
export default function Pizza(props) {

    const dispatch = useDispatch();
    const [variant, setVariant] = useState("small");
    const [quantity, setQuantity] = useState(1);
    const [showDesc, setShowDesc] = useState(false);



    const captalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const handleOpenShow = () => {
        setShowDesc(!showDesc)
    }

    const handleCloseShow = () => {
        setShowDesc(!showDesc)
    }

    const handleAddToCarBtn = () => {
        dispatch(addToCartAction(props.pizza, quantity, variant))
    }

    return (
        <>
            <div className="pizzaBox shadow-lg p-3 bg-white rounded" style={{ marginLeft: "40px", marginTop: "30px", marginBottom: "50px" }}>
                <div className="mb-2">
                    <h4 onClick={handleOpenShow}>{props.pizza.name}</h4>
                    <img onClick={handleOpenShow} src={props.pizza.image} className='dsahboardImg img-fluid mx-auto' alt="No pizza" />
                    <hr />
                </div>
                <div className="d-flex mb-2">
                    <div className="varientsBox me-2 w-100">
                        <p><b>Varients:</b> </p>
                        <select className='mb-2 form-control' value={variant} onChange={(e) => { setVariant(e.target.value) }} >
                            {props.pizza.varients.map((varnt, index) => {
                                return <option value={varnt} key={index}>{varnt}</option>
                            })}
                        </select>
                    </div>
                    <div className="quantityBox w-100">
                        <p><b>Quantity:</b> </p>
                        <select className='mb-2 form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} >
                            {[...Array(10).keys()].map((object, index) => {
                                return <option value={index + 1} key={index}>{index + 1}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="d-flex">
                    <div className='mt-1 w-100' style={{ marginRight: "3px" }}>
                        <h6><b>Price: {props.pizza.prices[0][variant] * quantity} Rs/-</b></h6>
                    </div>

                    <div className='w-100'>
                        <button onClick={handleAddToCarBtn} className="btn btn-danger btn-sm">
                            <b className='p-1'>Add to Cart</b>
                        </button>
                    </div>
                </div>
            </div >
            {/* MODAL CODE */}

            {showDesc && (
                <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{props.pizza.name}</h4>
                                <button type="button" className="btn-close" onClick={handleCloseShow} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img src={props.pizza.image} style={{ width: "20vw", height: "40vh" }} className='dsahboardImg img-fluid mx-auto' alt="No pizza" />
                                <h5>Category: {captalize(props.pizza.category)}</h5>
                                <h5>Description: {props.pizza.description}</h5>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" onClick={handleCloseShow}>
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
