import { useState } from "react"
import './NewProposal.css';
import { useUserActions } from "../../hooks/api"
import { useParams } from "react-router";

const NewProposal = () => {

  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const { id } = useParams()

  const [files, setFiles] = useState('')
  const { newProposal } = useUserActions();

  const handleForm = async (e) => {
    e.preventDefault();
    const fd = new FormData()
    fd.append('description', description)
    if (files) {
      files.forEach(f => {
        fd.append('files', f)
      });
    }
    const response = await newProposal(id, fd)

    if (response.status == 200) {
      setDescription('')
      setFiles('')
      window.location.reload();
    } else {
      setError(error)
    }

  }

  return (
    <div className="new_proposal_wrapper">
      <h3>Submit a new proposal:</h3>
      <form className="submit_new_proposal_form" onSubmit={handleForm}>
        <textarea
          className="new_proposal_description"
          name="description"
          placeholder="Bring a possible solution"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          className='input_files'
          type="file"
          name='files[]'
          onChange={(e) => {
            setFiles(Array.from(e.target.files))
          }

          }
          multiple={true}
        />
        <button className="button">Send</button>
        {error?.error &&
          <p className="error">An error has occurred: {error.error}</p>
        }
      </form>
    </div>
  )
}

export default NewProposal