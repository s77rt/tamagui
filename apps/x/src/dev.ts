import React, { startTransition, useCallback } from 'react'

const og = React.useState
// @ts-ignore
React.useState = (...args) => {
  // @ts-ignore
  const [useit, setit] = og(...args)
  const wrapped = useCallback(() => {
    return (...args) => {
      startTransition(() => {
        // @ts-ignore
        setit(...args)
      })
    }
  }, [setit])
  return [useit, wrapped]
}

const og2 = React.useReducer
// @ts-ignore
React.useReducer = (...args) => {
  // @ts-ignore
  const [useit, setit] = og2(...args)
  const wrapped = useCallback(() => {
    return (...args) => {
      startTransition(() => {
        // @ts-ignore
        setit(...args)
      })
    }
  }, [setit])
  return [useit, wrapped]
}