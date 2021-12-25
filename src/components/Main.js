import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "./Cards";
import Selected from "./Selected";
import FontButton from "./FontButton";
import ThemeButton from "./ThemeButton";
import StartContainer from "./StartContainer";

const Main = (props) => {
  const [currentKey, setCurrentKey] = useState({});

  function logKey(e) {
    setCurrentKey({
      code: e.code,
      key: e.key,
      keyCode: e.keyCode,
    });
  }
  document.onkeydown = logKey;

  return (
    <div className="main-container">
      {!currentKey.code ? (
        <StartContainer />
      ) : (
        <>
          <Row className="selected-row">
            <Selected currentKey={currentKey} />
          </Row>
          <Row className="card-row gx-3">
            {Object.keys(currentKey).map((key, index) => {
              let value = currentKey[key];
              //   if (
              //     document.getElementById("selected").textContent !== value.toString()
              //   ) {
              return (
                <Col className="card-column " key={index}>
                  <Cards label={key} code={value} />
                </Col>
              );
              //   }
            })}
          </Row>
          <div className="button-div">
            <FontButton setFont={props.setFont} />
            <ThemeButton theme={props.theme} setTheme={props.setTheme} />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
