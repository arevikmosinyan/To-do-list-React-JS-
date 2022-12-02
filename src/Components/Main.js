import React, { useEffect } from "react";

function Main(props) {
  const { onEmailChange } = props;
  useEffect(() => {
    alert("onEmailChange was changed");
  }, [onEmailChange]);
  return <div>Hello</div>;
}

export default Main;
