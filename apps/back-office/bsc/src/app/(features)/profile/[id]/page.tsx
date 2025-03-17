"use client";
import { useParams } from "next/navigation";
import {
  Table,
  Card,
  Button,
  Divider,
  Modal,
  Checkbox,
  Group,
  Pagination,
  Text,
  TextInput,
  Select,
  ScrollArea,
} from "@mantine/core";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Edit, Trash, Eye } from "lucide-react";
import { Workflows, ApprovalStep } from "../types";

// Mock data
const members = ["Biniam Ewnetu", "Nolawi Mekuriaw", "Solomon Albachew"];
const roles = ["Director", "University Council", "College Council", "College Coordinator", "School Coordinator"];
const approvalMethods = ["Any", "Consensus"];

const ApprovalWorkFlowDetail = () => {
  const { id } = useParams();
  const workflow = Workflows.find((item) => item.id === id);

  const [opened, setOpened] = useState(false);
  const [viewOpened, setViewOpened] = useState(false);
  const [deleteConfirmOpened, setDeleteConfirmOpened] = useState(false);
  const [steps, setSteps] = useState<ApprovalStep[]>(workflow?.steps || []);
  const [selectedStep, setSelectedStep] = useState<ApprovalStep | null>(null);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [approverType, setApproverType] = useState<"Role" | "Custom">("Role");
  const [page, setPage] = useState(1);
  const [modalPage, setModalPage] = useState(1);
  const itemsPerPage = 5;
  const modalItemsPerPage = 5;

  // Open modal for adding/editing roles
  const handleAddRole = (step: ApprovalStep | null = null) => {
    if (step) {
      setSelectedStep(step);
      setSelectedRoles(step.role ? [step.role] : []);
      setSelectedMembers(step.members || []);
      setApproverType(step.role ? "Role" : "Custom");
    } else {
      setSelectedStep(null);
      setSelectedRoles([]);
      setSelectedMembers([]);
      setApproverType("Role");
    }
    setOpened(true);
  };

  // Handle role selection
  const handleRoleChange = (role: string) => {
    setSelectedRoles((prev) => (prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]));
  };

  // Handle member selection
  const handleMemberChange = (member: string) => {
    setSelectedMembers((prev) => (prev.includes(member) ? prev.filter((m) => m !== member) : [...prev, member]));
  };

  // Save changes from modal
  const handleSave = () => {
    if (selectedStep) {
      setSteps((prev) =>
        prev.map((step) =>
          step.id === selectedStep.id
            ? {
                ...step,
                role: approverType === "Role" ? selectedRoles[0] || "" : "",
                members: selectedMembers,
                approvalMethod: step.approvalMethod || (approverType === "Role" ? "Any" : "Consensus"),
              }
            : step
        )
      );
    } else {
      setSteps((prev) => [
        ...prev,
        {
          id: `step-${prev.length + 1}`,
          order: prev.length + 1,
          role: approverType === "Role" ? selectedRoles[0] || "" : "",
          members: selectedMembers,
          approvalMethod: approverType === "Role" ? "Any" : "Consensus",
        },
      ]);
    }
    setOpened(false);
  };

  // Delete step
  const handleDelete = (id: string) => {
    setSteps((prev) => prev.filter((step) => step.id !== id));
    setDeleteConfirmOpened(false);
  };

  // View step details
  const handleView = (step: ApprovalStep) => {
    setSelectedStep(step);
    setViewOpened(true);
  };

  // Handle drag-and-drop reordering
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const reorderedSteps = Array.from(steps);
    const [removed] = reorderedSteps.splice(result.source.index, 1);
    reorderedSteps.splice(result.destination.index, 0, removed);
    setSteps(reorderedSteps.map((step, index) => ({ ...step, order: index + 1 })));
  };

  // Paginated steps
  const paginatedSteps = steps.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Paginated roles and members for modal
  const paginatedRoles = roles.slice((modalPage - 1) * modalItemsPerPage, modalPage * modalItemsPerPage);
  const paginatedMembers = members.slice((modalPage - 1) * modalItemsPerPage, modalPage * modalItemsPerPage);

  return (
    <Card shadow="sm" padding="lg" radius="md" className="bg-white border border-gray-200 rounded-lg mt-4">
      {/* Modal for Adding/Editing Roles */}
      <Modal opened={opened} onClose={() => setOpened(false)} title="Manage Roles & Members" centered size="lg">
        <Group spacing="sm" className="mb-4">
          <Button
            variant={approverType === "Role" ? "filled" : "outline"}
            onClick={() => setApproverType("Role")}
          >
            Role
          </Button>
          <Button
            variant={approverType === "Custom" ? "filled" : "outline"}
            onClick={() => setApproverType("Custom")}
          >
            Custom
          </Button>
        </Group>

        {approverType === "Role" ? (
          <>
            <TextInput placeholder="Search roles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="mb-4" />
            <ScrollArea h={250}>
              <Table>
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedRoles
                    .filter((role) => role.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((role, index) => (
                      <tr key={index}>
                        <td>
                          <Checkbox checked={selectedRoles.includes(role)} onChange={() => handleRoleChange(role)} />
                        </td>
                        <td>{role}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </ScrollArea>
            <Group position="center" className="mt-4">
              <Pagination
                page={modalPage}
                onChange={setModalPage}
                total={Math.ceil(roles.length / modalItemsPerPage)}
              />
            </Group>
          </>
        ) : (
          <>
            <TextInput placeholder="Search members..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="mb-4" />
            <ScrollArea h={250}>
              <Table>
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Member</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedMembers
                    .filter((member) => member.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((member, index) => (
                      <tr key={index}>
                        <td>
                          <Checkbox checked={selectedMembers.includes(member)} onChange={() => handleMemberChange(member)} />
                        </td>
                        <td>{member}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </ScrollArea>
            <Group position="center" className="mt-4">
              <Pagination
                page={modalPage}
                onChange={setModalPage}
                total={Math.ceil(members.length / modalItemsPerPage)}
              />
            </Group>
          </>
        )}

        <Group position="right" className="mt-4">
          <Button onClick={handleSave}>Save</Button>
        </Group>
      </Modal>

      {/* View Modal */}
      <Modal opened={viewOpened} onClose={() => setViewOpened(false)} title="Approval Details" centered>
        <Text size="md">Role: {selectedStep?.role}</Text>
        <Text size="md">Members: {selectedStep?.members?.join(", ") || "None"}</Text>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal opened={deleteConfirmOpened} onClose={() => setDeleteConfirmOpened(false)} title="Confirm Delete" centered>
        <Text size="md">Are you sure you want to delete this step?</Text>
        <Group position="right" className="mt-4">
          <Button variant="outline" onClick={() => setDeleteConfirmOpened(false)}>Cancel</Button>
          <Button color="red" onClick={() => selectedStep && handleDelete(selectedStep.id)}>Delete</Button>
        </Group>
      </Modal>

      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <Text size="xl" weight={500} className="text-blue-800">{workflow?.name}</Text>
        <Button onClick={() => handleAddRole(null)}>Add Role</Button>
      </div>

      {/* Table with Drag-and-Drop */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="steps">
          {(provided) => (
            <Table striped highlightOnHover {...provided.droppableProps} ref={provided.innerRef}>
              <thead>
                <tr>
                  <th className="text-left px-4 py-2">Display Name</th>
                  <th className="text-left px-4 py-2">Approver Type</th>
                  <th className="text-left px-4 py-2">Approval Method</th>
                  <th className="text-left px-4 py-2">Order</th>
                  <th className="text-right px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedSteps.map((step, index) => (
                  <Draggable key={step.id} draggableId={step.id} index={index}>
                    {(provided) => (
                      <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <td className="px-4 py-2">{step.role || "Custom"}</td>
                        <td className="px-4 py-2">{step.role ? "Role" : "Custom"}</td>
                        <td className="px-4 py-2">
                          <Select
                            data={approvalMethods}
                            value={step.approvalMethod || (step.role ? "Any" : "Consensus")}
                            onChange={(value) => {
                              setSteps((prev) =>
                                prev.map((s) =>
                                  s.id === step.id ? { ...s, approvalMethod: value || (step.role ? "Any" : "Consensus") } : s
                                )
                              );
                            }}
                          />
                        </td>
                        <td className="px-4 py-2">{step.order}</td>
                        <td className="px-4 py-2 text-right">
                          <Group spacing="xs" position="right">
                            <Button variant="subtle" size="xs" onClick={() => handleView(step)}><Eye size={16} /></Button>
                            <Button variant="subtle" size="xs" onClick={() => handleAddRole(step)}><Edit size={16} /></Button>
                            <Button variant="subtle" size="xs" onClick={() => { setSelectedStep(step); setDeleteConfirmOpened(true); }} color="red"><Trash size={16} /></Button>
                          </Group>
                        </td>
                      </tr>
                    )}
                  </Draggable>
                ))}
              </tbody>
            </Table>
          )}
        </Droppable>
      </DragDropContext>

      {/* Pagination */}
      <Group position="center" className="mt-4">
        <Pagination
          page={page}
          onChange={setPage}
          total={Math.ceil(steps.length / itemsPerPage)}
        />
      </Group>
    </Card>
  );
};

export default ApprovalWorkFlowDetail;