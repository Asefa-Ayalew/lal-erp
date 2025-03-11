import { Button } from '@mantine/core'
import React from 'react'

export const MyButtons = () => {
  return (
    <div>
      <Button variant="filled">Primary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="light">Light Button</Button>
      <Button loading>Loading Button</Button>
    </div>
  )
}
