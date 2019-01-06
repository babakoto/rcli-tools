rcli-tools

### Install:
`npm i rcli-tools -g`

### Command 
* -cp : components
* -ct : containers
* -f : statefull
* -l : stateless

#### Exemple 1: create a component stateless 
    * -cp : place your component in "src/ **components**/Button"
`rcli -cp -l Button`

#### Exemple 2: create a component statefull 
* -cp : place your component in src/**components**/Button"
`rcli -cp -f Button`

![button](https://github.com/babakoto/rcli-tools/blob/master/button.PNG)

#### Exemple 3: create a container 
* -ct : place your component in "src/**containers**/Home"
`rcli -ct -f Home`

#### Exemple 4: create a component *Button* in the *MyPackages* folder 
`rcli MyPackages -f Button`

![test](https://github.com/babakoto/rcli-tools/blob/master/buttonInPack.PNG)

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
 
 
