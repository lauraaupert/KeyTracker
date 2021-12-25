import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import "./index.css";

const Cards = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  function onClick(e) {
    e.preventDefault();
    navigator.clipboard.writeText(props.code);
    setShow(!show);
    setTimeout(() => {
      setShow(show);
    }, 2000);
  }

  return (
    <Card onClick={onClick} ref={target}>
      <Overlay
        // style={{ backgroundColor: "yellow" }}
        target={target.current}
        show={show}
        placement="right"
      >
        {(props) => (
          <Tooltip id="copy" {...props}>
            Copied!
          </Tooltip>
        )}
      </Overlay>
      <Card.Header>{props.label}</Card.Header>
      <Card.Title>{props.code}</Card.Title>
    </Card>
  );
};

export default Cards;
