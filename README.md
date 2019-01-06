rcli-tools

### Install:
`npm i rcli-tools -g`

### Command 
* -cp : components
* -ct : containers
* -f : statefull
* -l : stateless

#### Exemple 1: create Component stateless "Name = Button" in directory "components"
`rcli -cp -l Button`

#### Exemple 2: create Component statefull "Name = Button" in directory "components"
`rcli -cp -f Button`

![button](https://github.com/babakoto/rcli-tools/blob/master/button.png)

#### Exemple 3: create Component statefull "Name = Home" in Directory "containers"
`rcli -ct -f Home`

#### Exemple 4: create Component "Button" in Directory "MyPackages"
`rcli MyPackages -f Button`

![test](https://github.com/babakoto/rcli-tools/blob/master/buttonInPack.png)

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
 
 
