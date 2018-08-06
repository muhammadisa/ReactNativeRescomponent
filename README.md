# react-native-rescomponent
React Native Module that makes your react-native components responsive and fit to various devices Edit
## Getting Started

### Installing the module
```
npm i react-native-rescomponent
```

### Other Way
If you want add to dependencies in package.json
```
npm i --save react-native-rescomponent
```

## How to use

### Import the module
```javascript
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveSize
} from 'react-native-rescomponent'
```

### Import with alias for simple call
```javascript
import {
  responsiveWidth as resWidth,
  responsiveHeight as resHeigth,
  responsiveFontSize as resFontSize,
  responsiveSize as resSize
} from 'react-native-rescomponent'
```

## Implement

### Required Parameter

```javascript
import { responsiveWidth } from 'react-native-rescomponent'
// Use percentage as String
responsiveWidth('100%')
```

### Or

```javascript
import { responsiveWidth } from 'react-native-rescomponent'
// Use percentage as Integer
responsiveWidth(100)
```

### Inside Container component
```javascript
import React, { Component } from 'react'
import { Container } from 'native-base'
import {
  responsiveWidth as resWidth,
  responsiveHeight as resHeigth,
  responsiveFontSize as resFontSize,
  responsiveSize as resSize
} from 'react-native-rescomponent'

export default class MyComponent extends Component{
  render(){
    return(
      <Container style={{
        width: resWidth('100%'),
        height: resHeight('100%')
      }}>
      
        ...
        
       </Container>
    )
  }
}
```
### Inside View component
```javascript
import React, { Component } from 'react'
import { Container } from 'native-base'
import { View } from 'react-native'
import {
  responsiveWidth as resWidth,
  responsiveHeight as resHeigth,
  responsiveFontSize as resFontSize,
  responsiveSize as resSize
} from 'react-native-rescomponent'

export default class MyComponent extends Component{
  render(){
    return(
      <Container style={{width: resWidth('100%'), height: resHeight('100%')}}>
      
        <View style={{width: resSize('50%'), height: resSize('50%')}}>
        
          ...
          
        </View>
        
       </Container>
    )
  }
}
```
