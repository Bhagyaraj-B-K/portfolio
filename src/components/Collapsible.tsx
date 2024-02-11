import { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import './Collapsible.css'
import { VscCollapseAll, VscExpandAll } from "react-icons/vsc";

interface CollapsibleProps {
  title: string,
  icon?:React.ReactNode,
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
        <div className={`collapsible ${isExpanded? 'expanded' : 'collapsed'} ${props.classNames}`}>
            <div className="header col-md-12 d-flex justify-content-between align-items-center" {...getToggleProps({onClick: handleOnClick})}>
                {props.icon}<span className='col-md-8 text-center'>{props.title}</span>{isExpanded?<VscCollapseAll className='col-md-2 text-right' />:<VscExpandAll className='col-md-2 text-right'/>}
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