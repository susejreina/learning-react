import Button from "./Button";

const arr = [
  'chacnhito feliz',
  'chanchito triste',
  'chanchito emocionado',
]

const App = () =>{
  const miVariable = false;
  if(miVariable) {
    return <p>Mi variable dio true!</p>
  }
  return(
    <div>
      <h1 onClick={(e) => console.log('clickeado',e)}>Hola mundo</h1>
      {arr.map((el)=><p key={el}>{el}</p>)}
      <Button onClick={() => console.log('clickeado')}>
        Enviar
      </Button>
    </div>
  )
}
export default App;