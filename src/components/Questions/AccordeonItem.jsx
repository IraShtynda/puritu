import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export const AccordeonItem = (props) => {
  const {title, content} = props;
  const [active, setActive] = useState(false);

  return (
    <div className="border-b border-base-trand-color pb-4 pt-3">
      <div className="flex justify-between text-2xl font-bold">
        <h5 className="text-trand-color">{title}</h5>
        <button 
          onClick={() => setActive(!active)}
          className="text-base-trand-color hover:text-dark-color"
        >
            <FontAwesomeIcon icon={active ? faMinus : faPlus} /> 
        </button>
      </div>
      {active && (<p className="text-base-trand-color pr-5">{content}</p>)}
    </div>
  )
}