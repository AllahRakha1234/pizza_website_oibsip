
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPizzaGradientsAction } from "../actions/actions"
import { addToCartAction } from "../actions/actions";
import { updatePizzaGradientsOrderAction } from "../actions/actions";

export default function CustomPizzaPage() {

    const dispatch = useDispatch();
    const pizzaGradientState = useSelector(state => state.getAllPizzaGradientsReducer);
    const { pizzasGrad, error } = pizzaGradientState;
    useEffect(() => {
        dispatch(getPizzaGradientsAction());
    }, [dispatch]);

    const [selectedBase, setSelectedBase] = useState(" ");
    const [selectedSauce, setSelectedSauce] = useState(" ");
    const [selectedCheese, setSelectedCheese] = useState(" ");
    const [selectedVeggies, setSelectedVeggies] = useState(" ");
    const [selectedMeat, setSelectedMeat] = useState(" ");
    const [variant, setVariant] = useState("small");
    const [quantity, setQuantity] = useState(1);
    const prices =
        [{
            small: 320,
            medium: 450,
            large: 590,
        }];

    const varients = ["small", "medium", "large"];

    const captalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const handleRadioChange = (category, value) => {
        switch (category) {
            case "bases":
                setSelectedBase(value);
                break;
            case "sauces":
                setSelectedSauce(value);
                break;
            case "cheese":
                setSelectedCheese(value);
                break;
            case "veggies":
                setSelectedVeggies(value);
                break;
            case "meat":
                setSelectedMeat(value);
                break;
            default:
                break;
        }
    };

    const addToCartHandler = () => {
        if (selectedBase === " " || selectedSauce === " " || selectedCheese === " " || selectedVeggies === " " || selectedMeat === " ") {
            alert("Fill All The Fields 📃📰📜.");
            return;
        }
        else {
            const customPizza = {
                name: "Custom Pizza",
                _id: selectedBase + selectedCheese + selectedSauce + selectedVeggies + selectedMeat,
                image: "https://brosgiantpizza.com/wp-content/uploads/2016/08/custom-pizza.png",
                prices: prices,
                variant: variant,
                quantity: quantity,
                price: prices[0][variant] * quantity
            }
            console.log("customPizza = ", customPizza);
            alert("Done");
            dispatch(addToCartAction(customPizza, quantity, variant))
            const gradDataOrderUpdate = {
                gradients: [selectedBase, selectedSauce, selectedCheese, selectedVeggies, selectedMeat],
                decFactor: quantity
            }
            dispatch(updatePizzaGradientsOrderAction(gradDataOrderUpdate));
        }
    }

    // ***** RENDER *****

    return (
        <>
            {error ? (<h1>Error while loading data ...</h1>) :
                <div className="container mt-4">
                    <h2 className='d-flex text-light my-3 justify-content-center shadow p-3 bg-info rounded'>Make Your Own Pizza</h2>
                    <h3 className='my-3'>Choose any gradient from below to make custom pizza</h3>
                    <div className='row'>
                        {
                            pizzasGrad.map((gradient, index) => {
                                return (
                                    <div key={index}>
                                        <div className="container d-flex flex-row mb-5 shadow-lg p-3 bg-white rounded">
                                            <div className="col-lg-6">
                                                <h3 >{captalize(gradient.gradType)}</h3>
                                                {gradient.options.map((option, index) => (
                                                    // <div className={props.gradient.gradType} key={index}>
                                                    <div className="d-flex flex-row" key={index}>
                                                        <input
                                                            id={`rad${index + 1}`}
                                                            className="rad"
                                                            name={gradient.gradType}
                                                            type="radio"
                                                            value={option}
                                                            onChange=
                                                            {
                                                                (e) => handleRadioChange(gradient.gradType, e.target.value)
                                                            }
                                                        // checked={selectedGradient === option}
                                                        />
                                                        &nbsp; <span><h5>{option}</h5></span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className=" col-lg-6 overflow-hidden"
                                                style={{ width: "40vw", height: "40vh", overflow: "hidden" }}>
                                                <img className='customePizzaImg' src={gradient.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>}
            <div className="container shadow-lg p-3 bg-white rounded mb-4">
                <div className="d-flex flex-col mb-2">
                    <div className="varientsBox me-2 w-50">
                        <p><b>Varients:</b> </p>
                        <select className='mb-2 form-control' value={variant} onChange={(e) => { setVariant(e.target.value) }} >
                            {varients.map((varnt, index) => {
                                return <option value={varnt} key={index}>
                                    {varnt}
                                </option>
                            })}
                        </select>
                    </div>
                    <div className="quantityBox w-50">
                        <p><b>Quantity:</b> </p>
                        <select className='mb-2 form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} >
                            {[...Array(10).keys()].map((object, index) => {
                                return <option value={index + 1} key={index}>{index + 1}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                    <h3>Total: {quantity}&nbsp;X&nbsp;{prices[0][variant]} = {quantity * prices[0][variant]} Rs/-</h3>

                    <button onClick={addToCartHandler} className="btn btn-primary">
                        <b>Add To Cart</b>
                    </button>
                </div>
            </div>
        </>
    )
}
