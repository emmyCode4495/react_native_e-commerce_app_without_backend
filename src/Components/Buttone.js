import { Button } from 'native-base'
import React from 'react'

function Buttone({mt,bg,color,children,onPress}) {
  return (
    <Button w="full" h={55} mt={mt}
    bg={bg} 
    rounded="full"
    _text={{color:color, fontWeight:'bold'}}
    _pressed = {{bg:bg}}
    onPresss={onPress}
    >
        {children}
    </Button>
  )
}

export default Buttone;