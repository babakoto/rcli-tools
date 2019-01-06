# rcli-tools

rcli-tools is a basic cli to generate a react component stateless or statefull

### Install:
`npm i rcli-tools -g`

### Command 
`rcli -cp -f [componentName]`

* -cp : place your component in src/**components**/[componentName]"
* -ct : place your component in src/**containers**/[componentName]"
* -f : statefull
* -l : stateless

<<<<<<< HEAD
#### Exemple 1: create a component stateless 
    * -cp : place your component  in "src/**components**/Button"
=======
For exemple you can place your Component in **MyPackages** folder

`rcli MyPackages -f Button`

#### create a component stateless 
>>>>>>> eb0446abf409ff0c8d76a2e8c2dd1036dd19c673
`rcli -cp -l Button`

#### create a component statefull 
`rcli -cp -f Button`

![button](https://github.com/babakoto/rcli-tools/blob/master/button.PNG)

### Button.js 
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
    

#### index.js
    export {default} from "./Button"
 
 
