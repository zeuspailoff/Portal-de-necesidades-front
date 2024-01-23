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
            <h3 className='submit_title'>Submit a new demand</h3>

            <h2 className='label_title'>Title:</h2>
            <form className='new_demand_form' onSubmit={handleForm}>
            <textarea
                className='input_textarea new_demand_title'
                name="title"
                placeholder="Add a descriptive title for your demand"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <h2 className='label_description'>Description:</h2>
            <textarea
                className='input_textarea new_demand_description'
                name="description"
                placeholder="Let people know what they can help you with!"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <input className='input_files' type="file" name='files[]'/>
            <input className='input_files' type="file" name='files[]'/>
            <input className='input_files' type="file" name='files[]'/>
            <input className='input_files' type="file" name='files[]'/>
            <input className='input_files' type="file" name='files[]'/>

            <button className='button'>Send</button>
            {error?.error &&
            <p className="error">Se ha producido un error: {error.error}</p>
            }
        </form>
        </div>
        </div>
    );
}

export default NewDemand;