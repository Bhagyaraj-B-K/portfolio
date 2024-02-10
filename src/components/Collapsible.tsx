import { useState } from 'react';
import { useCollapse } from 'react-collapsed';

interface CollapsibleProps {
  title: string,
  content: React.ReactNode,
  classNames?: string 
}

function Collapsible(props: CollapsibleProps) {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
function handleOnClick() {
        setExpanded(!isExpanded);
    }
return (
        <div className={`collapsible ${props.classNames}`}>
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                <span>{`${isExpanded?'-':'+'} ${props.title}`}</span>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                  {props.content}
                </div>
            </div>
        </div>
    );
}

export default Collapsible;