import React from 'react'
import dayjs from 'dayjs'
import { DatePick } from 'components'
import { render } from '@testing-library/react'

const defaultProps = {
  value: [dayjs('2021-09-06'), dayjs('2021-09-07')],
  onChange: () => {},
}
const setupValues = (props) => ({ ...defaultProps, ...props })

describe('DatePick Component', () => {
  test('render has props', () => {
    const props = setupValues()
    const { container } = render(<DatePick {...props} />)

    expect(container).toMatchSnapshot()
  })

  test('render is props undefined', () => {
    const { container } = render(<DatePick />)

    expect(container).toMatchSnapshot()
  })
})
