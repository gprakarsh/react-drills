import React, {Component} from 'react';

export default function Todo(props){
    let printer = props.todoList.map((e,i)=><p key={i}>{e}</p> )
    return (
        <div>{printer}</div>
    )
}