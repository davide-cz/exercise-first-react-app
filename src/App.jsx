import Paragrafo from "./components/Paragrafo"
import Figure from "./components/Figure"
import Titolo from "./components/Titolo"


const App=()=>{
  return(

  <div>
    <Titolo text1='Citazione di freak' />
    <Figure src="https://www.doppiozero.com/sites/default/files/3_25.jpg"/>
    <Paragrafo text="Si dice che una volta toccato il fondo non puoi che risalire. A me capita di cominciare a scavare."/>
  </div>
  )
}
export default App
