import React from 'react'

import { mount } from 'enzyme'

import Text, { getClassesByVariant } from '.'

describe('<Text />', () => {
  it('should render correctly', () => {
    const component = mount(<Text />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  describe('when children is defined', () => {
    it('should render as children passed', () => {
      const children = 'Laborit'

      const component = mount(<Text>{children}</Text>)

      expect(component.find('Text').text()).toEqual(children)

      component.unmount()
    })
  })

  describe('getClassesByVariant()', () => {
    describe('when level prop is defined ', () => {
      describe('and level equals "lg"', () => {
        it('should return "leading-normal text-lg font-normal" string', () => {
          expect(getClassesByVariant('lg')).toEqual(
            'leading-normal text-lg font-normal'
          )
        })
      })

      describe('and level equals "md"', () => {
        it('should return "leading-loose text-md" string', () => {
          expect(getClassesByVariant('md')).toEqual('leading-loose text-md')
        })
      })

      describe('and level equals "s"', () => {
        it('should return "leading-3 text-sm" string', () => {
          expect(getClassesByVariant('sm')).toEqual('leading-3 text-sm')
        })
      })

      describe('and level equals "xs"', () => {
        it('should return "leading-snug text-xs font-normal" string', () => {
          expect(getClassesByVariant('xs')).toEqual(
            'leading-snug text-xs font-normal'
          )
        })
      })
    })

    describe('when level prop is not defined ', () => {
      it('should return "leading-normal text-base font-normal" string', () => {
        expect(getClassesByVariant()).toEqual(
          'leading-normal text-base font-normal'
        )
      })
    })
  })
})
