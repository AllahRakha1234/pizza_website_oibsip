
import React, { useEffect } from 'react';
import Pizza from './Pizza';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPizzasAction } from '../../actions/actions'

export default function Pizzas() {

    const dispatch = useDispatch();
    const pizzaState = useSelector(state => state.getAllPizzasReducer)
    const { loading, pizzas, error } = pizzaState;

    useEffect(() => {
        dispatch(getAllPizzasAction())
    }, [dispatch])

    // ***** RENDER *****

    return (
        <>
            {
                loading ? (<h1>Loading Data</h1>)
                    : error ? (<h1>Error</h1>)
                        : (
                            <div className="container my-4">
                                <div>
                                    <div className="pizzasRender d-flex flex-row">
                                        {pizzas.map((pizza, index) => {
                                            return (
                                                <div key={index}>
                                                    <Pizza pizza={pizza} index={index} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
            }
        </>
    )
}
