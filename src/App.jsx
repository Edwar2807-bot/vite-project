import './App.css'
import MyFirstComponent from './MyfirstApp'
import Events from './components/Events'
import Navbar from './components/Navbar'
import SignUpForms from './components/SignUpForms'
import {useState, useEffect} from 'react'

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  useEffect(()=>{
    console.log(searchTerm);
  },[searchTerm]);

  const handleNavBarSearch = (term) => {
      setSearchTerm(term);
  };
  
  return (
    <>
       <Navbar onSearch={handleNavBarSearch}/>
       <Events searchTerm ={searchTerm}/>
    </>
  )
}
export default App
