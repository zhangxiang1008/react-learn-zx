import { FC } from 'react'
import styles from './index.module.scss'
const Index: FC = () => {
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
    console.log(taskObj.value)

    // 如果Generator函数未结束，就继续调用
    if (!taskObj.done) {
      console.log('------')
      task.value = taskObj.value
      scheduler(task);
    }
  }
  return (
    <>
      <h1> generator </h1>
      <button className={styles.btn1} onClick={() => scheduler(someTask(1))}>测试generator</button>
    </>
  )
}

export default Index