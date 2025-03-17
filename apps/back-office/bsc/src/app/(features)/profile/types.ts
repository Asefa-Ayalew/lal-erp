export type ApprovalStatus = 'pending' | 'approved' | 'rejected';

export interface ApprovalStep {
  id: string;
  role: string;
  order: number;
}

export interface Workflow {
  id: string;
  name: string;
  steps: ApprovalStep[];
}

export const Workflows: Workflow[] = [
  {
    id: 'tender-initiation',
    name: 'Tendering Initiation Workflow',
    steps: [
      { id: 'step-1', role: 'Initiator', order: 1 },
      { id: 'step-2', role: 'Manager', order: 2 },
      { id: 'step-3', role: 'Director', order: 3 },
    ],
  },
  {
    id: 'tender-preparation',
    name: 'Tendering Preparation Workflow',
    steps: [
      { id: 'step-1', role: 'Procurement Officer', order: 1 },
      { id: 'step-2', role: 'Finance Head', order: 2 },
      { id: 'step-3', role: 'Approval Committee', order: 3 },
    ],
  },
  {
    id: 'tender-direct-prep',
    name: 'Tendering Direct Preparation Workflow',
    steps: [
      { id: 'step-1', role: 'Project Lead', order: 1 },
      { id: 'step-2', role: 'Legal Team', order: 2 },
      { id: 'step-3', role: 'CEO', order: 3 },
    ],
  },
  {
    id: 'tender-amendment',
    name: 'Tendering Amendment Workflow',
    steps: [
      { id: 'step-1', role: 'Initiator', order: 1 },
      { id: 'step-2', role: 'Legal Advisor', order: 2 },
      { id: 'step-3', role: 'Executive Board', order: 3 },
    ],
  },
  {
    id: 'tender-endorsement',
    name: 'Tendering Endorsement Workflow',
    steps: [
      { id: 'step-1', role: 'Technical Team', order: 1 },
      { id: 'step-2', role: 'Manager', order: 2 },
      { id: 'step-3', role: 'CEO', order: 3 },
    ],
  },
  {
    id: 'tender-award',
    name: 'Tendering Award Workflow',
    steps: [
      { id: 'step-1', role: 'Bid Committee', order: 1 },
      { id: 'step-2', role: 'Procurement Head', order: 2 },
      { id: 'step-3', role: 'Board of Directors', order: 3 },
    ],
  },
  {
    id: 'pre-endorsement',
    name: 'Pre Endorsement Workflow',
    steps: [
      { id: 'step-1', role: 'Project Coordinator', order: 1 },
      { id: 'step-2', role: 'Finance Manager', order: 2 },
      { id: 'step-3', role: 'Executive Director', order: 3 },
    ],
  },
  {
    id: 'post-endorsement',
    name: 'Post Endorsement Workflow',
    steps: [
      { id: 'step-1', role: 'Compliance Officer', order: 1 },
      { id: 'step-2', role: 'Auditor', order: 2 },
      { id: 'step-3', role: 'CEO', order: 3 },
    ],
  },
];
