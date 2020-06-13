declare module "primary";

import React from "react";

export interface HelloProps {
  name: string;
}

declare const Hello: React.SFC<HelloProps>;

export default Hello;
