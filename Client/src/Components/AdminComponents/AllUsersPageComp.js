
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersAction } from "../../actions/actions"



export default function AllUsersPageComp() {

    const dispatch = useDispatch();
    const usersState = useSelector(state => state.getAllUsersReducer);
    const { users, error } = usersState;
    useEffect(() => {
        dispatch(getAllUsersAction());
    }, [dispatch]);

    // ***** RENDER *****

    return (
        <>
            {
                error ? <h1>Error While Loading Pizza Gradients In Admin Panel</h1>
                    : users.length === 0 ?
                        <div className="container" style={{ width: "47vw" }}>
                            <h1 className='cartMsg bg-secondary text-light p-3' style={{ margin: "78px 0" }}>
                                <b className='bg-primary p-1'>No Users 👤👤 Yet To Show</b>
                            </h1>
                        </div>
                        :
                        <div className="container my-5">
                            <table className="usersTable table col-lg-8" style={{ lineHeight: "10px" }}>
                                <tbody>
                                    <tr>
                                        <th colSpan={12}>
                                            <h2 className="d-flex justify-content-center pt-1">
                                                <b>Users List</b>
                                            </h2>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td><h4><b>User ID</b></h4></td>
                                        <td><h4><b>Name</b></h4></td>
                                        <td><h4><b>Email</b></h4></td>
                                        <td><h4><b>Date</b></h4></td>
                                    </tr>
                                    {
                                        users.map((user, index) => {
                                            return (
                                                <>
                                                    < tr key={user + index}  >
                                                        <td className="pt-3 fw-bold">
                                                            {user._id}
                                                        </td>
                                                        <td className="pt-3 fw-bold">
                                                            {user.name}
                                                        </td>
                                                        <td className="pt-3 fw-bold">
                                                            {user.email}
                                                        </td>
                                                        <td className="pt-3 fw-bold">
                                                            {user.createdAt}
                                                        </td>
                                                    </tr>
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

