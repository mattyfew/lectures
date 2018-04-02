# React Animations

There are several npm libraries available that allow us to easily implement cool animations and loaders into our React applications.

## react-spinners

[react-spinners](https://github.com/davidhu2000/react-spinners) is a library that lets us easily implement pre-built loading spinners.  You can see the available types of spinners on their [homepage](http://www.davidhu.io/react-spinners/).

Note that at the top of their github, the authors say that this package depends on `emotion`. We don't need to install anything extra (react-spinners will take care of that), but we do need to edit our babel configurations.  Where we list our plugins, we must add emotion:

```javascript
{
    presets: ['stage-0', 'es2015', 'react'],
        plugins: [
            'transform-async-to-generator',
            'transform-object-rest-spread',
            'emotion'
        ]
}
```

After that, implementation is very straightforward.

```javascript
import React, { Component } from 'react'
import { RingLoader } from 'react-spinners'

class AwesomeComponent extends Component {
    render() {
        return (
	        <div className='sweet-loading'>
            	<RingLoader color={'#123abc'} loading={true}/>
        	</div>
        )
    }
}

```

