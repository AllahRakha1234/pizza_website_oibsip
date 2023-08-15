
import React, { useState } from 'react'
import AllOrdersPageComp from './AdminComponents/AllOrdersPageComp'
import InventoryPageComp from './AdminComponents/InventoryPageComp'
import AllUsersPageComp from './AdminComponents/AllUsersPageComp';

export default function AdminPage() {

    const [adminToolbarFlag, setAdminToolbarFlag] = useState(1);

    // ***** RENDER *****
    return (
        <>
            <div className="container my-3">
                <nav className="adminNavbar navbar navbar-expand-lg navbar-info bg-info">
                    <div className="container d-flex flex-column">
                        <h1 className='text-light'>Admin Panel</h1>
                        <div className="d-flex justify-content-between">
                            {/* <button className="btn btn-light mx-2">Users</button> */}
                            <button onClick={() => setAdminToolbarFlag(1)} className="btn btn-light">Inventory</button>
                            <button onClick={() => setAdminToolbarFlag(2)} className="btn btn-light mx-2">Orders</button>
                            <button onClick={() => setAdminToolbarFlag(3)} className="btn btn-light mx-2">Users</button>
                        </div>
                    </div>
                </nav>
                {
                    adminToolbarFlag === 1 ?
                        <InventoryPageComp /> : adminToolbarFlag === 2 ?
                            <AllOrdersPageComp /> : <AllUsersPageComp />
                }
            </div>
        </>
    )
}

