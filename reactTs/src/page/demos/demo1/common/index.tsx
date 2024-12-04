import { useEffect } from "react";

export const RenderDemo1 = (nn: string, showRenderDemo1: boolean) => {
  useEffect(() => {
    console.log("useDemo");
  }, []);

  return <div>{showRenderDemo1 && `我是RenderDemo1${nn}`}</div>;
};
