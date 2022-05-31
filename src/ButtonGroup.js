import { useState } from "react";

  /* 
    border: none;
    padding: 5px 15px;
    background: white
  */

    const ALT_STYLES = {
      border: 'none',
      padding: '5px 15px',
      background: '#745e5e',
    }

    const BUTTON_TEXT = [
      '$2k', '$5k', 'No Limit'
    ]

export default function ButtonGroup({updateValue}) {
    
  const [selectedButton, setSelectedButton] = useState(2);
  
  return (
      <div className="button-group">
            {
              BUTTON_TEXT.map((btnText, i) => (
                <button 
                  key={i}
                  onClick={() => {
                    setSelectedButton(i);
                    updateValue(btnText);
                  }}
                  style={selectedButton === i ? ALT_STYLES : {}}>{btnText}</button>
              ))}
        </div>
    );
  }
  