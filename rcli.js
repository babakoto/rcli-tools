#!/usr/bin/env node
const fs = require('fs')
const fse = require('fs-extra');

const [,, ... args]=process.argv

let template = 
`
import React, { Component } from 'react'

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
fse.outputFile(`src/${args}/${args}.js`,template, err => {
    if(err) {
      console.log(err);
    }
  })

  fse.outputFile(`src/${args}/${args}.css`,'', err => {
    if(err) {
      console.log(err);
    }
  })

  fse.outputFile(`src/${args}/index.js`,exportFile, err => {
    if(err) {
      console.log(err);
    }
  })
  console.log(`${args} created !!!`)
