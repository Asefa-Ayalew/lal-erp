
import { useRouter } from 'next/navigation';
import { Card } from '@mantine/core'
import React from 'react'

interface ApprovalWorkFlowProps{
    id: string;
    name: string;
}

const ApprovalWorkFlow: React.FC<ApprovalWorkFlowProps> = ({id, name}) => {

    const router = useRouter();

    const handleClick = () => {
      router.push(`/profile/${id}`); // Navigate to the detail page
    };

  return (
    <button onClick={handleClick} className="w-full text-left">
      <Card padding="lg" radius="md" className="bg-white border border-gray-200 rounded-lg mt-4 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-red">{name}</h3>
      </Card>
    </button>
  )
}

export default ApprovalWorkFlow