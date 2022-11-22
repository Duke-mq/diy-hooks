
import useDebounce from "./useDebouce" 
export default function Index(){
  const [ value , setValue ] = useDebounce('',300)
  console.log(value)
  return <div style={{ marginTop:'50px' }} >
      测试防抖
      <input placeholder="" onChange={(e)=>setValue(e.target.value)}  />
  </div>
}