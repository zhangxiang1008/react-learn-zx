import './index.scss'
import { Card } from 'antd'
import MediumCard from './components/MediumCard'
import { useMemo, useState, useEffect } from 'react'
import ListCard from './components/ListCard'
import { ListItem } from './components/ListCard'
export default function Dashboard() {
  const [number, setNumber] = useState(1);
  const [total, setTotal] = useState(100);

  const [messageList, setMessageList] = useState<ListItem[]>([
    {
      type: 'info',
      name: '张祥',
      date: '2022-10-10'
    }
  ])
  useEffect(() => {
    console.log('父组件刷新')
  }, [])
  const handleClick = () => {
    setInterval(() => {
      setNumber(number + 1)
    }, 1000)
  }
  function* someTask(num: number) {
    try {
      yield num++
      yield num++
      yield num++
      return 4
    } catch (e) {
    }
  }
  function scheduler(task: any) {
    const taskObj = task.next(task.value);
    // 如果Generator函数未结束，就继续调用
    if (!taskObj.done) {
      task.value = taskObj.value
      scheduler(task);
    }
  }
  const handleSetList = () => {
    let temp = messageList
    temp.push({
      type: 'info',
      name: '张祥11',
      date: '2022-10-10'
    })
    setMessageList([...temp])
  }
  const childNode = (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <span>周同比</span>
        <span>{number}%</span>
      </div>
      <div>
        <span>周同比</span>
        <span>12%</span>
      </div>
    </div>
  )
  const ChildList = useMemo(() =>
    <ListCard list={messageList}></ListCard>
    , [number])
  return (
    <>
      <div className='main'>
        <Card>
          <div className='title'>
            欢迎来到主站  ! 微笑
          </div>
          <button onClick={() => scheduler(someTask(1))}>gennerator</button>
          <button onClick={handleClick}>testAdd</button>
          <button onClick={handleSetList}>list</button>
        </Card>
        <div className='content'>
          <div className='left'>
            <div className='cards'>
              <MediumCard name='总额' number={total} childNode={childNode}></MediumCard>
              <MediumCard name='总额' number={total} childNode={childNode}></MediumCard>
              <MediumCard name='总额' number={total} childNode={childNode}></MediumCard>
              <MediumCard name='总额' number={total} childNode={childNode}></MediumCard>
            </div>
          </div>
          <div className='right'>
            {ChildList}
            <ListCard list={messageList}></ListCard>
          </div>
        </div>
      </div>

    </>
  )
}
