import { useState } from "react";

const EditProposal = () => {

    const [description, setDescription] = useState()
    const [files, setFiles] = useState()
    const [errors, setErrors] = useState()

    const handleForm = (e) => {
        e.preventDefault()
    }
    return(
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
    )
}

export default EditProposal;