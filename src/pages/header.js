import MyHeader from "./myHeader"
import { Button } from 'antd'

export default function Header() {
  return (
    <>
      <MyHeader></MyHeader>
      <div>这里是头部</div>
      <div><Button>我是按钮</Button></div>
    </>
  )
} 