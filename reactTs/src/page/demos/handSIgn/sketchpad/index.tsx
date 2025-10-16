import { useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import SignaturePad from "signature_pad";
import "./index.less";

interface sketchpadProps {
  width?: number; // 画布宽度
  height?: number; // 画布高度
  disabled?: boolean; // 是否禁用
  config?: object; // 配置
}

// 初始化signaturePad配置
const initSignaturePadConfig = {
  backgroundColor: "rgb(255, 255, 255, 0)",
  penColor: "rgb(0, 0, 0)",
  velocityFilterWeight: 0.7,
  minWidth: 0.5,
  maxWidth: 2.5,
  throttle: 16,
  minDistance: 5,
};

const Sketchpad = (props: sketchpadProps, ref: any) => {
  const {
    width = 100,
    height = 100,
    disabled = false,
    config = {},
  } = props || {};

  const sketchPadRef = useRef<SignaturePad | null>(null);

  // 初始化
  useEffect(() => {
    const canvas = document.getElementById(
      "sketchpad-canvas",
    ) as HTMLCanvasElement;
    if (canvas) {
      sketchPadRef.current = new SignaturePad(canvas, {
        ...initSignaturePadConfig,
        ...config,
      });
    }
    if (disabled) {
      sketchPadRef.current?.off();
    }
  }, []);

  // 处理高 DPI 屏幕
  const resizeCanvas = () => {
    const canvas = document.getElementById(
      "sketchpad-canvas",
    ) as HTMLCanvasElement;
    if (!canvas) return;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
    sketchPadRef.current?.clear();
  };
  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // 获取绘制数据
  const toDataURL = () => {
    if (!sketchPadRef.current?.isEmpty()) {
      const base64Data = sketchPadRef.current?.toDataURL() || "";
      return base64Data;
    }
    return "";
  };

  // 根据数据绘制画板
  const fromDataURL = (dataUrl: string) => {
    sketchPadRef.current?.fromDataURL(dataUrl);
  };

  // 清除签名
  const clear = () => {
    sketchPadRef.current?.clear();
  };

  // 向外暴露方法
  useImperativeHandle(
    ref,
    () => ({
      toDataURL,
      fromDataURL,
      clear,
    }),
    [],
  );

  return (
    <div className="sketchpad">
      <canvas
        id="sketchpad-canvas"
        className={`sketchpad-canvas sketchpad-canvas--custom`}
        style={
          {
            "--canvas-width": `${width}px`,
            "--canvas-height": `${height}px`,
          } as React.CSSProperties
        }
      />
    </div>
  );
};

export default forwardRef(Sketchpad);
