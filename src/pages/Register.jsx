import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5));
display:felx;
align-items:center;
justify-content:center;
`

const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:#f8f4f4;
flex-wrap:wrap;
`

const Title = styled.h1`
font-size:24px;
font-weight:300;
`

const Form = styled.form``

const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`

const Agreement = styled.p`
font-size:14px;
margin-top:15px;
`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
cursor:pointer;
margin-top:15px;
`


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="First Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="Username"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            <Agreement>
                <br/>
                By creating an account ,I consent to the processing of my personal dat in accordance with the <b>PRIVACY POLICY</b>
                <br/>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register