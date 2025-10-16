import { useEffect, useState } from "react";

/** 父组件 */
const Demo2 = () => {
  return (
    <div>
      <h1>Demo2</h1>
      <Com1 />
    </div>
  );
};

export default Demo2;
/** 父组件 */

/** 子组件 */
const Com1 = () => {
  const [nn2, setNn2] = useState({ n: 1 });
  const handleClick2 = () => {
    setNn2({ n: 1 });
  };
  useEffect(() => {
    console.log(`useEffect触发，nn2是: ${nn2}`);
  }, [nn2]);

  return (
    <div>
      <button onClick={handleClick2}>改引用类型 {nn2.n}</button>
    </div>
  );
};
/** 子组件 */
