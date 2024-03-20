import { useState } from "react"
import { useUserActions } from "../../hooks/api"
const ResetPassword = () => {
  const [url] = useState(window.location.origin)
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const { resetPassword } = useUserActions()

  const handleEmail = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      url: url
    }
    const response = await resetPassword(body);
    if (response.data.status == "OK") {
      setEmail("");
      setSuccess(true);
    }



  }

  return (

    <div className="general-container">

      {success && <p className="success_message">Check your email to reset your password</p>}
      <form onSubmit={handleEmail} className="resetpass_container">

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

        <button type="submit" className="reset_pass">Reset Password</button>

      </form>

    </div>

  )
}

export default ResetPassword;