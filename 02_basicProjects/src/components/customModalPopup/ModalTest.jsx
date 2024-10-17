import React, { useState} from 'react'
import Modal from './Modal'

function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleTogglePopup() {
        setShowModalPopup(!showModalPopup)
    }

    function onClose() {
        setShowModalPopup(false);
    }

  return (
    <div className='bg-gray-500 w-screen h-screen flex justify-center items-center'>
        <button className='border border-black bg-blue-400 p-1' onClick={handleTogglePopup}>Open Modal Popup</button>
        {showModalPopup && (
            <Modal 
                id={"custom-id"}
                header={<h1>Customized Header</h1>}
                footer={<h1>Customized Footer</h1>}
                onClose={onClose}
                body={<div>Customized body</div>}
            />
        )}
    </div>
  )
}

export default ModalTest