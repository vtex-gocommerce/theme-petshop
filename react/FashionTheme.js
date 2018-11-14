import React, { Component } from 'react'
import Cookies from 'js-cookie'

import './global.css'
import './header.global.css'
import './list-products.global.css'
import './footer.global.css'
import './product.global.css'
import './minicart.sidebar.global.css'
import './minicart.popup.global.css'

const VTEX_ENV = 'beta'

export default class FashionTheme extends Component {
  componentDidMount() {
    Cookies.set('vtex-commerce-env', VTEX_ENV)
  }

  render() {
    return null
  }
}
