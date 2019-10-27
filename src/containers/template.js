import React, { useState } from 'react';
import EmailEditor from 'react-email-editor';
import { 
  useHistory,
  useParams
} from "react-router-dom";

import {Input,Button,Row, LinkBtn} from '../components/styled-components';
export default function Template(){
  // Declare a new state variable, which we'll call "count"
  const {existing_id} = useParams();
  const [template_name,setName] = useState("");
  const [template_id,setId] = useState(existing_id);
  const [template,setTemplate] = useState(null);
  const [editor,setEditor] = useState(null);
  const history = useHistory();
 
  function save(){
       if(template_name === "")
    {
      alert("Please type template name to proceed!!");
      return;
    }
    editor.exportHtml(data => {
      const { design, html } = data
     
      let old_templates = localStorage.getItem("templates");
      if(old_templates === null){
        let arr = [];
        arr.push({id:template_id,name:template_name,design,html});
        localStorage.setItem("templates",JSON.stringify(arr));

      }
      else{

        old_templates = JSON.parse(old_templates) ;
        let editing = false;
        old_templates.forEach((t)=>{
          if(t.id === template_id){
            editing = true;
            t.name = template_name;
            t.design = design;
            t.html = html;
          }
        })
        if(!editing){
          old_templates.push({id:template_id,name:template_name,design,html});
        }
        localStorage.setItem("templates",JSON.stringify(old_templates));
       
      }
      history.push('/');





    })
  }
 function _loadDesign(){
      let t_id = existing_id ;
      if(t_id !== undefined){

       let templates = localStorage.getItem("templates");
       if(templates !== null){

         templates = JSON.parse(templates);
 
         templates.forEach((t)=>{
           if(parseInt(t.id) === parseInt(t_id)){

             setName(t.name);
             setId(t.id);
             setTemplate(t);
                         
             window.unlayer.loadDesign(t.design);
                           
           }
         })
       }
     }
     else{
      t_id = parseInt(new Date().getTime()/1000);
       setId(t_id)
     }
    
  }
  
    return (
      <div>
        <Row>
          <div style={{flex:1,flexDirection:"row",justifyContent:"flex-start",marginLeft:20}}>
            <Input style={{float:"left"}} placeholder={"Template Name"} value={template_name} onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div style={{display:'flex',flex:1,justifyContent:"flex-end"}}>
            <Button onClick={()=>{save()}}>Save Template</Button>
            <Button ><LinkBtn to="/">Go Back</LinkBtn></Button>
          </div>
        </Row>    
        <div style={{marginTop:16}}>
          <EmailEditor  onLoad={()=>{_loadDesign()}} ref={editor=> setEditor(editor)}/>
        </div>
      </div>
    );
  
 
}
