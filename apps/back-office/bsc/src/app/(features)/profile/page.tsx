import { Button, Card } from '@lal-erp/ui'
import React from 'react'

const ProfilePage = () => {
  return (
    <div>
      <Button variant="primary">Save</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="loading" disabled>Processing...</Button>

      <hr />
      <Card title="Project Status">
        <p>ERP System is 80% complete.</p>
      </Card>


    </div>
  )
}

export default ProfilePage