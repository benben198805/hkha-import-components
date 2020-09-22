import React from 'react'
import ReactDOM from 'react-dom'

import { ShadowPanel } from 'workshop-hkha-components-test'

const Container = ()=>
  <div>
    <h2>React Web Application</h2>
    <ShadowPanel content='useShadowBox'></ShadowPanel>
  </div>

ReactDOM.render(<Container></Container>, document.getElementById('root'))

