import * as React from "react";
import { Hello } from "primary";
import { World } from "secondary";
import Foo from "@/components/Foo";

const App = () => (
  <div>
    <Hello name="Crab" />
    <World />
    <Foo />
  </div>
);

export default App;
