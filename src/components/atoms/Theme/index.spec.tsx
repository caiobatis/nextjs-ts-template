import React from 'react'

import { mount } from 'enzyme'

import Theme from './'

describe('<Theme />', () => {
  it('should render correctly', () => {
    const component = mount(<Theme />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })
})
