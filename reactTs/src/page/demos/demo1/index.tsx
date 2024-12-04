import { useState } from "react";
import { RenderDemo1 } from "./common";

const Demo1 = () => {

  const [ showRenderDemo1, setShowRenderDemo1 ] = useState(false);
  const [ showRenderDemo2, setShowRenderDemo2 ] = useState(false);

  return (
    <div>
      <button onClick={() => setShowRenderDemo1(!showRenderDemo1)}>Toggle RenderDemo1</button>
      {
        RenderDemo1('N', showRenderDemo1)
      }
       <button onClick={() => setShowRenderDemo2(!showRenderDemo2)}>Toggle RenderDemo1</button>
      {
        RenderDemo1('M', showRenderDemo2)
      }
    </div>
  );
};

export default Demo1;
