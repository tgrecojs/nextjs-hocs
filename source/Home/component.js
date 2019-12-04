import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { fstat } from 'fs'

/**
 * We can use macros in `styled`.
 */


const makeDivStyles = ({
  font = 'font-mono',
  bg = 'bg-gray-200',
  padding = 'p-2',
  sm = {
    fS : 'sm:text-sm',
    fC : 'sm:text-blue-500'
  },
  md = {
    fS: 'md:text-sm',
    fC: 'lg:text-teal-800'
  },
  lg = {
    fS: 'lg:text-1xl',
    fC: 'lg:text-orange-600'
  }
} = {}) => `${font} ${bg} ${padding} ${sm.fS} ${sm.fC} ${md.fS} ${md.fC} ${lg.fS} ${lg.fC}`;


const styless = makeDivStyles();

const defaultDivStyles = (additionalStyles = '') => `
  font-mono
  bg-gray-200
  p-2 
  sm:text-sm sm:text-blue-500 
  md:text-md md:text-teal-800 
  lg:text-2xl lg:text-orange-600
`.concat(additionalStyles)


const Header = styled('div')
`${tw`font-mono
bg-gray-200
p-2 
sm:text-sm sm:text-blue-500 
md:text-md md:text-yellow-800 md:bg-teal-600
lg:text-2xl lg:text-orange-600`}`;

const Button = styled.button`
  ${tw`bg-blue-500 text-white font-mono px-4 py-2 rounded`} :hover {
    ${tw`bg-blue-700`}
  }
`

/**
 * Also, we can use `css`.
 */
const CardStyle = css`
  ${tw`p-4 border-solid border border-gray-300  rounded p-4 shadow-xl`}
`

const Card = styled.div`
  ${CardStyle}
  ${tw`bg-teal-400 lg:bg-yellow-200`}
`

const Home = ({children}) => (
  <Card>
    <Header>Hello</Header>
    <Button>Emotion.js</Button>
    {children}
  </Card>
)

export default Home