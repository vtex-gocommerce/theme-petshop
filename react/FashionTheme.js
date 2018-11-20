import React, { Component } from 'react'
import Cookies from 'js-cookie'

import './global.css'

const VTEX_ENV = 'beta'

export default class FashionTheme extends Component {
  componentDidMount() {
    Cookies.set('vtex-commerce-env', VTEX_ENV)
  }

  render() {
    return null
  }
}
