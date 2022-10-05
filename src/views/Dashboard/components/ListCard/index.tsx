import { FC, useEffect } from 'react'
interface ListCardProps {
  name?: string;
  list: Array<ListItem>,
}
export interface ListItem {
  type: String,
  name: String,
  date: String
}
const ListCard: FC<ListCardProps> = (props: ListCardProps) => {
  const { name, list, } = props

  useEffect(() => {
    console.log('子组件更新')
  }, [list])
  return (
    <div className='ListCard'>
      <div className='top'>
        <div className='name'>
          {name || '列表'}
        </div>
      </div>
      <div className='bottom'>
        {list.map((item, index) => {
          return (
            <div className='listItem' key={index}>
              <span>{item.type}</span>
              <span>{item.name}</span>
              <span>{item.date}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListCard
