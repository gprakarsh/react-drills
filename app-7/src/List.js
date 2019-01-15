import React,{Component} from 'react';

export default function List(props){
   let printer = props.tasks.map((e,i)=><p key={i}>{e}</p>)
    return (
       <div>
        {printer}
       </div>
   )
}  