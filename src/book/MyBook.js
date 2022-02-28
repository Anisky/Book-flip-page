import React, { useRef } from 'react'
import HTMLFlipBook from 'react-pageflip';
import './MyBook.css'
import pg1 from './page1.jpg' ;
import pg2 from './page2.jpg' ;
import pg3 from './page3.jpg' ;



export const MyBook = (props) => {

   
  return (
    <div className='book-container '>
      {/* <button onClick={() =>
                    props.childRef.current.pageFlip().turnToPage(3)}>Next page</button> */}

      <HTMLFlipBook size='stretch'
                    width={1000} 
                    height={1200} 
                    usePortrait={false} 
                    autoSize={true} 
                    mobileScrollSupport={true}
                    showCover={false}
                    ref={props.childRef}
                    >
            <div className="demoPage"><img src={pg1} alt ="page 1 "></img></div>
            <div className="demoPage"><img src={pg2} alt ="page 2 "></img></div>
            <div className="demoPage"><img src={pg3} alt ="page 3 "></img></div>
            <div className="demoPage"><img src={pg1} alt ="page 1 "></img></div>
        </HTMLFlipBook>

    </div>
        
    
  )
}

