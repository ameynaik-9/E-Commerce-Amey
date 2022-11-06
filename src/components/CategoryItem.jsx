import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image = styled.img`
width:100%;
height:100%;

`
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Title = styled.h1`
color:white;
margin:20px;
`
const Button = styled.button`
padding:10px;
font-size:20px;
cursor:pointer;
background-color:white;
color:gray;
font-weight:bold;
`

const CategoryItem = (props) => {
  return (
    <Container>
      <Image src={props.item.img}/>
      <Info>
        <Title>{props.item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
