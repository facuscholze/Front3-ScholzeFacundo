import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  const [error, setError] = useState(false);
  const [usuarios,setUsuarios]=useState([])
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [colorFav, setColorFav] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if( nombre.trim().length < 3 || apellido.trim().length < 6) {
      alert("datos incorrectos")
      setError(true);
    }else{
    addUsuarios()
    resetForm()
    setError(false);
   }
  }

  function addUsuarios() {
    setUsuarios([...usuarios,{nombre,apellido,colorFav}]);
}

function resetForm() {
  setNombre("");
  setApellido("");
  setColorFav("");
}

  return (
    <>
      <h1>Registro usuarios Color</h1>
      <form onSubmit={handleSubmit}>
        <label >Nombre:<input type="text" id="nombre" value={nombre} placeholder="Ingrese su nombre" onChange={(e)=>setNombre(e.target.value)} /></label>
        <label >Apellido:<input type="text" id="apellido" value={apellido} placeholder="Ingrese su apellido" onChange={(e)=>setApellido(e.target.value)} /></label>
        <label >Color Favorito<input type="text" id="colorFav" value={colorFav} placeholder="Ingrese su color favorito" onChange={(e)=>setColorFav(e.target.value)} /></label>
        <button type="submit">Registrar Usuario Color</button>
        {error && <div className="mensajeError">Por favor, chequea que la información sea correcta.</div>}
      </form>
      <div>
        {usuarios.map((usuario,index) => (
          <Card key={index} index={index} nombre={usuario.nombre} apellido={usuario.apellido} colorFav={usuario.colorFav} />
        ))}
      </div>
    </>
  )
}

export default App
