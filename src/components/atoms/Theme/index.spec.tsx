import React from 'react'

import { mount } from 'enzyme'

import Theme from './'

describe('<Theme />', () => {
  it('should render correctly', () => {
    const component = mount(<Theme />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  describe('when children is defined', () => {
    it('should render as children passed', () => {
      const children = 'children element'

      const component = mount(<Theme>{children}</Theme>)

      expect(component.find('Theme').text()).toEqual(children)

      component.unmount()
    })
  })
})
