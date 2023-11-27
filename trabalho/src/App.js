import './Votacao.css';
import Imagem from './img/batom1.png'
import Votacao from './componente/Votacao';
function App() {
    return (
        <div className="App">
            <Votacao />
            <img className='imagem' src={Imagem} />


        </div>
    );
}

export default App;