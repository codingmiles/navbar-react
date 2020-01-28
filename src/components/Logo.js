import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logo-min.png'

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`

const Logo = () => {
	return (
		<Image src={logo} alt="Company Logo"/>
	)
}

export default Logo
