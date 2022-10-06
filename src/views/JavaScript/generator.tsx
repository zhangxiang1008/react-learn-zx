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

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('failed')
      // resolve('success')
    }, 2000)
  })

  const testReject = () => {
    promise1.then(res => console.log(res)
    ).catch(err => console.log('error:' + err))
  }
  // 测试 return 返回值 === resolve
  const testReturn = () => {
    // promise1.then(res => ({ code: 200, num: 1 })).then(res => console.log(res))
    promise1.then(res => {
      return new Promise((resolve, reject) => {
        resolve({ code: 201, num: 1 })
        reject({ code: 404, num: 1 })
      })
    }).then(res => console.log(res)).catch(error => console.log('error' + error)
    ).finally(() => console.log('finally.....'))
  }
  return (
    <>
      <h1> generator </h1>
      <button className={styles.btn1} onClick={() => scheduler(someTask(1))}>测试generator</button>
      <button onClick={testReject}>reject</button>
      <button onClick={testReturn}>return === promise</button>
    </>
  )
}

export default Index