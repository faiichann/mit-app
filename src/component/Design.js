import React,{useState} from 'react'
import { useDrop } from 'react-dnd'
import styled from 'styled-components'
import { Container} from 'react-bootstrap'
import img from 'C:\\Users\\win10\\Documents\\faiichannDev\\mit-app\\src\\phone.png'
import Text from './Label'
import Label from './Label'
// import { Stage, Layer, Star} from 'react-konva'

const DesignCon = styled(Container)`
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: 1em;
    padding-top: 1em;
    background: whitesmoke;
    background-image:  url(${img}) ;
    width: fit-content;
    width: 70%;
    height: 80%;
  `
const Design = (props) => {
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

        const [name, setname] = useState([]);
        const [colorPreview, setcolorPreview] = useState([]);
        const [size, setsize] = useState([]);
 
        return(
                <DesignCon className={`drop-area ${canDrop ? 'highlight': ''}`} ref={drop}>
                  <div>
                     {boxes.map(member => (
                     <div className="box">
                        {member.name}
                        <Label.Text />
                    </div>
                    ))}     
                     </div>
                </DesignCon>
        )
    }
export default Design