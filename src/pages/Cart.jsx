import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``

const Wrapper = styled.div`
padding:20px;
`

const Title = styled.h1`
font-weight:300;
text-align:center;
`

const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopButton = styled.button`
padding:10px;
font-weight:600px;
cursor:pointer;
border:${props=>props.type==="filled"&&"none"};
background-color:${props=>props.type==="filled"?"black":"transparent"};
border:${props=>props.type==="filled"&&"white"};
color:${props=>props.type==="filled"&&"white"};
`
const TopTexts = styled.div``
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`

const Bottom = styled.div`
display:flex;
justify-content:space-between;
`

const Info = styled.div`
flex:3;
`
const Product = styled.div`
display:flex;
justify-content:space-between;
`
const ProductDetail = styled.div`
flex:2;
`
const Image = styled.img`
width:200px;
`
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductId = styled.span``

const ProductSize = styled.span``

const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color}
`

const PriceDetail = styled.div`
flex:2;
display:flex;
flex-direction:column;
align-item:center;
justify-content:center;
`

const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;

`
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
`
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
`


const ProductName = styled.span``

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`
const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type==="total"&&"500"};
font-size:${props=>props.type==="total"&&"24px"};
`
const SummaryTitle = styled.h1`
font-weight:200;
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button``
const Button = styled.button`
width:100%;
padding:10px;
margin-top:90px;
background-color:black;
color:white;
font-weight:600;
`

const Hr = styled.hr`
background-color:#eee;
border:none;
height:2px;
margin-bottom:20px;
`

const Cart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      Cart
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>

            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>

            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://static.zara.net/photos///2022/I/1/1/p/1004/010/800/2/w/293/1004010800_15_1_1.jpg?ts=1666078959281"/>
                        <Details>
                            <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                            <ProductColor color='black'/>
                            <ProductId><b>Id:</b> 98995533</ProductId>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://static.zara.net/photos///2022/I/0/2/p/1277/301/250/2/w/186/1277301250_2_2_1.jpg?ts=1666104017413"/>
                        <Details>
                            <ProductName><b>Product:</b> STYLISH T-SHIRT</ProductName>
                            <ProductColor color='gray'/>
                            <ProductId><b>Id:</b> 98995533</ProductId>
                            <ProductSize><b>Size:</b> M</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>3</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$20</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$-5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total"> 
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$50</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
