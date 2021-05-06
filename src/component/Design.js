import React,{useState} from 'react'
import { useDrop } from 'react-dnd'
import styled from 'styled-components'
import { Container} from 'react-bootstrap'
import img from 'C:\\Users\\win10\\Documents\\faiichannDev\\mit-app\\src\\phone.png'
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
    width: 60%;
    height: 80%;
  `
// function generateShapes() {
//   return [...Array(10)].map((_, i) => ({
//     id: i.toString(),
//     x: Math.random() * window.innerWidth,
//     y: Math.random() * window.innerHeight,
//     rotation: Math.random() * 180,
//     isDragging: false,
//   }));
// }
// const INITIAL_STATE = generateShapes();

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
             // const [stars, setStars] = React.useState(INITIAL_STATE);

        // const handleDragStart = (e) => {
        //   const id = e.target.id();
        //   setStars(
        //     stars.map((star) => {
        //       return {
        //         ...star,
        //         isDragging: star.id === id,
        //       };
        //     })
        //   );
        // };
        // const handleDragEnd = (e) => {
        //   setStars(
        //     stars.map((star) => {
        //       return {
        //         ...star,
        //         isDragging: false,
        //       };
        //     })
        //   );
        // };
        return(
                <DesignCon className={`drop-area ${canDrop ? 'highlight': ''}`} ref={drop}>
                  <div>
                     {boxes.map(member => (
                     <div className="box">
                        {member.name}
                        <Label/>
                    </div>
                    ))}     
                     </div>
                     {/* <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {stars.map((star) => (
          <Star
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            fill="#89b717"
            opacity={0.8}
            draggable
            rotation={star.rotation}
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            scaleX={star.isDragging ? 1.2 : 1}
            scaleY={star.isDragging ? 1.2 : 1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </Layer>
    </Stage> */}
                </DesignCon>
        )
    }
export default Design