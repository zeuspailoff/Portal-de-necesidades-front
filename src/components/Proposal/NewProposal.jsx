import { useState } from "react";
import "./NewProposal.css";
import { useUser } from "../../UserContext";
import { useUserActions } from "../../hooks/api";
import { useParams } from "react-router";
import ConfirmModal from "./ConfirmModal";

const NewProposal = ({ proposals, setProposals }) => {
  const [user] = useUser()
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const [files, setFiles] = useState([]);
  const { newProposal } = useUserActions();
  const [visibleForm, setVisibleForm] = useState(false); // Estado para controlar la visibilidad del formulario
  const [showModal, setShowModal] = useState("none");
  const [error, setError] = useState('')

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
      const arrayFiles = response.data.files ? Object.values(response.data.files).map(value => ({ ...value })): [];
      setDescription("");
      setFiles([]);

      const newProposals = [...proposals, 
        { 
          id: response.data.id, 
          description: response.data.description, 
          proposalFiles: arrayFiles,
          profile_picture: user.profile_picture,
          creator_username: user.username,
          demand_id: response.data.demand_id
        }];
      setProposals(newProposals)

    } else {
      setError(response.data.error);

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
      <ConfirmModal showModal={showModal} onClose={handleCloseModal} onConfirm={handleConfirm} />
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
            {error && (
              <p className="error">An error has occurred: {error.message}</p>
            )}
          </form>
          <button className="hide_button" onClick={hideForm}>Hide Form</button>
        </div>
      )}
    </div>
  );
};

export default NewProposal;
