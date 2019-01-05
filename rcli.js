#!/usr/bin/env node
const fs = require('fs')
const fse = require('fs-extra');

const [,, ... args]=process.argv
let template = 
`
import React, { Component } from 'react'
import './${args}.css'

class ${args} extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default ${args}
`

let exportFile = `export {default} from './${args}'`
fse.outputFile(`src/${args[0]}/${args[1]}/${args[1]}.js`,template, err => {
    if(err) {
      console.log(err);
    }
  })

  fse.outputFile(`src/${args[0]}/${args[1]}/${args[1]}.css`,' ', err => {
    if(err) {
      console.log(err);
    }
  })

  fse.outputFile(`src/${args[0]}/${args[1]}/index.js`,exportFile, err => {
    if(err) {
      console.log(err);
    }
  })
  console.log(`${args[1]} created !!!`)
