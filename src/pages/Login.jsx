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
`

const Title = styled.h1`
font-size:24px;
font-weight:300;
`

const Form = styled.form`
display:flex;
flex-direction:column;
`

const Input = styled.input`
width:40%;
flex:1;
margin:20px 0px;
padding:10px;
`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
cursor:pointer;
margin-top:15px;
`
const Link = styled.a`
cursor:pointer;
margin:5px 0px;
text-decoration:underline;
`

const Login = () => {
  const admin = {
    email:"ameynaikalfa0909@gmail.com",
    password:"1234"
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <Button>LOGIN</Button>
            <br/>
            <Link>Forgot Password?</Link>
            <br/>
            <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
