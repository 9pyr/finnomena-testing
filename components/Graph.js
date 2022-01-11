import styles from 'styles/Graph.module.scss'

import React from 'react'
import { Area } from '@ant-design/plots'

const Graph = ({ data = [] }) => {
  return (
    <div className={styles.graph_styled}>
      <Area
        renderer='svg'
        height={200}
        autoFit={false}
        data={data}
        xField={'thailand_fund_code'}
        yField={'nav_return'}
        xAxis={{ label: null, line: null }}
        yAxis={{ label: null, grid: null }}
        tooltip={{ customContent }}
        smooth={true}
        areaStyle={() => ({
          fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
        })}
      />
    </div>
  )
}

export default Graph

export const customContent = (title, data) => {
  const { value } = data?.[0] || {}
  return (
    <div className={styles.tooltip_custom}>
      <div>
        ชื่อกองทุน: <span className={styles.title}>{title}</span>
      </div>
      <div>
        ผลตอบแทน: <span className={styles.text_highlight}>{value}</span>
      </div>
    </div>
  )
}
