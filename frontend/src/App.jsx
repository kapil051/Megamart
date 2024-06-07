import './App.css'
import { All } from './components/All'
import { Mid1 } from './components/Mid1'
import {Navbar }from './components/Navbar'
import { Mid3 } from './components/Mid3'
import { Electronics } from './components/Electronics'



function App() {


  return (
    <>

      <Navbar></Navbar>
        <Mid1></Mid1>
        <Mid3></Mid3>
        <Electronics></Electronics>
  
      {/* <All></All> */}

    </>
  )
}

export default App
