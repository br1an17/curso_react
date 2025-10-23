export const Boton = ({ texto, color }) => {
    const saludar = () => {
        alert("Hola, has hecho click en el botón");
    }
    
    
    return (
        <>
      <button style={{ backgroundColor: color }} onClick={saludar}>{texto}</button>   
        
        </>
        
        )}