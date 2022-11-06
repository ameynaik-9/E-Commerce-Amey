import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { useHistory } from 'react-router-dom';

const Container = styled.div`
height:60px;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
display:flex;
align-items:center;
`
const Left = styled.div`
width:33.3%;
display:flex;
align-items:center;
`
const Language = styled.span`
font-size:14px;
cursor:pointer;
`
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Center = styled.div`
width:33.3%;
text-align:center;
`
const Right = styled.div`
width:33.3%;
display:flex;
align-items:center;
justify-content:flex-end;
`
const Input = styled.input`
border:none;
`
const Logo = styled.h1`
font-weight:bold;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
text-decoration:none;
color:black;
`

const Navbar = () => {
    // let history = useHistory();
    return (
        <Container>
            <Wrapper>
            <Left><Language>EN</Language>
            <SearchContainer>
            <Input/>
            <Search/>
            </SearchContainer>
            </Left>
            <Center><Logo>ZARA</Logo></Center>
            <Right>
                <Link to='/Register'><MenuItem>REGISTER</MenuItem></Link>
                <Link to='/SignIn'><MenuItem>SIGN IN</MenuItem></Link>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <Link to='/Cart'>
            <ShoppingCartOutlined/>
                    </Link>
                </Badge>
                </MenuItem>
            </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
