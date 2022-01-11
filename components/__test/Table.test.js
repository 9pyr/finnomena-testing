import React from 'react'
import dayjs from 'dayjs'
import { Table } from 'components'
import { render } from '@testing-library/react'

const defaultProps = {
  dataSource: [
    {
      mstar_id: 'F00000ZMXD',
      thailand_fund_code: 'PRINCIPAL VNEQ-A',
      nav_return: 74.80117,
      nav: 14.154,
      nav_date: '2021-09-07T00:00:00.000Z',
      avg_return: 63.633823,
      nav_index: 1,
    },
    {
      mstar_id: 'F0000109C9',
      thailand_fund_code: 'PRINCIPAL VNEQ-I',
      nav_return: 74.79997,
      nav: 14.2656,
      nav_date: '2021-09-07T00:00:00.000Z',
      avg_return: 63.633823,
      nav_index: 2,
    },
    {
      mstar_id: 'F00000HHFC',
      thailand_fund_code: 'KT-OIL',
      nav_return: 73.33466,
      nav: 3.4868,
      nav_date: '2021-09-03T00:00:00.000Z',
      avg_return: 65.394614,
      nav_index: 3,
    },
    {
      mstar_id: 'F00000IT9T',
      thailand_fund_code: 'TMBOIL',
      nav_return: 71.99969,
      nav: 4.354,
      nav_date: '2021-09-06T00:00:00.000Z',
      avg_return: 65.394614,
      nav_index: 4,
    },
  ],
  onChange: () => {},
}
const setupValues = (props) => ({ ...defaultProps, ...props })

describe('Table Component', () => {
  test('render has props', () => {
    const props = setupValues()
    const { container } = render(<Table {...props} />)

    const antTableRow = container.getElementsByClassName('ant-table-row')

    expect(container).toMatchSnapshot()
    expect(antTableRow.length).toEqual(props.dataSource.length)
    props.dataSource.map((item, i) => {
      const antTableCell = antTableRow[i].getElementsByClassName('ant-table-cell')

      expect(antTableCell[0].textContent).toEqual(item.thailand_fund_code)
      expect(antTableCell[1].textContent).toEqual(String(item.nav_index))
      expect(antTableCell[2].textContent).toEqual(dayjs(item.nav_date).format('DD MMMM YYYY'))
      expect(antTableCell[3].textContent).toEqual(String(item.nav_return))
      expect(antTableCell[4].textContent).toEqual(String(item.nav))
    })
  })

  test('render is props undefined', () => {
    const { container } = render(<Table />)

    const antTableRow = container.getElementsByClassName('ant-table-row')

    expect(container).toMatchSnapshot()
    expect(antTableRow.length).toEqual(0)
  })
})
