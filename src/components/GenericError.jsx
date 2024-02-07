import './Error.css'
const GenericError = () => {
  const reload = () => window.location.reload()
  return (
    <div className="error_container">
      <div className='error_content'>
        <h1 className='error_title'>Something's gone wrong!</h1>
        <p>Oops, this is embarrassing. The page has failed.</p>
        <p>Why don't you try <a className='reload' onClick={reload}>reload</a>?</p>
        <img src='src\assets\images\error_animation.gif'/>
      </div>
    </div>
  )
}

export default GenericError
