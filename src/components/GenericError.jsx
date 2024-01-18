const GenericError = () => {
  const reload = () => window.location.reload()
  return (
    <div>
      <h1>¡Algo ha salido mal!</h1>
      <p>Vaya, esto es embarazoso. La página ha fallado.</p>
      <p>¿Por qué no pruebas a <a onClick={reload}>recargar</a>?</p>
    </div>
  )
}

export default GenericError
