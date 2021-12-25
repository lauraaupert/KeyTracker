import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const FontButton = ({ setFont }) => {
  const [counter, setCounter] = useState(0);
  const options = ["fun", "serious"];

  const [buttonOptions, setButtonOptions] = useState(options[counter]);

  function onClick(e) {
    e.preventDefault();
    if (counter === options.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
    setButtonOptions(options[counter]);
    setFont(buttonOptions);
    e.target.blur();
  }

  return <Button onClick={onClick}>{buttonOptions}</Button>;
};

export default FontButton;
