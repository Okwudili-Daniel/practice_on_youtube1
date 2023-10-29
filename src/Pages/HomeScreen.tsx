import React from 'react'
import styled from 'styled-components'
import pis from "../../src/assets/images.jpeg"
// import viddy from "../assets/screen-capture (1).webm"
import {BiDotsVerticalRounded}from "react-icons/bi"
import moment from 'moment'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react'

const HomeScreen = () => {
  const [state, setState] = useState<any>()
  
  useEffect(()=>{
    setState(JSON.parse(localStorage.getItem("vid")!))
  },[state])
  return (
    <div>
      <Contaner>
        {state?.map((prop:any)=>(
        <Link to={`/detail-page/${prop.id.videoId}`} style={{textDecoration:"none"}}>
          <Card>
          <Top>
              <Image src={prop.snippet.thumbnails.high.url}/>
              <Video src={`https://youtube.com/embed/${prop.id.videoId}`}/>
              <Time>10:31</Time>
          </Top>
          <Bottom>
              <Avatar src={prop.snippet.thumbnails.high.url}/>
              <Center>
                  <Title>{prop.snippet.channelTitle}</Title>
                  <ChannelName>TED-ED</ChannelName>
                  <Views>  {moment(new Date().getTime()).fromNow()}</Views>
              </Center>
              <Icon><BiDotsVerticalRounded/></Icon>
          </Bottom>
      </Card>
        </Link>
        ))}
      </Contaner>
    </div>
  )
}

export default HomeScreen

const Title =styled.div`
font-size: 17px;
font-weight: 600;

`

const Views =styled.div`
font-size: 15px;
`

const ChannelName =styled.div`
font-size: 15px;
`

const Icon =styled.div`
font-size: 20px;
`

const Avatar =styled.img`
width:50px;
height:50px;
border-radius:50%;
object-fit: cover;
object-position: center;
margin-left: 5px;
`

const Center =styled.div`
width: 80%;
margin-left: 5px;
color:black;
`

const Bottom =styled.div`
margin-top: 10px;
display: flex;
`

const Time=styled.div`
padding:4px;
background-color:rgba(0,0,0,0.7);
font-size:12px;
color:white;
position:absolute;
bottom:10px;
right:10px;
opacity: 0;
`

const Video=styled.iframe`
width:100%;
height:100%;
/* border-radius:8px; */
position:absolute;
top:0;
left:0;
opacity: 0;
object-fit: cover;
object-position: center;
transition:all ease-in 350ms;`

const Image=styled.img`
width:100%;
height:100%;
border-radius:8px;
object-fit: cover;
object-position: center;
transition:all ease-in 350ms;
`

const Top=styled.div`
width:100%;
height:74%;
position: relative;
&:hover{
    ${Video}{
        opacity: 1;
    }
}
`

const Card=styled.div`
width:340px;
height:320px;
margin: 10px;
`

const Contaner =styled.div`
width:100%;
height:100%;
display: flex;
flex-wrap:wrap;
margin-top: 120px;
margin-left: 40px;

`