import { useState } from "react"
import { useUser } from "../../UserContext"
import { Navigate } from "react-router-dom"
// import { useUserActions } from "../../hooks/api"
const NewProposal = () => {

  const [user] = useUser()
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

/*   const handlePhoto = e => {
    const photo = e.target.files[0]
    const fd = new FormData()
    fd.append('photo', photo)
    useUserActions.addPhoto(entry.id, fd)
      .then(res => {
        setPhotos([...photos, res.data.photo])
      })
  } */

  const handleForm = async (event) => {
    event.preventDefault()
    const res = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description })
    })
    const response = await res.json()

    if (res.ok) {
      setDescription(response)
    } else {
      setError(response)
    }
  }


  return (
    <div>
      <h3>Submit a new proposal:</h3>
      <form onSubmit={handleForm}>
        <textarea
          name="description"
          placeholder="Bring a possible solution"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input type="file" name='files[]'/>
        <input type="file" name='files[]'/>
        <input type="file" name='files[]'/>
        <input type="file" name='files[]'/>
        <input type="file" name='files[]'/>

        <button>Send</button>
        {error?.error &&
          <p className="error">Se ha producido un error: {error.error}</p>
        }
      </form>
    </div>
  )
}

export default NewProposal