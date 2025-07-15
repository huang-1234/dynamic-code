import { Button } from "antd";
import React, { useRef, useState } from "react";

export const useDemoRef = () => {
  const a = {
    name: "huangsq",
  };
  const bRef = useRef({
    age: 18,
  });

  const [cState, setCState] = useState({
    height: 180,
  })
  return {
    node: (
      <div>
        <title>useDemoRef</title>
        <Button
          onClick={() => {
            a.name = "huangsq25";
          }}
        >
          change a
        </Button>
        <section>{a.name}</section>

        <Button
          onClick={() => {
            bRef.current.age = 25;
          }}
        >
          change bRef
        </Button>
        <section>{bRef.current.age}</section>
        <Button
          onClick={() => {
            setCState({
              height: 190,
            })
          }}
        >
          change bRef
        </Button>
        <section>{cState.height}</section>
      </div>
    ),
  };
};


export const RefAppDemo = () => {
  const { node } = useDemoRef();

  return (
    <div>
      <h2>useRef示例</h2>
      {node}
    </div>
  );
}