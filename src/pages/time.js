import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const One = dynamic(import('../components/pika'))

function Time() {
  const [nowTime, setTime] = useState(Date.now())

  const changeTime = async () => {
    const moment = await import('moment')

    setTime(moment.default(Date.now()).format())
  }

  return (
    <div>
      <div>显示时间为:{nowTime} </div>
      <One />
      <div>
        <button onClick={changeTime}>改变时间格式</button>
      </div>
    </div>
  )
}

export default Time
