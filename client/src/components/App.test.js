import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapater from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapater() })

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders App component', () => {
  const wrapper = shallow(<App />)
  const appComponent = findByTestAttr(wrapper, 'app-component')
  expect(appComponent.length).toBe(1)
})