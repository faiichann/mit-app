import React from 'react';
import { useDrag } from 'react-dnd';
import { Row} from 'react-bootstrap';
import AddCircleIcon from '@material-ui/icons/AddCircle'

const TOOL = 'tool';

const listItems = [
  {
    name: 'Button'
  },
  {
    name: 'Checkbox'
  },
  {
    name: 'Image'
  },
  {
    name: 'Label'
  }
  ,
  {
    name: 'Textbox'
  }
]

const Tool = ({ name }) => {
  const [, drag] = useDrag({
    item: {
      type: TOOL,
      name
    }
  });
  console.log(name)
  return (
    <div className="tool" ref={drag}>
      {name}
    </div>
  );
}

const ListTools = () => {
  return (
    <div className="tool-wrapper">
      {listItems.map(item => (
        <Row>
          < AddCircleIcon />
          <Tool name={item.name} />
        </Row>
      ))}
    </div>
    
  );
}

export default ListTools;