import { useParams } from "react-router-dom";
import { useUserActions } from "../../hooks/api"
import { useState } from "react"
import { Link } from "react-router-dom";
import './UserValidate.css'


const UserValidate = () => {

  const { registrationcode } = useParams()
  const [success, setSuccess] = useState();
  const { validate } = useUserActions(registrationcode);
  const [error, setError] = useState(false);



  const handleValidation = async () => {
    const response = await validate(registrationcode)

    if (response.status === 200) {
      setSuccess(true)
    } else {
      setError(true)
    }

  }

  handleValidation()

  return (
    <div className="output_body">
      <div className="output">
      {success && <h2 className="success">
        You have successfully registered to iNeedUp, why not creating your <Link to="/demands">first demand</Link> to celebrate it?
      </h2>
      }
      {error && <h2 className="failure">
        Invalid registration code!
      </h2>}
      </div>
    </div>
  )
}

export default UserValidate;