import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPizzaGradientsAction } from "../../actions/actions"
import { updatePizzaGradientsAdminAction } from "../../actions/actions"
export default function InventoryPageComp() {

    const dispatch = useDispatch();
    const pizzaGradientState = useSelector(state => state.getAllPizzaGradientsReducer);
    const { pizzasGrad, error } = pizzaGradientState;
    useEffect(() => {
        dispatch(getPizzaGradientsAction());
    }, [dispatch]);

    const captalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const updatePizzaGradHandler = async (option) => {
        const givenQuantity = prompt("Enter the Quantity 🔢: ")
        if (givenQuantity < 1) {
            alert("Quantity Should Be Greater Than 0");
        }
        else if (givenQuantity > 500) {
            alert("Quantity Should Be Less Than 500 ");
        }
        else if (givenQuantity > 0 && givenQuantity <= 500) {
            dispatch(updatePizzaGradientsAdminAction(option, givenQuantity));
        }
    }

    // ***** RENDER *****

    return (
        <>
            {
                error ? <h1>Error While Loading Pizza Gradients In Admin Panel</h1>
                    :
                    <div className="container mt-4">
                        <table className="inventoryTable table col-lg-8" style={{ lineHeight: "10px" }}>
                            <tbody>
                                <tr>
                                    <th colSpan={12}>
                                        <h2 className="d-flex justify-content-center fw-bold">Inventory Store</h2>
                                    </th>
                                </tr>
                                {
                                    pizzasGrad.map((gradientObj, index) => {
                                        return (
                                            <>
                                                <tr>
                                                    <th colSpan={12}>
                                                        <h3 className="fw-bold">{captalize(gradientObj.gradType)}</h3>
                                                    </th>
                                                </tr>
                                                {
                                                    gradientObj.options.map((option, index) => {
                                                        return (
                                                            < tr key={option + index}  >

                                                                <td colSpan={8}>
                                                                    <h5
                                                                        style={{ lineHeight: "20px" }}
                                                                        className="fw-bold"
                                                                    >
                                                                        {option}
                                                                    </h5>
                                                                </td>

                                                                <td className="text-center mt-3" colSpan={2}>
                                                                    <h5 className="fw-bold">
                                                                        {gradientObj.quantity[option]}
                                                                    </h5>
                                                                </td>

                                                                <td className="text-center" colSpan={2}>
                                                                    <button className="updateBtn btn btn-primary"
                                                                        onClick={() => updatePizzaGradHandler(option)}
                                                                    >
                                                                        Update
                                                                    </button>
                                                                </td>
                                                            </ tr>
                                                        )
                                                    }
                                                    )
                                                }
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div >
            }
        </>
    );
}

