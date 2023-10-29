import React from 'react'
import Header from '../Static/Header'
import Sider from '../Static/Sider'
import {Outlet} from "react-router-dom"
import styled from 'styled-components'

const Layout = () => {
  return (
    <div>
<Wrapp>
<Header/>
      <Main>
      <Sider/>

      <Holder>
        <Div>
<Outlet/>
        </Div>
      </Holder>
      </Main>
</Wrapp>
      
    </div>
  )
}

export default Layout

const Wrapp=styled.div`
  overflow: hidden;
`

const Div =styled.div`
width: calc(100vw - 110px);
    
`

const Holder =styled.div`
display: flex;
justify-content: end;
width: calc(100%);
`

const Main =styled.div`
    display: flex;
    width: 100%;
`
