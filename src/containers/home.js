import React, { useState,useEffect } from 'react';
import { 
  MainTitle,
  Cards,
  Box,
  BoxHeading,
  Button,
  CrossBtn,
  Column,
  Row,
  LinkBtn} from '../components/styled-components';
export default function Home(){
  // Declare a new state variable, which we'll call "count"
  const [templates,setTemplates] = useState([]);
  useEffect(()=>{
    let temp = localStorage.getItem("templates");
    if(temp !== null){
      setTemplates(JSON.parse(temp))
    }
  },[])
  
    function _delete(i){
      let temp = localStorage.getItem("templates");
      if(temp !== null){
        let arr = []
        temp = JSON.parse(temp);
        temp.forEach((t,index)=>{
          if(i!== index)
          {
            arr.push(t);
          }
        })
        localStorage.setItem('templates',JSON.stringify(arr));
        setTemplates(arr);
      }
    }
   
    
    const row_render = templates.map((item,i)=>{
      const temp_render = templates.map((item,j)=>{
        if(j>=i && j<(i+4))
        return(
          <Cards key={j}>
            <Box >
            <CrossBtn onClick={()=>{_delete(j)}}>X</CrossBtn>
            <BoxHeading>{item.name}</BoxHeading>
            <Button><LinkBtn to={"/edit/"+item.id} >Edit</LinkBtn></Button>
            </Box>
          </Cards>
          )
       })
      if(i%4===0 || i === 0){
     
        return(
          <Row key={i} >{temp_render}</Row>
          
        )
     }
     
    }) 
    return (
      <div>
          <Row>
              <div style={{flex:1,flexDirection:"row",}}>
                  <MainTitle>Templates</MainTitle>
              </div>
              <Button >
                <LinkBtn to="/new" >New Template</LinkBtn>
              </Button>
          </Row>
          <div style={{flex:1,height:'85vh'}}>
            <Column >
              {row_render}

            </Column>
          </div>
      </div>
    );
  
 
}