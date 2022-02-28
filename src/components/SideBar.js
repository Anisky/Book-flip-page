import React from 'react'
import './SideBar.css'





export const SideBar = ({pageClick}) => {
  const onPageClick=(e)=>{
      e.preventDefault();
      pageClick(e.target.id);

        
  }
  return (     
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar-container" style={{width: "280px"}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a id='1' href="#" className="nav-link active" aria-current="page" onClick={onPageClick}>
                    Page one
                </a>
            </li>
            <li>
                <a id='2' href="#" className="nav-link text-white"onClick={onPageClick}>
                    page two
                </a>
            </li>
            <li>
                <a id='3' href="#" className="nav-link text-white" onClick={onPageClick}>
                    page three
                </a>
            </li>
            <li>
                <a id='4' href="#" className="nav-link text-white" onClick={onPageClick}>
                    page four
                </a>
            </li>
            <li>
                <a id='5' href="#" className="nav-link text-white" onClick={onPageClick}>

                    page five
                
                </a>
            </li>
        </ul>


    </div>
  
  )
}
