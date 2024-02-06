import React, { useState } from "react";
import "./NewProposal.css";
import { useUserActions } from "../../hooks/api";
import { useParams } from "react-router";

const NewProposal = () => {
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();
  const [files, setFiles] = useState("");
  const { newProposal } = useUserActions();
  const [visibleForm, setVisibleForm] = useState(false); // Estado para controlar la visibilidad del formulario

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

    if (response.status === 200) {
      setDescription("");
      setFiles("");
      window.location.reload();
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

  return (
    <div className="new_proposal_wrapper">
      <h3>Submit a new proposal:</h3>
      {!visibleForm && ( 
        <button className="show_button" onClick={showForm}>Show Form</button>
      )}
      {visibleForm && (
        <div>
          <form className="submit_new_proposal_form" onSubmit={handleForm}>
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
            <button className="send_button" type="submit">
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
