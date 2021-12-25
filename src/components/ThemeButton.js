import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const ThemeButton = (props) => {
  const [buttonOptions, setButtonOptions] = useState("Light Theme");

  function onClick(e) {
    e.preventDefault();
    if (props.theme === "dark") {
      props.setTheme("light");
      setButtonOptions("Dark Theme");
    } else {
      props.setTheme("dark");
      setButtonOptions("Light Theme");
    }
    e.target.blur();
  }

  return <Button onClick={onClick}>{buttonOptions}</Button>;
};

export default ThemeButton;
