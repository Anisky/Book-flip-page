import logo from './logo.svg';
import './App.css';
import { MyBook } from './book/MyBook';
import { SideBar } from './components/SideBar';
import React, { useEffect, useRef, useState } from 'react';

function App(props) {
  const [id, setId] = useState(1);

  const childRef = useRef();

  const changePage =(ref)=>{
     
     console.log()   
  }

  const pageClick =(id)=>{
    // setId(id);
    console.log(id);
    console.log(childRef.current)
    childRef.current.pageFlip().turnToPage(id);
  }
  useEffect(() => {
    

  
   
  }, [])
  
  
  
  return (
    <div className="App">
    <SideBar pageClick={pageClick} />
    <MyBook changePage={changePage} childRef ={childRef} />
    <p ref={childRef}> heelosolkdf</p>
    </div>
  );
}

export default App;
