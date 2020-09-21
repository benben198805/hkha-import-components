import React from 'react'
import ReactDOM from 'react-dom'

import { ShadowPanel } from 'workshop-hkha-components-test'

const Container = ()=>
  <div>
    <div>React Web Application</div>
    <ShadowPanel content='useShadowBox'></ShadowPanel>
  </div>

ReactDOM.render(<Container></Container>, document.getElementById('root'))

