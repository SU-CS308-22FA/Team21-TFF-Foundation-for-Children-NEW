import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'ejs';

class Parent extends Component {

    addUser(){
        axios.get('/api/users')
        .then( response =>{
            console.log(response.data)
        }).catch(()=>{
            console.log('crap')
        })
        }
 }

 render(){
    return(
        <div className="Parent">
            <button
            onClick={()=> this.addUser()}
            >
                Add Parent
            </button>
        </div>
    )
 }