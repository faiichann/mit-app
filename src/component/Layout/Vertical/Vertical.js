
import VDragDrop from './VDragDrop';
import React, {useState, useEffect} from 'react'
import './StyleVertical.css';

const defaultData = [
    {title: 'group 1', items: ['1', '2', '3']},
    {title: 'group 2', items: ['4', '5', '6']}
  ]
  
  function Vertical() {
    const [data, setData] = useState();  
    useEffect(() => {
      if (localStorage.getItem('List')) {
        console.log(localStorage.getItem('List'))
        setData(JSON.parse(localStorage.getItem('List')))
      } else {
        setData(defaultData)
      }
    }, [setData])
    return (
      <div className="Vertical">
        <header className="Vertical-header">
        <VDragDrop data={data} />
       
        </header>
      </div>
    );
  }
  
  export default Vertical;
