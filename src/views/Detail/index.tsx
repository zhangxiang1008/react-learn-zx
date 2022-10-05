import React from 'react'
import { useParams } from 'react-router-dom'
export default function Index() {
  let params = useParams()
  return (
    <div>detail: {params.id}</div>
  )
}
