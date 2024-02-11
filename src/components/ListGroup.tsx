import './ListGroup.css'

interface ListItemProps {
  name: string,
  style?: React.CSSProperties,
  className?: string,
  onClick?: VoidFunction
}

interface ListGroupProps {
  items: Array<ListItemProps>,
  className?: string,
  style?: React.CSSProperties
}

function ListGroup(props: ListGroupProps) {
  let items = props.items;
  return (
    <>
      <ul className={`list-group ${props.className}`} style={props.style}>
          { items.length ?
            (items.map(item => <li key={item.name} className={`list-group-item ${item.className}`} style={item.style} onClick={item.onClick}>{item.name}</li>))
            : <li className={`list-group-item text-center warning`} style={{fontSize: 'small'}}>No Content</li>
          }
      </ul>
    </>
  )
}

export default ListGroup