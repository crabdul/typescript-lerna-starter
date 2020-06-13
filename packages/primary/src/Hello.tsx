import * as React from "react";

interface Props {
  name: string;
}

const Hello = (props: Props) => <p>Hello {props.name}</p>;

export default Hello;
