import React from 'react'

type ReturnType<T extends any> = React.LegacyRef<T> & React.MutableRefObject<T>;


//takes a fowardRef ref and returns an useable ref for the component
//the fowardRef still works but now as targetRef
export default function <T extends any>(fowardRef  : React.ForwardedRef<T>) : ReturnType<T>  {
  const targetRef = React.useRef<T | any>()

  React.useEffect(() => {

    if (!fowardRef) return

    if (typeof fowardRef === 'function') {
      fowardRef(targetRef.current)
    } else {
      fowardRef.current = targetRef.current
    }
  }, [fowardRef])

  return targetRef as ReturnType<T>
}