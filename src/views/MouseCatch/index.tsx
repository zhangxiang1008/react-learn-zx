import { FC, useState } from "react";
import './index.scss'
interface CatItem {
  mouse: any
}
const Cat: FC<CatItem> = (props: CatItem) => {
  const { mouse } = props
  return (
    <img src="../../assets/cat.jpg" alt="maomao" style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: 200, height: 100 }} />
  )
}
const MouseCatch: FC = () => {
  return (
    <div className="mouseCatch">
      <h1>移动鼠标</h1>
      <Mouse render={(mouse: any) => (
        <Cat mouse={mouse}></Cat>
      )} />
    </div >
  )
}
interface MouseItem {
  render: Function
}
const Mouse: FC<MouseItem> = (props: MouseItem) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  const handleMouseMove = (event: any) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })
  }
  return (
    <div style={{ height: '80vh' }} onMouseMove={handleMouseMove}>
      {props.render(position)}
    </div>
  )
}

export default MouseCatch