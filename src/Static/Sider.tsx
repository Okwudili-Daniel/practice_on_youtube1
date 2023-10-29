import {FC} from 'react'
import { styled } from 'styled-components'
import {GoHomeFill} from "react-icons/go"
import {SiShortcut} from "react-icons/si"
import {MdOutlineSubscriptions,MdOutlineVideoLibrary} from "react-icons/md"



interface iprops{
  text:string
icon:any
}

const Sider = () => {
  const Nav:FC<iprops>=({text,icon})=> {
    return <HOLD>
      <Icon>
       {icon}
      </Icon>
      <TEXT>
    {text}
      </TEXT>
    </HOLD>
  }

  return (
    <div>
      <Container>
       <Nav text='Home' icon={<GoHomeFill/>}/>
       <Nav text='Short' icon={<SiShortcut/>}/>
       <Nav text='Subscription' icon={<MdOutlineSubscriptions/>}/>
       <Nav text='Library' icon={<MdOutlineVideoLibrary/>}/>
      
      </Container>
    </div>
  )

 
}

export default Sider
const Icon =styled.div`
  font-weight: bolder;
  font-size: 20px;

`
const TEXT =styled.div`
font-size: 15px;
font-weight: bolder;
`
const HOLD = styled.div`
height: 80px;
width: 100%;
background-color: whitesmoke;
display: flex;
align-items: center
;
justify-content: center;
flex-direction: column;
gap: 8px;
`
const Container=styled.div`
  height: 500px;
  width: 110px;
  display: flex;
align-items: center;
margin-top: 130px;
flex-direction: column;
gap: 15px;
position: fixed;
margin-right: 20px;
`
