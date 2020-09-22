import React from 'react'
import ReactDOM from 'react-dom'

import { ShadowPanel } from 'workshop-create-components-hkha'

const Container = ()=>
  <div>
    <h2>Other React Web Application - To Import Components</h2>
    <ShadowPanel></ShadowPanel>
  </div>

ReactDOM.render(<Container></Container>, document.getElementById('root'))

