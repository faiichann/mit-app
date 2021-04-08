
import HDragDrop from './HDragDrop';
import React, {useState, useEffect} from 'react'
import './StyleHorizontal.css';

const defaultData = [
    {title: 'group 1', items: ['1', '2', '3']},
    {title: 'group 2', items: ['4', '5', '6']}
  ]
  
  function Horizontal() {
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
      <div className="Horizontal">
        <header className="Horizontal-header">
        <HDragDrop data={data} />
       
        </header>
      </div>
    );
  }
  
  export default Horizontal;
