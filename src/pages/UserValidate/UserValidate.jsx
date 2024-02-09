import { useParams } from "react-router-dom";
import { useUserActions } from "../../hooks/api"
import { useState } from "react"



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
    <div>
      {success && <h2 style={{color:"blue", fontSize:"2em"}}>
        Te has registrado en Ineedup, ¿por que no haces to primera demanda para celebrarlo?
      </h2>
      }

      {error && <p>
        Codigo de registracion no valido
      </p>}


    </div>
  )
}

export default UserValidate;