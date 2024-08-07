'use client'

import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FcCheckmark, FcCancel } from "react-icons/fc";



const Modal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button 
        className="btn btn-link rounded-full" 
        onClick={()=>document.getElementById('my_modal_5').showModal()}
      >
        <IoIosAddCircleOutline className="text-3xl" />
      </button>
        <dialog id="my_modal_5" className="modal modal-middle">
          <div className="modal-box flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl mb-8">Add a new task</h3>
            <input
              type="text"
              placeholder="New task"
              className="input input-bordered input-primary w-full max-w-xs mb-8" />
            <div className="join gap-4 mb-3">
            <button className="btn btn-outline btn-error">Cancel
              <FcCancel />
            </button>
            <button className="btn btn-outline btn-success">Save
              <FcCheckmark />
            </button>
            </div>  
          </div>
        </dialog>
    </div>
  )
}

export default Modal