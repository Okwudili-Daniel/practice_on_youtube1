import styled from "styled-components"
import {AiOutlineMenu} from'react-icons/ai'
import {AiOutlineSearch} from'react-icons/ai'
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiVideo} from "react-icons/bi"
import {BsFillMicFill} from "react-icons/bs"
import { searchVid } from "../api/api"
import img from "../../src/assets/YouTube-Logo.wine-removebg-preview.png"
const Header = () => {
  return (
    <div>
     <Wrapppee>
     <Container>
        <Wrapper>
            <LogoArea>

                <Icon>
                    <AiOutlineMenu/>
                </Icon>
                <Logo>
                    <img src={img}/>
                </Logo>
            </LogoArea>
            <SearchArea>
                <Search>
                    <Input
                    placeholder="Search"
                    type="text"
                    />

                    <Div>
                        <AiOutlineSearch size={20}/>
                    </Div>
                </Search>
                <Hold><BsFillMicFill/></Hold>
            </SearchArea>
            <NavHolder>
                <Hold>
                <IoMdNotificationsOutline/>

                </Hold>
                <Hold>
                <BiVideo/>

                </Hold>
                <Profile>P</Profile>
            </NavHolder>
        </Wrapper>
        
      </Container>
      <AllNavs>
            <Nav bg="black"col="white"
             onClick={()=>{
                searchVid("All").then((res)=>{
                    console.log(res);
                    
                    localStorage.setItem("vid", JSON.stringify(res.All))
                })
             }}
            >
                All
            </Nav>
            <Nav bg="#eeeeee"col="black"
              onClick={()=>{
                searchVid("News").then((res)=>{
                    localStorage.setItem("vid", JSON.stringify(res.News))
                })
             }}            
            >
                News
            </Nav>
            <Nav bg="#eeeeee"col="black"
             onClick={()=>{
                searchVid("Debate").then((res)=>{
                    localStorage.setItem("vid", JSON.stringify(res.Debate))
                })
             }} 
            >
                Debates
            </Nav>
            <Nav bg="#eeeeee"col="black"
             onClick={()=>{
                searchVid("Sports").then((res)=>{
                    localStorage.setItem("vid", JSON.stringify(res.Sports))
                })
             }} 
            >
                Sports
            </Nav>
            <Nav bg="#eeeeee"col="black"
             onClick={()=>{
                searchVid("War").then((res)=>{
                    localStorage.setItem("vid", JSON.stringify(res.War))
                })
             }} 
            >
                War
            </Nav>
        </AllNavs>
     </Wrapppee>
    </div>
  )
}


export default Header

const Nav = styled.div<{
    bg?: string;
    col?: string;
}>`
    padding: 13px 20px;
    margin: 5px;
    border-radius: 8px;
    border: none;
    background-color: ${({bg})=>bg};
    color: ${({col})=>col};
    &:hover{
        cursor: pointer;
        background-color: #a1a0a0;
    }

`;

const AllNavs =styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 150px;
`;

const Profile=styled.div`
     width: 40px;
    height: 40px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: yellow;
`

const Hold=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Div = styled.div`
    background-color: silver;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 100%;
    width: 60px;
`
const Input = styled.input`
    outline: none;
    height: 100%;
    border: 0;
    flex: 1;
    padding-left: 25px;
    background-color: white;
`
const Search = styled.div`
    width: 50%;
    height: 40px;
    overflow: hidden;
    display: flex;
    align-items: center;
    border: 1px solid silver;
    border-radius: 100px;
    background-color: white;
`
const  Logo  =styled.div`
height: 80px;
width: 150px;
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`
const  Icon  =styled.div``
const  NavHolder  =styled.div`
display: flex;
align-items: center;

justify-content: space-between;
`
const SearchArea=styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
`
const  LogoArea =styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`
const Wrapper =styled.div`
height: 90%;
width: 95%;
display: flex;
align-items: center;
justify-content: space-between;
`
const Container=styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
    `
const Wrapppee = styled.div`
    
    position: fixed;
    z-index: 9999;
    background-color: white;
    top:0;
    width:100%;
`