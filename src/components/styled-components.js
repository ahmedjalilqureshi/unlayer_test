import styled from "styled-components";
import {   
    Link
  } from "react-router-dom";

const Container = styled.div`
padding:32px;
background:#fff;
text-align:center`;
const MainTitle = styled.p`
margin:0px;
padding:0px;
text-align:left;
margin-left:12px;
font-size:1.5rem;
font-family:Calibri`; 
const Row = styled.div`
display:flex;
flex-direction:row;
flex:1;width:100%`;
const Column = styled.div`
display:flex;
flex-direction:column`;
const Cards = styled.div`
width:25%;
height:150px;
min-height:150px;  
padding:10px;
display:inline;
box-sizing: border-box;
`;
const Box = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:#03A9F4;
    border-radius:2px;
    box-shadow:0px 0px 8px #B3E5FC;
    height:100%;
    `;
    const BoxHeading = styled.p`
    color:#FFFFFF;
    font-weight:400;
    font-size:1.2rem;
    padding-top:12px;
    font-family:Calibri;
    flex:1
    `;
    const Input = styled.input`
    border-color:#03A9F4;
    font-family:Calibri;
    padding:2px;
    `;
    const Button = styled.button`
    background:#FFC107;
    padding:2px;
    min-width:100px;
    margin:4px;
    font-size:0.9rem;
    justify-content:center;
    font-weight:600;
    font-family:Calibri;
    color:#666;
    flex:${props=>props.block?1:0}
    `
    const CrossBtn = styled.button`
    position:absolute;
    top:-12px;
    right:-12px;
    border-radius:16px;
    width:32px;
    height:32px;
    background:#D32F2F;
    color:#fff;
    font-size:18px;
    font-family:Calibri;
    font-weight:400;
    border:0
    
    `;
    const LinkBtn = styled(Link)`
    color:#666;
    padding:2;
    font-size:0.9rem;
    flex:1;
    display:flex;
    justify-content:center;
    font-weight:600;
    text-decoration:none;
    font-family:Calibri`;

  
export {
    Container,
    MainTitle,
    Column,
    Row,
    Cards,
    Box,
    BoxHeading,
    Input,
    Button,
    CrossBtn,
    LinkBtn,
}