import { useState,useMemo } from "react";

//函数防抖,n ms后触发回调事件，如果在这n ms内重新触发，则重新开始计算时间
export function debounce(fn, time) {
  let timer = null;
  return function(...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, time);
  };
}

function useDebounce(defauleValue,time){
  const [ value , changeValue ] = useState(defauleValue)
  /* 对 changeValue 做防抖处理   */
  const newChange = useMemo(()=> debounce(changeValue,time) ,[ time ])
  return [ value , newChange ]
}

export default  useDebounce