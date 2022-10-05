import { FC, useState } from "react";
import './index.scss'
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import { useDispatch } from "react-redux";
const Index: FC = () => {
  const [showCss, setShowCss] = useState(true)
  const [showSwitch, setShowSwitch] = useState(true)
  const [list, setList] = useState(['zx', '111', '6666'])
  const dispacth = useDispatch()
  const addName = () => {
    console.log('adddd');
    setList([...list, '1231231231'])
  }

  const storeAdd = () => {
    dispacth(
      {
        type: 'counter/increment'
      }
    )
    console.log();

  }
  return (
    <div style={{ height: '100%' }}>
      <div className="cssContainer">
        <button onClick={() => setShowCss(!showCss)}>cssTansition</button>
        <CSSTransition in={showCss} timeout={500} unmountOnExit classNames={'show'}>
          <div className="contentCss" >
            contentCss
          </div>
        </CSSTransition>

      </div>

      <div className="switchContainer">
        <button onClick={() => setShowSwitch(!showSwitch)}>switchTansition</button>
        <SwitchTransition mode="out-in">
          <CSSTransition key={showSwitch ? 'on' : 'off'} timeout={500} classNames="btn">
            <div className="contentSwitch" >
              contentSwicth
            </div>
          </CSSTransition>
        </SwitchTransition>

      </div>

      <div className="TransitionGroup">
        <button onClick={addName}>add</button>
        <TransitionGroup>
          {
            list.map((item, index) => {
              return (
                <CSSTransition classNames={'friend'} timeout={300} key={index}>
                  <div>
                    {item}
                  </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={storeAdd}>store+1</button>
      </div>
    </div>
  )
}

export default Index

