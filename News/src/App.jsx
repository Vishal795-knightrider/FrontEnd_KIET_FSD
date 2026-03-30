import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import News from './Components/News'
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter> 
      <Header/>
      <Footer/>
      <News/>
    </BrowserRouter>
  )
}

export default App
