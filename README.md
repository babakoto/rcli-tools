rcli-tools

### Install:
`npm i rcli-tools -g`

### Command 
* -cp : components
* -ct : containers
* -f : statefull
* -l : stateless

## Exemple 1: create Component stateless "Name = Button" 
`npm -cp -l Button`

## Structure
![component_button](https://github.com/babakoto/rcli-tools/blob/master/button.PNG)

## Exemple 2: create Component statefull "Name = Button" 
`npm -cp -f Button`

## Exemple 3: create Container statefull "Name = Home" 
`npm -ct -f Home`

## Exemple 4: create Component "Button" in Directory "MyPackages"
npm MyPackages -f Button
