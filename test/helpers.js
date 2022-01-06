import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const jsdom = require('jsdom')

const { JSDOM } = jsdom

const dom = new JSDOM()

const timeoutCallback = (callback) => {
  setTimeout(callback, 0)
}

const matches = () => ({
  matches: false,
  // eslint-disable-next-line
  addListener: function () { },
  // eslint-disable-next-line
  removeListener: function () { }
})

window.requestAnimationFrame = window.requestAnimationFrame || timeoutCallback

global.window = dom.window

global.document = dom.document

global.axiosMock = new MockAdapter(axios)

window.matchMedia = window.matchMedia || matches

if (!SVGElement.prototype.getTotalLength) {
  SVGElement.prototype.getTotalLength = () => 1
}
