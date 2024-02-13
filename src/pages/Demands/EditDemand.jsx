import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUserActions,useDemand,useAllCategories } from "../../hooks/api";




const EditDemand = () => {
    const { id } = useParams()
    const demandData = useDemand(id);
    const demand = demandData.data;
    const categoriesResponse = useAllCategories();
    
    const [categories] = useState(categoriesResponse.data);
    const [title, setTitle] = useState(demand.title)
    const [description, setDescription] = useState(demand.description)
    const [category, setCategory] = useState(demand.category_id)
    const [files, setFiles] = useState()
    const [error, setError] = useState()
    const { editDemand } = useUserActions()
    const navigate = useNavigate()

    const handleForm = async (e) => {
        e.preventDefault();

        const fd = new FormData()
        fd.append('title', title)
        fd.append('description', description)
        fd.append('category_id', category)
        if (files) {
            files.forEach(f => {
                fd.append('files', f)
            })
        }

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
        <div className="general-container">

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
                    <select className='category_select' value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map(c => ( 
                        <option key={c.id} value={c.id}>{c.value}</option>
                    ))}
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