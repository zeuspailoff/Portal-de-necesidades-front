import React, { useState } from "react";
import "./NewProposal.css";
import { useUserActions } from "../../hooks/api";
import { useParams } from "react-router";
import ConfirmModal from "./ConfirmModal";

const NewProposal = ({proposals, setProposals}) => {
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();
  const [files, setFiles] = useState([]);
  const { newProposal } = useUserActions();
  const [visibleForm, setVisibleForm] = useState(false); // Estado para controlar la visibilidad del formulario
  const [showModal, setShowModal] = useState("none");

  const handleForm = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("description", description);
    if (files) {
      files.forEach((f) => {
        fd.append("files", f);
      });
    }
    const response = await newProposal(id, fd);
    if (response.data.status == 200) {
      console.log(response.data);
      setDescription("");
      setFiles([]);
      const newProposals = [...proposals, {id: response.data.id, description: response.data.description, files : response.data.files}];
      console.log(">>>>>>>>>>>", newProposals);
      setProposals(newProposals)
      
    } else {
      setError(error);
    }
  };

  const showForm = () => {
    setVisibleForm(true);
  };

  const hideForm = () => {
    setVisibleForm(false);
  };

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal("flex");
  };

  const handleCloseModal = () => {
    setShowModal("none");
  };

  const handleConfirm = (e) => {
    handleForm(e)
    setShowModal(false);
  };

  return (
    <div className="new_proposal_wrapper">
        <ConfirmModal  showModal={showModal} onClose={handleCloseModal} onConfirm={handleConfirm}/>
      <h3>Submit a new proposal:</h3>
      {!visibleForm && ( 
        <button className="show_button" onClick={showForm}>Show Form</button>
      )}
      {visibleForm && (
        <div>
          <form className="submit_new_proposal_form" onSubmit={handleShowModal}>
            <textarea
              className="new_proposal_description"
              name="description"
              placeholder="Bring a possible solution"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className='input_files'
              type="file"
              name="files[]"
              onChange={(e) => {
                setFiles(Array.from(e.target.files));
              }}
              multiple={true}
            />
            <button className="send_button" onClick={handleShowModal}>
              Send
            </button>
            {error?.error && (
              <p className="error">An error has occurred: {error.error}</p>
            )}
          </form>
          <button className="hide_button" onClick={hideForm}>Hide Form</button>
        </div>
      )}
    </div>
  );
};

export default NewProposal;
