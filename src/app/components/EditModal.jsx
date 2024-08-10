import React from "react";

const EditModal = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="edit_modal" className="modal modal-bottom sm:modal-middle">
        <div className=" modal-box bg-secondary ">
          <h3 className="font-bold text-2xl py-3">EDIT TASK!!!</h3>
          <p className="text-lg py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex gap-4">
                <button className="btn bg-primary text-secondary-content rounded-xl">
                  Cancel
                </button>
                <button className="btn bg-accent text-secondary-content rounded-xl">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditModal;
