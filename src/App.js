import React, {useEffect, useLayoutEffect, useState} from "react";

export default function App() {
  console.log("initialize APP");
  const [count, setCount] = useState(0);
  const [topStyle, setTopStyle] = useState({});

  const heavyProcess = () => {
    const random = Math.floor(Math.random() * 100);

    for (let i = 0; i <= 900000000; i++) {
      if (i === 900000000) setTopStyle({paddingTop: `${random}px`});
    }
  };

  useLayoutEffect(() => {
    console.log("useLayoutEffect");

    return () => {
      console.log("release useLayoutEffect");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect");

    return () => {
      console.log("release useEffect");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("count changed on useLayoutEffect");

    heavyProcess();

    return () => {
      console.log("release count changed on useLayoutEffect");
    };
  }, [count]);

  //   useEffect(() => {
  //     console.log("useEffect");

  //     heavyProcess();

  //     return () => {
  //       console.log("release useEffect");
  //     };
  //   }, [count]);

  console.log("render");

  return (
    <div style={topStyle}>
      <h1>Hello Pyler! {`${count}`}</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
      >{`count : ${count}`}</button>
    </div>
  );
}
