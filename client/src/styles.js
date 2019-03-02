import styled, { keyframes } from 'styled-components'

import logoSpin from './assets/sahp-logo-spin.svg'
import logo from './assets/sahp-logo.svg'

const spin = keyframes`
	from {
		transform: rotate(720deg);
	}

	to {
		transform: rotate(0deg);
	}
`

export const AppContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	justify-items: center;
	align-items: center;

	height: 100vh;

	& > p {
		max-width: 40rem;
	}
`

export const LogoSpin = styled.div`
	background: url(${logoSpin}) no-repeat center;
	background-size: contain;

	width: 10rem;
	height: 10rem;

	animation: ${spin} 2s ease-in-out infinite;
`

export const Logo = styled.div`
	background: url(${logo}) no-repeat center;
	background-size: contain;

	width: 10rem;
	height: 10rem;
`