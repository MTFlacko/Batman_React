import './App.css';
import Home from './page/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Contato from './page/contato/Contato';
import Fotos from './page/fotos/Fotos';
import Comentarios from './page/comentarios/comentarios';


function App() {
    return(
        <BrowserRouter>
            <Routes>
                 <Route path='/' element={<Home />}/>
                 <Route path='/Contato' element={<Contato />}/>
                 <Route path='/Fotos' element={<Fotos/>}/>
                 <Route path='/Comentarios' element={<Comentarios/>}/>

                 

            </Routes>
        </BrowserRouter>
    );
  
}

  export default App;
