import React, { ReactNode, FC, useEffect } from 'react'
import './index.scss'
interface MediumCardProps {
  name: string;
  number: any;
  childNode: ReactNode
}
const MediumCard: FC<MediumCardProps> = (props: MediumCardProps) => {
  const { name, number, childNode } = props

  useEffect(() => {
    console.log('card组件刷新')
  }, [number])
  return (
    <div className='mediumCard'>
      <div className='top'>
        <div className='name'>
          {name}
        </div>
        <div className='number'>
          {number + ''}
        </div>
      </div>
      <div className='bottom'>
        {childNode}
      </div>
    </div>
  )
}

export default MediumCard
