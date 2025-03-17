import { Card } from '@mantine/core'
import React from 'react'

const OurCard = () => {
  return (
    <Card shadow="md" padding="lg" radius="md" className=" bg-blue-50 border border-gray-200 rounded-lg mt-32">
        <h3 className="text-lg font-semibold text-red">Call for Proposal</h3>
        <div className="py-2">
          <p>Call detail</p>
        </div>
      </Card>
  )
}

export default OurCard