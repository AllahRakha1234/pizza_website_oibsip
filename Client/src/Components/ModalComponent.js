import React, { useState } from 'react'

export default function ModalComponent(props) {


    const [showModal, setShowModal] = useState(false);

    const handleCloseShow = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.8)' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{props.modalTitle}</h4>
                            <button type="button" className="btn-close" onClick={handleCloseShow} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {props.modalBody}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" onClick={handleCloseShow}>
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
