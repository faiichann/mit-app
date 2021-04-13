import React,{useState} from 'react'
import { useDrop } from 'react-dnd'

const Design = () => {
        const [boxes, setBoxes] = useState([]);
        const [{ canDrop, isOverCurrent }, drop] = useDrop({
          accept: 'tool',
          canDrop: () => true,
          drop: item => {
            if (isOverCurrent) {
              setBoxes([...boxes, item]);
            }
          },
          collect: monitor => ({
            canDrop: monitor.canDrop(),
            isOverCurrent: monitor.isOver({ shallow: true })
          })
        });
        return(
                <div className='container'>
                     {boxes.map(member => (
                     <div className="box">
                        {member.name}
                    </div>
                    ))}
                    <div className={`drop-area ${canDrop ? 'highlight': ''}`} ref={drop}>
                    <h1>Design App here!!!</h1>
                     </div>
                </div>
        )
    }
export default Design