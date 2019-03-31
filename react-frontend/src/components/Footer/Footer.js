import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'

import css from './Footer.scss'
const cx = classnames.bind(css)
const moduleName = 'Footer'

class Footer extends Component {
    render () {
        retrun (
            <div className={cx(`${moduleName}`)}>
                본 사이트에 사용한 「성경전서 개역한글판」의 저작권은 재단법인 대한성서공회의 소유이며, 재단법인 대한성서공회의 허락을 받고 사용하였음.
            </div>
        )
    } 
}

export default Footer

