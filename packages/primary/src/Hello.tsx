import * as React from "react";

interface HelloProps {
  name: string;
}

const Hello = (props: HelloProps) => <p>Hello {props.name}</p>;

export default Hello;
