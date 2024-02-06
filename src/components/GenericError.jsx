import './Error.css'
const GenericError = () => {
  const reload = () => window.location.reload()
  return (
    <div className="error_container">
      <div className='error_content'>
        <h1 className='error_title'>¡Algo ha salido mal!</h1>
        <p>Vaya, esto es embarazoso. La página ha fallado.</p>
        <p>¿Por qué no pruebas a <a className='reload' onClick={reload}>recargar</a>?</p>
        <img src='src\assets\images\error_animation.gif'/>
      </div>
    </div>
  )
}

export default GenericError
