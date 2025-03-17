import { Modal, Autocomplete, Checkbox, Group, Text, TextInput, Button } from "@mantine/core";
import { ApprovalStep } from "../(features)/profile/types";

interface ApprovalStepModalProps {
  opened: boolean;
  onClose: () => void;
  selectedStep: ApprovalStep | null;
  newRoleTitle: string;
  setNewRoleTitle: (value: string) => void;
  selectedRoles: string[];
  setSelectedRoles: (roles: string[]) => void;
  selectedMembers: string[];
  setSelectedMembers: (members: string[]) => void;
  roles: string[];
  members: string[];
  onSave: () => void;
}

const ApprovalStepModal = ({
  opened,
  onClose,
  selectedStep,
  newRoleTitle,
  setNewRoleTitle,
  selectedRoles,
  setSelectedRoles,
  selectedMembers,
  setSelectedMembers,
  roles,
  members,
  onSave,
}: ApprovalStepModalProps) => {
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

  return (
    <Modal
      opened={opened}
      onClose={onClose}
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
        <Button onClick={onSave}>Save</Button>
      </Group>
    </Modal>
  );
};

export default ApprovalStepModal;