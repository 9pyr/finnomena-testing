import styles from 'styles/DatePicker.module.scss'

import React from 'react'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker
const DatePick = ({ value, onChange }) => {
  return (
    <div className={styles.date_picker}>
      <RangePicker value={value} onChange={onChange} />
    </div>
  )
}

export default DatePick
