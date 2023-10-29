import React from 'react'
import styled from 'styled-components';
import {AiFillLike} from "react-icons/ai"
import { useParams } from 'react-router-dom';

const Detailpage = () => {
    const {id} = useParams()
  return (
    <div>
      <Container>
        <Main>
            <Video src={`https://youtube.com/embed/${id}`}/>

            <Title>This is the Detail Page </Title>

            <MoreDetails>
                <Avatar>
                    <Wrap ht="60px" bc="#f2f2f2" wd="60px" br="50%" mg="10px 15px 0px 15px" mt="15px">
                        
                    </Wrap>
                    <Wrap ht="30px" bc="" wd="80px" br="20px" mg="10px 0px 0px 5px" mt="15px">
                        <Text>TED-TED</Text>
                    </Wrap>

                    <Wrap ht="30px" bc="#f2f2f2" wd="80px" br="20px" mg="10px 15px 0px 15px" mt="15px">
                        <Text>Subscribe</Text>
                    </Wrap>

                    <Wrap ht="30px" bc="#f2f2f2" wd="80px" br="20px" mg="10px 15px 0px 15px" mt="15px">
                    <AiFillLike />
                        <Text>Like</Text>
                    </Wrap>
                </Avatar>
                

                <SuggestedVideo></SuggestedVideo>
            </MoreDetails>
        </Main>
      </Container>
    </div>
  )
}

export default Detailpage;
const Text = styled.div`
    
`
const Wrap= styled.div<{br: string, wd: string, ht: string, bc: string, mg: string, mt: string}>`
width: ${({wd})=>wd};
height: ${({ht})=>ht};
border-radius: ${({br})=>br};
background-color: ${({bc})=>bc};
margin: ${({mg})=>mg};
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
margin-top: ${({mt})=>mt};
cursor: pointer;
`

const SuggestedVideo= styled.div`
 width: 30%;
    height: 100%;
    /* background-color: yellow; */
    `
const Avatar= styled.div`
    width: 70%;
    height: 100%;
    /* background-color: green; */
    display: flex;
    /* justify-content: center;
    align-items: center; */
`
const MoreDetails= styled.div`
    width: 100%;
    height: 60vh;
    /* background-color: red; */
    display: flex;
`
const Title= styled.div``
const Video= styled.iframe`
    width: 100%;
    height: 70vh;
    background-color: black;
`
const Main= styled.div``
const Container= styled.div``
