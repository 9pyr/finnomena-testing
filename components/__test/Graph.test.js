import React from 'react'
import { Graph } from 'components'
import { render } from '@testing-library/react'
import { customContent } from 'components/Graph'

const defaultProps = {
  data: [
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
      mstar_id: 'F00000IT9T',
      thailand_fund_code: 'TMBOIL',
      nav_return: 71.99969,
      nav: 4.354,
      nav_date: '2021-09-06T00:00:00.000Z',
      avg_return: 65.394614,
      nav_index: 3,
    },
    {
      mstar_id: 'F000002SAM',
      thailand_fund_code: 'TISCOOIL',
      nav_return: 66.52248,
      nav: 4.3079,
      nav_date: '2021-09-06T00:00:00.000Z',
      avg_return: 65.394614,
      nav_index: 4,
    },
  ],
}
const setupValues = (props) => ({ ...defaultProps, ...props })

describe('Graph Component', () => {
  test('render has props', () => {
    const props = setupValues()
    const { container } = render(<Graph {...props} />)

    expect(container).toMatchSnapshot()
  })
  test('render is props undefined', () => {
    const { container } = render(<Graph />)

    expect(container).toMatchSnapshot()
  })

  test('render has props by customContent function', () => {
    const props = ['title_test', [{ value: 'value_test' }]]
    const { container } = render(customContent(...props))

    expect(container).toMatchSnapshot()
    expect(container.querySelector(`.title`).textContent).toMatch(RegExp(props[0]))
    expect(container.querySelector('.text_highlight').textContent).toMatch(RegExp(props[1].value))
  })
  test('render has props undefined by customContent function', () => {
    const props = []
    const { container } = render(customContent(...props))

    expect(container).toMatchSnapshot()
    expect(container.querySelector(`.title`).textContent).toBe('')
    expect(container.querySelector('.text_highlight').textContent).toBe('')
  })
})
