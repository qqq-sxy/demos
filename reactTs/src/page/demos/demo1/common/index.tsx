import { useEffect } from "react";

export const RenderDemo1 = (nn: string) => {
  useEffect(() => {
    console.log("useDemo");
  }, []);

  return <div>我是RenderDemo1{nn}</div>;
};
