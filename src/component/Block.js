import React,{Component}  from 'react'
import { useContext, useState, Ref } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


const ref = React.createRef();
const Catty = React.forwardRef((props, ref) => (
	<img src="https://static.greatbigcanvas.com/images/square/getty-images/cat-cleaning-paw-close-up,1084976.jpg?max=100" alt="catty" ref={ref} />
));
const Puppy = React.forwardRef((props, ref) => (
	<p ref={ref}>
		<span role="img" aria-label="puppy">
			🐶
		</span>
	</p>
));
const ComplexContainer = React.forwardRef(({ children }, ref) => (
	<div ref={ref}>
		<p>Start</p>
		<div className="flex-row">
			<span>&gt;</span>
			{children}
			<span>&lt;</span>
		</div>
		<p>End</p>
	</div>
));

const TOOLS = {
	children: [
		{
			name: 'first p',
			item: 'p',
			children: ['Hi there'],
			source: true,
			type: 'main',
		},
		{ item: Catty, source: true, type: 'image' },
		{ item: Puppy, source: true, type: 'puppy', props: { style: { backgroundColor: 'yellow' } } },
		{ item: ComplexContainer, type: 'complex', accepts: ['image', 'puppy'], source: true, children: [], acceptsNewChildren: true },
		{
			item: 'span',
			children: ['Bye'],
			source: true,
			type: 'main',
			props: {
				style: { color: 'white', backgroundColor: 'black' },
			},
		},
	],
};

const DEFAULT = {
	name: 'root',
	acceptsNewChildren: true,
	accepts: ['main', 'image', 'puppy', 'complex'],
	children: [
		{
			name: 'red div',
			item: 'div',
			acceptsNewChildren: true,
			accepts: ['puppy', 'complex'],
			children: [
				{
					item: 'span',
					children: ['Bye'],
					type: 'main',
					props: {
						style: { color: 'white', backgroundColor: 'black' },
					},
				},
			],
			props: {
				style: { backgroundColor: 'red' },
			},
		},
		{
			name: 'green div',
			item: 'div',
			acceptsNewChildren: true,
			accepts: ['main', 'image', 'puppy', 'complex'],
			children: [
				{
					item: 'span',
					children: ['Bye'],
					type: 'main',
					props: {
						style: { color: 'white', backgroundColor: 'black' },
					},
				},
			],
			props: {
				style: { backgroundColor: 'green' },
			},
		},
		{
			name: 'blue div',
			item: 'div',
			acceptsNewChildren: true,
			accepts: ['main', 'puppy', 'complex'],
			children: [
				{
					item: 'span',
					children: ['Bye'],
					type: 'main',
					props: {
						style: { color: 'white', backgroundColor: 'black' },
					},
				},
			],
			props: {
				style: { backgroundColor: 'blue' },
			},
		},
	],
};

const DataContext = React.createContext({ items: DEFAULT, setItems: items => {} });

function moveChild(fromObject, child, toObject) {
	if (!fromObject.children) return fromObject;
	return {
		...fromObject,
		children: [
			...fromObject.children.filter(objChild => objChild !== child).map(objChild => moveChild(objChild, child, toObject)),
			...(fromObject === toObject ? [child] : []),
		],
	};
}

const DragContainer = ({ children, info }) => {
	const context = useContext(DataContext);
	const [{ hovering, shallowHovering }, drop] = useDrop({
		accept: info.accepts || 'item',
		drop: (item, monitor) => {
			if (monitor.isOver({ shallow: true })) {
				const itemInfo = monitor.getItem().info;
				console.log({ to: info, which: itemInfo });
				if (info.children === itemInfo || info.children.filter(c => c === itemInfo).length > 0) return;
				if (itemInfo.source) {
					context.setItems(moveChild(context.items, { ...itemInfo, source: false }, info));
				} else {
					context.setItems(moveChild(context.items, itemInfo, info));
				}
			}
		},
		collect: monitor => ({
			hovering: !!monitor.isOver({ shallow: false }),
			shallowHovering: !!monitor.isOver({ shallow: true }),
		}),
	});
	return (
		<div ref={drop} className={hovering ? (shallowHovering ? 'drag-container-shallow-hover' : 'drag-container-hover') : 'drag-container'}>
			{children}
		</div>
	);
};

const Item = ({ info, toolbar }) => {
	const { item: ItemType = null, children = null, props = null, acceptsNewChildren = false } = info || {};
	const itemChildren = Array.isArray(children)
		? children.map((child, index) => (typeof child === 'string' ? child : <Item key={index} info={child} toolbar={toolbar} />))
		: children;

	const [, drag] = useDrag({
		item: { type: info.type || 'item', info },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
		begin: () => {
			console.log('dragging', info);
		},
	});

	if (ItemType == null) {
		return toolbar ? <div>{itemChildren}</div> : <DragContainer info={info}>{itemChildren}</DragContainer>;
	}

	const Parent = acceptsNewChildren && !toolbar ? ({ children }) => <DragContainer info={info}>{children}</DragContainer> : React.Fragment;
	return (
		<Parent>
			<ItemType ref={drag} {...props || {}} toolbar={toolbar}>
				{itemChildren}
			</ItemType>
		</Parent>
	);
};
function Block() {
	const startItems = useContext(DataContext);
	const [items, setItems] = useState(startItems.items);

	return (
		<div className="App">
			<DataContext.Provider value={{ items, setItems }}>
				<DndProvider backend={HTML5Backend}>
					<div className="flex-row">
						<div className="toolbar">
							<h3>Items:</h3>
							<Item info={TOOLS} toolbar={true} />
						</div>
						<Item info={items} toolbar={false} />
					</div>
				</DndProvider>
			</DataContext.Provider>
		</div>
	);
}
// class Block extends Component {
//     render(){
        
//         return(
//             <div>
//                 <h1>Coding Function here!!!</h1>
//             </div>
//         )
//     }
// }
export default Block