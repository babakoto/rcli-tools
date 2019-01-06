rcli-tools

### Install:
`npm i rcli-tools -g`

### Command 
* -cp : components
* -ct : containers
* -f : statefull
* -l : stateless

## Exemple 1: create Component stateless "Name = Button" 
`rcli -cp -l Button`

## Structure


## Exemple 2: create Component statefull "Name = Button" 
`rcli -cp -f Button`

![component_button](https://github.com/babakoto/rcli-tools/blob/master/button.PNG)

## Exemple 3: create Container statefull "Name = Home" 
`rcli -ct -f Home`

## Exemple 4: create Component "Button" in Directory "MyPackages"
`rcli MyPackages -f Button`

![component_button](https://github.com/babakoto/rcli-tools/blob/master/buttonInPack.PNG)

# Button.js 

  import React, { Component } from 'react'
  import './Button.css'

    class Button extends Component {
    render() {
      return (
        <div>
          Button
        </div>
      )
   }
  }
  export default Button
    
