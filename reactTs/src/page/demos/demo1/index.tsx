import { useState } from "react";
import { RenderDemo1 } from "./common";

const Demo1 = () => {

  const [ showRenderDemo1, setShowRenderDemo1 ] = useState(false);

  return (
    <div>
      <button onClick={() => setShowRenderDemo1(!showRenderDemo1)}>Toggle RenderDemo1</button>
      {
        showRenderDemo1 && RenderDemo1('N')
      }
    </div>
  );
};

export default Demo1;
