#!/usr/bin/env node
const fs = require('fs')
const fse = require('fs-extra');

const [,, ... args]=process.argv

let stateless=
`import React from 'react';
import './${args[2]}.css'

const ${args[2]}=()=>(
<h1>${args[2]}</h1>
);

export default ${args[2]}
`

let stateFull = 
`import React, { Component } from 'react'
import './${args[2]}.css'

class ${args[2]} extends Component {
  render() {
    return (
      <div>
        ${args[2]}
      </div>
    )
  }
}

export default ${args[2]}
`
let exportDefault = `export {default} from "./${args[2]}"`;

let template = (dir,state)=>{
  if (dir==="-cp"){
    fse.outputFile(`src/components/${args[2]}/${args[2]}.js`,state, err => {
      if(err) {
        console.log(err);
      }
    })
  
    fse.outputFile(`src/components/${args[2]}/${args[2]}.css`,' ', err => {
      if(err) {
        console.log(err);
      }
    })
  
    fse.outputFile(`src/components/${args[2]}/index.js`,exportDefault, err => {
      if(err) {
        console.log(err);
      }
    })
    console.log(`${args[2]} created !!!`)

  }else if (dir==="-ct"){
    fse.outputFile(`src/containers/${args[2]}/${args[2]}.js`,state, err => {
      if(err) {
        console.log(err);
      }
    })
  
    fse.outputFile(`src/containers/${args[2]}/${args[2]}.css`,' ', err => {
      if(err) {
        console.log(err);
      }
    })
  
    fse.outputFile(`src/containers/${args[2]}/index.js`, state, err => {
      if(err) {
        console.log(err);
      }
    })
    console.log("\x1b[42m",`${args[2]} created !!!`)
  }else{
    // create Component.js
    fse.outputFile(`src/${args[0]}/${args[2]}/${args[2]}.js`,state, err => {
      if(err) {
        console.log(err);
      }
    })
  // create Component.css
    fse.outputFile(`src/${args[0]}/${args[2]}/${args[2]}.css`,' ', err => {
      if(err) {
        console.log(err);
      }
    })
  // create index.js
    fse.outputFile(`src/${args[0]}/${args[2]}/index.js`, state, err => {
      if(err) {
        console.log(err);
      }
    })
    console.log("\x1b[32m",`${args[2]} created !!!`)
  }
}

if(args[1]==="-l"){
  template(args[0],stateless)
}else if(args[1]==="-f"){
  template(args[0],stateFull)
}else{
 
 console.log("\x1b[31m",`"${args[1]}" is not a rcli command`);
}

