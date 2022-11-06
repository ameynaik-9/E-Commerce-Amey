import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``
const Wrapper = styled.div`
padding:50px;
display:flex;
`
const ImgContainer = styled.div`
flex:1;
`
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;

`
const Title = styled.h1`
font-weight:200;
`
const Desc = styled.p`
margin:20px 0px;
`
const Price = styled.div`
font-weight:100;
font-size:40px;
`
const Image = styled.img`
width:100%;
height:90vh;
obeject-fit:cover;
`
const FilterContainer = styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin-left:10px;
cursor:pointer;
`
const FilterSizeOption = styled.option``
const Filter = styled.div`
display:flex;
align-items:center;
`
const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`
const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`

const AmountContainer = styled.div`
display:flex;
align-items:center;
`

const Amount = styled.span`
font-weight:800;
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
`

const Button = styled.button`
padding:15px;
border:1px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:#f8f4f4;
}
`

const Product = () => {
  return (
    <Container>
    <Announcement/>
      <Navbar/>
      <Wrapper>
        <ImgContainer>
        <Image src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-best-sellers/subhome-xmedia-38//w/591/IMAGE-portrait-ipad-c6b5432e-9404-4d49-aaf7-bd3062ed2a94-default_0.jpg?ts=1663583214111"/>
        </ImgContainer>
        <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati neque iste expedita error nisi illum rem laborum mollitia molestiae, reiciendis delectus quod consequatur, ex veniam doloremque. Est distinctio eos vitae!</Desc>
            <Price>$20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                </Filter>
                <Filter>
                <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                   <FilterSizeOption>XS</FilterSizeOption>
                   <FilterSizeOption>S</FilterSizeOption>
                   <FilterSizeOption>M</FilterSizeOption>
                   <FilterSizeOption>L</FilterSizeOption>
                   <FilterSizeOption>XL</FilterSizeOption>
                   <FilterSizeOption>XXL</FilterSizeOption>
                   </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            <Button>ADD TO CART</Button>
            </AmountContainer>

            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
