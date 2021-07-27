import React from 'react'
import ReactDOM from 'react-dom'

import {ShadowPanel, CustomButton} from "hkha-react-component";

const Container = () =>
    <div>
        <h2>Other React Web Application - To Import Components</h2>
        <ShadowPanel></ShadowPanel>
        <CustomButton text='test button' size='large'></CustomButton>
    </div>

ReactDOM.render(<Container></Container>, document.getElementById('root'))

