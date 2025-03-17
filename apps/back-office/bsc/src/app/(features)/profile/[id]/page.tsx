"use client";
import { useParams } from "next/navigation";
import { Table, Card, Button, Divider, Modal, Autocomplete, Checkbox, Group, Pagination, Text, TextInput } from "@mantine/core";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Workflows, ApprovalStep } from "../types";

// Mock data for members and roles
const members = [
  "Biniam Ewnetu",
  "Nolawi Mekuriaw",
  "Solomon Albachew",
];


const roles = [
  "Director",
  "University Council",
  "College Council",
  "College Coordinator",
  "School Coordinator",
];

const ApprovalWorkFlowDetail = () => {
  const { id } = useParams();
  const workflow = Workflows.find((item) => item.id === id);

  const [opened, setOpened] = useState(false); // Modal state
  const [selectedStep, setSelectedStep] = useState<ApprovalStep | null>(null);
  const [steps, setSteps] = useState<ApprovalStep[]>(workflow?.steps || []);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [newRoleTitle, setNewRoleTitle] = useState(""); // For custom role addition

  // Handle editing an existing step
  const handleEdit = (step: ApprovalStep) => {
    setSelectedStep(step); // Set the existing step
    setSelectedMembers(step.members || []); // Load assigned members
    setSelectedRoles([step.role]); // Load assigned role
    setOpened(true);
  };

  // Handle adding a new role
  const handleAddRole = () => {
    setSelectedStep(null); // No predefined step (for new role)
    setSelectedMembers([]); // Reset members
    setSelectedRoles([]); // Reset roles
    setOpened(true);
  };

  // Handle custom role addition
  const handleCustomRole = () => {
    setSelectedStep(null); // No predefined step
    setSelectedMembers([]); // Reset members
    setSelectedRoles([]); // Reset roles
    setNewRoleTitle(""); // Reset role title
    setOpened(true);
  };

  // Handle drag-and-drop reordering
  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedSteps = Array.from(steps);
    const [removed] = reorderedSteps.splice(result.source.index, 1);
    reorderedSteps.splice(result.destination.index, 0, removed);

    // Update the step order numbers
    const updatedSteps = reorderedSteps.map((step, index) => ({
      ...step,
      order: index + 1,
    }));

    setSteps(updatedSteps);
  };

  // Handle adding a member
  const handleAddMember = (member: string) => {
    if (!selectedMembers.includes(member)) {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  // Handle role selection
  const handleRoleChange = (role: string) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter((r) => r !== role));
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  // Handle saving the step
  const handleSaveStep = () => {
    if (selectedStep) {
      // Update existing step
      const updatedSteps = steps.map((step) =>
        step.id === selectedStep.id
          ? {
              ...step,
              role: selectedRoles[0],
              members: selectedMembers,
            }
          : step
      );
      setSteps(updatedSteps);
    } else if (newRoleTitle) {
      // Add new custom role
      const newStep = {
        id: String(steps.length + 1),
        order: steps.length + 1,
        role: newRoleTitle,
        members: selectedMembers,
      };
      setSteps([...steps, newStep]);
    } else {
      // Add new role from predefined list
      const newStep = {
        id: String(steps.length + 1),
        order: steps.length + 1,
        role: selectedRoles[0],
        members: selectedMembers,
      };
      setSteps([...steps, newStep]);
    }
    setOpened(false);
  };

  if (!workflow) {
    return <p className="text-red-500">Workflow not found!</p>;
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" className="bg-white border border-gray-200 rounded-lg mt-4">
      {/* Modal for Adding or Editing Approval Step */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={selectedStep ? "Edit Approval Step" : newRoleTitle ? "Add Custom Role" : "Add New Role"}
        centered
        size="lg"
      >
        {newRoleTitle ? (
          <TextInput
            label="Role Title"
            placeholder="Enter role title"
            value={newRoleTitle}
            onChange={(e) => setNewRoleTitle(e.target.value)}
            className="mb-4"
          />
        ) : (
          <div className="space-y-4">
            <Text size="sm" weight={500}>
              Select Role
            </Text>
            <div className="space-y-2">
              {roles.map((role, index) => (
                <Checkbox
                  key={index}
                  label={role}
                  checked={selectedRoles.includes(role)}
                  onChange={() => handleRoleChange(role)}
                />
              ))}
            </div>
          </div>
        )}

        <Text size="sm" weight={500} className="mt-4">
          Assign Members
        </Text>
        <Group>
          <Autocomplete
            placeholder="Search here"
            data={members}
            onItemSubmit={(item) => handleAddMember(item.value)}
          />
          <Button>Add</Button>
        </Group>

        {/* Selected Members List */}
        <div className="mt-4">
          {selectedMembers.map((member, index) => (
            <div key={index} className="py-1">
              {member}
            </div>
          ))}
        </div>

        {/* Save Button */}
        <Group position="right" className="mt-4">
          <Button onClick={handleSaveStep}>Save</Button>
        </Group>
      </Modal>

      {/* Header */}
      <div className="flex flex-row justify-between items-center border-b border-gray-200">
        <h2 size="2xl" weight={500} className="font-bold mb-4 text-blue-800">{workflow.name}</h2>
        <div className="flex flex-row items-center gap-4">
          <Button onClick={handleAddRole}>Role</Button> {/* Opens form for new role */}
          <Button onClick={handleCustomRole}>Custom</Button> {/* Opens form for custom role */}
        </div>
      </div>
      <Divider className="mt-2" />

      {/* Drag-and-Drop Table */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="steps">
          {(provided) => (
            <Table
              striped
              highlightOnHover
              withColumnBorders
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <thead>
                <tr>
                  <th className="text-left px-4 py-2">Step Order</th>
                  <th className="text-left px-4 py-2">Role</th>
                  <th className="text-left px-4 py-2">Members</th>
                  <th className="text-right px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {steps.length > 0 ? (
                  steps.map((step, index) => (
                    <Draggable key={step.id} draggableId={step.id} index={index}>
                      {(provided) => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <td className="px-4 py-2">{step.order}</td>
                          <td className="px-4 py-2">{step.role}</td>
                          <td className="px-4 py-2">{step.members?.join(", ")}</td>
                          <td className="flex justify-end px-4 py-2 space-x-2 gap-2">
                            <Button size="xs" onClick={() => handleEdit(step)}>
                              Edit
                            </Button>
                            <Button size="xs">View</Button>
                            <Button
                              size="xs"
                              color="red"
                              onClick={() => {
                                const filteredSteps = steps.filter(
                                  (s) => s.id !== step.id
                                );
                                setSteps(filteredSteps);
                              }}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center text-gray-500 py-3">
                      No steps assigned yet.
                    </td>
                  </tr>
                )}
              </tbody>
              {provided.placeholder}
            </Table>
          )}
        </Droppable>
      </DragDropContext>
    </Card>
  );
};

export default ApprovalWorkFlowDetail;