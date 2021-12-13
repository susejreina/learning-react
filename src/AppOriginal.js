import logo from './logo.svg';
//import './App.css';
import './main.css';

//Estilo con constante
const estiloCons = {
  backgroundColor: '#456',
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
}

const estilo2 = {
  boxShadow : '0 5px 3px rgba(0,0,0,0.5)'
}

//Estilo con arrow function
const estiloFn = (bg = '#456') => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
})

const Li = ({children}) => {
  return(
    <li style={{...estilo2, ...estiloFn()}} className="clase-li">{children}</li>
  )
}

function App() {
  return (
    <ul style={estiloFn('#567')} className="clase-css">
      <Li estado="feliz">Chanchito</Li>
    </ul>
  );
}

export default App;
