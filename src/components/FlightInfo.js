import React from 'react';
import ReactDOM from 'react-dom';
import { styles } from './utils';
import Auth from '@aws-amplify/auth';
import { Link } from "react-router-dom";

function Template() {
  return (
    <div  class="flex flex-col ..." style={{border:'1px solid black'}} >
    <div class="flex-auto ..." style={{border:'1px solid black'}}>
      Launch Data   
      <div class="flex flex-row ..." style={{border:'1px solid black'}}>
        <div class="flex flex-auto ... " style={{border:'1px solid black'}}>
          <div  class="flex flex-col ..." style={{border:'1px solid black'}}>
          <div class="flex-auto ..." style={{border:'1px solid black'}}>
            LAUNCHING ELON TO MARS
          </div>

          <div class="flex-auto ..." style={{border:'1px solid black'}}>
            company 
          </div>
          </div> 
        </div>
        
        <div class="flex flex-auto ..." style={{border:'1px solid black'}}>
          picture
        </div>
      </div>

    </div>
    <div class="flex-auto ..." style={{border:'1px solid black'}}>
    <div class="flex flex-row ..." style={{border:'1px solid black'}}>
        <div class="flex flex-auto ... " style={{border:'1px solid black'}}>
          <div  class="flex flex-col ..." style={{border:'1px solid black'}}>
          <div class="flex-auto ..." style={{border:'1px solid black'}}>
            date 
          </div>

          <div class="flex-auto ..." style={{border:'1px solid black'}}>
            location 
          </div>
          </div> 
        </div>
        
        <div class="flex flex-auto ..." style={{border:'1px solid black'}}>
          more info
        </div>
      </div>
    </div>
  </div>
  )
}


export default Template