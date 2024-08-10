import React from "react";

const DeleteModal = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
        <div className=" modal-box bg-secondary ">
          <p className="text-lg py-4">
            Are you sure you want to delete the task?
          </p>
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex gap-4">
                <button className="btn bg-primary text-secondary-content rounded-xl">
                  Cancel
                </button>
                <button className="btn bg-accent text-secondary-content rounded-xl">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteModal;
