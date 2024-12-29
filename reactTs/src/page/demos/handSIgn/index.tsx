/** 手写签名组件 */
import { useEffect, useRef, useState } from 'react';
import Sketchpad from './sketchpad';

const HandSIgn = () => {

  const sketchpadRef = useRef<any>(null);

  const [data, setData] = useState<string>("");

    /** 拿数据绘制画板数据 */
    const drawSignaturePadData = () => {
      sketchpadRef?.current?.clear(); // 绘制数据前先清空画板
      sketchpadRef?.current?.fromDataURL(data);
    }
  
    /** 获取当前画板数据并更新 */
    const getSignaturePadData =  () => {
      const data = sketchpadRef?.current?.toDataURL();
      setData(data);
      console.log("🚀 ~ getSignaturePadData ~ data:", data)
    }
  
    // 清空逻辑
    const handleClear = () => {
      sketchpadRef?.current?.clear();
    }

  // 初始化
  useEffect(() => {

  }, []);

  return (
    <div>
      <Sketchpad ref={sketchpadRef} width={500} height={500}/>
      <button onClick={drawSignaturePadData}>绘制画板数据</button>
      <button onClick={getSignaturePadData}>获取画板数据</button>
      <button onClick={handleClear}>清空画板</button>
    </div>
  );
};

export default HandSIgn;