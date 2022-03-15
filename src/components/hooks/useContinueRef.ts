import React from 'react'

type ReturnType<T extends any> = React.LegacyRef<T> & React.MutableRefObject<T>;

export default function <T extends any>(fowardRef  : React.ForwardedRef<T>) : ReturnType  {
  const targetRef = React.useRef<ReturnType<T>>()

  React.useEffect(() => {

    if (!fowardRef) return

    if (typeof fowardRef === 'function') {
      fowardRef(targetRef.current)
    } else {
      fowardRef.current = targetRef.current
    }
  }, [fowardRef])

  return targetRef
}