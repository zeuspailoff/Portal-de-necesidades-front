import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUserActions } from "../../hooks/api";


const EditDemand = () => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [category, setCategory] = useState()
    const [files, setFiles] = useState()
    const [error, setError] = useState()
    const { id } = useParams()
    const { editDemand } = useUserActions()
    const navigate = useNavigate()

    const handleForm = async (e) => {
        e.preventDefault();

        const fd = new FormData()
        fd.append('title', title)
        fd.append('description', description)
        fd.append('category_id', category)
        files.forEach(f => {
            fd.append('files', f)
        })

        const response = await editDemand(id, fd);
        try {

            if (response.data.status === 200) {
                setDescription('');
                setTitle('');
                setFiles([]);
                navigate(`/demands/${id}`)
                window.location.reload();
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

            <h3 className='submit_title'>Edit your demand</h3>
            <div className='submit_demand_container'>

                <form onSubmit={handleForm}>
                    <h2 className='label_title'>Title:</h2>
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

                    <h2 className='label_select'>Category:</h2>
                    <select className='category_select' onChange={(e) => setCategory(e.target.value)}>
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
                        onChange={(e) => {
                            setFiles(Array.from(e.target.files))
                        }

                        }
                        multiple={true}
                    />

                    <button className='button'>Send</button>
                    {error?.error && (
                        <p className="error">Se ha producido un error: {error.error}</p>

                    )}
                </form>
            </div>
        </div>
    )
}

export default EditDemand;