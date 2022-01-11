/* eslint-disable react-hooks/exhaustive-deps */
import styles from 'styles/Home.module.scss'

import Head from 'next/head'
import axios from 'axios'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

import { Graph, DatePick, Table } from 'components'

export default function Home(props) {
  const { data: initialData } = props

  const [data, setData] = useState(initialData)
  const [dataGraph, setDataGraph] = useState()
  const [value, setValue] = useState()

  const getTime = (value) => new Date(dayjs(value).format('YYYY MMM DD')).getTime()

  useEffect(() => {
    let index = 0
    const newItems = []

    for (const item of initialData) {
      if ((getTime(item.nav_date) >= getTime(value?.[0]) && getTime(item.nav_date) <= getTime(value?.[1])) || !value) {
        newItems.push({ ...item, nav_index: ++index })
      }
    }

    setData(newItems)
  }, [initialData.length, JSON.stringify(value)])

  return (
    <div className={styles.container}>
      <Head>
        <title>Finnomena Test</title>
      </Head>

      <div>
        <div className={styles.card}>
          <DatePick value={value} onChange={(val) => setValue(val)} />
          <Graph data={dataGraph || data} />
          <Table
            dataSource={data}
            onChange={(pagination, filters, sorter, extra) => {
              setDataGraph(extra.currentDataSource)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { status, data } = await axios.get('https://storage.googleapis.com/finno-ex-re-v2-static-staging/recruitment-test/fund-ranking-1Y.json')

  if (status === 200 && data) {
    const items = data.data || []
    const sortData = items.sort((a, b) => b.nav_return - a.nav_return)

    return { props: { data: sortData } }
  }

  return { props: {} }
}
