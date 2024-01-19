import './NewDemand.css'
import { useState } from 'react'
import { useUser } from '../../UserContext'
import Header from '../../components/Header/Header'

const NewDemand = () => {

const [user] = useUser()
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')

  const [error, setError] = useState('')

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
        <Header />
        <div className='demand_container'>
            <h3>Submit a new demand:</h3>
            <form onSubmit={handleForm}>
            <textarea
                name="title"
                placeholder="Add a descriptive title for your demand"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea
                name="description"
                placeholder="Let people know what they can help you with!"
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
        </div>
    );
}

export default NewDemand;