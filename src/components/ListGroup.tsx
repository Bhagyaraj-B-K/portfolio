interface ListItemProps {
  name: string,
  style?: React.CSSProperties,
  className?: string,
  onClick?: VoidFunction
}

interface ListGroupProps {
  items: Array<ListItemProps>
}

function ListGroup(props: ListGroupProps) {
  let items = props.items;
  return (
    <>
      <ul className="list-group dark">
         {items.map(item => <li key={item.name} className={`list-group-item ${item.className}`} style={item.style} onClick={item.onClick}>{item.name}</li>)}
      </ul>
    </>
  )
}

export default ListGroup