import React, { useState } from 'react';

export default function GradientComp(props) {
    const [selectedGradient, setSelectedGradient] = useState('');
    const [selectedBase, setSelectedBase] = useState("");
    const [selectedSauce, setSelectedSauce] = useState("");
    const [selectedCheese, setSelectedCheese] = useState("");
    const [selectedVeggies, setSelectedVeggies] = useState("");
    const [selectedMeat, setSelectedMeat] = useState("");

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
        if (selectedBase !== "" && selectedSauce !== "" && selectedCheese !== "" && selectedVeggies !== "" && selectedMeat !== "") {
            console.log("All Values Done.");
        }
    };

    // ***** RENDER *****

    return (
        <>
            <div className="paymentInfo container shadow p-3 bg-white rounded my-4">
                <div className='d-flex flex-row justify-content-between'>
                    <button className="btn btn-primary" style={{ height: "40px" }}>
                        <b>Add To Cart</b>
                    </button>
                </div>
            </div>
            <div className="container d-flex flex-row mb-5 shadow-lg p-3 bg-white rounded">
                <div className="col-lg-6">
                    <h2 >{captalize(props.gradient.gradType)}</h2>
                    {props.gradient.options.map((option, index) => (
                        // <div className={props.gradient.gradType} key={index}>
                        <div className="d-flex flex-row" key={index}>
                            <input
                                id={`rad${index + 1}`}
                                className="rad"
                                name={props.gradient.gradType}
                                type="radio"
                                value={option}
                                onChange=
                                {
                                    (e) => handleRadioChange(props.gradient.gradType, e.target.value)
                                }
                            // checked={selectedGradient === option}
                            />
                            &nbsp; <span><h4>{option}</h4></span>
                        </div>
                    ))}
                </div>
                <div className=" col-lg-6 overflow-hidden"
                    style={{ width: "40vw", height: "40vh", overflow: "hidden" }}>
                    <img className='customePizzaImg' src={props.gradient.image} alt="" />
                </div>
            </div>
        </>
    );
}
