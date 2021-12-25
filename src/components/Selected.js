import React, { useEffect, useState } from "react";

const Selected = (props) => {
  const [currentSelection, setCurrentSelection] = useState(
    props.currentKey.keyCode
  );

  useEffect(() => {
    setCurrentSelection(props.currentKey.keyCode);
  }, [props]);

  return (
    <div className="selected" id="selected">
      {currentSelection}
    </div>
  );
};

export default Selected;
