import './NewDemand.css';
import { useState } from 'react';
import { useUser } from '../../UserContext';
import Header from '../../components/Header/Header';
import { useNewDemands } from '../../hooks/api';

const NewDemand = () => {
  const [user] = useUser();
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState('');
  const newDemand = useNewDemands();
  const [error, setError] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();

    const body = {
      title,
      description,
      category
    };

    const fd = new FormData();

    for (const file of files) {
      fd.append('files[]', file);
    }

    try {
      const response = await newDemand(body, fd);

      if (response.status === 200) {
        setDescription('');
        setTitle('');
        setFiles([]);
      } else {
        setError(response.error || 'Hubo un error en la solicitud.');
      }
    } catch (error) {
      console.error('Error en handleForm:', error);
      setError('Hubo un error en la solicitud.');
    }
  };

  return (
    <div>
      <Header />
      <div className='demand_container'>
        <h3 className='submit_title'>Submit a new demand</h3>

        <h2 className='label_title'>Title:</h2>
        <form className='new_demand_form' onSubmit={handleForm}>
          <textarea
            className='new_demand_title'
            name="title"
            placeholder="Add a descriptive title for your demand"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <h2 className='label_description'>Description:</h2>
          <textarea
            className='new_demand_description'
            name="description"
            placeholder="Let people know what they can help you with!"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="1">Web Design</option>
            <option value="2">Translations</option>
            <option value="3">Developing</option>
            <option value="4">MovieMakers</option>
            <option value="5">Digital Marketing</option>
          </select>

          <input
            className='input_files'
            type="file"
            name='files[]'
            onChange={(e) => setFiles(e.target.files)}
            multiple={true}
          />

          <button className='button'>Send</button>
          {error?.error && (
            <p className="error">Se ha producido un error: {error.error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewDemand;
