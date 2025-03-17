import { useState } from "react";
import { Modal, TextInput, Button } from "@mantine/core";
import { ApprovalStep } from "../(features)/profile/types";

interface ApprovalStepFormProps {
  step?: ApprovalStep | null;
  onClose: () => void;
  onSubmit: (data: ApprovalStep) => void;
}

const ApprovalStepForm: React.FC<ApprovalStepFormProps> = ({ step, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<ApprovalStep>({
    id: step?.id || "", // Empty if new role
    order: step?.order || 0,
    role: step?.role || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData); // Call parent function (add or update)
    onClose();
  };

  return (
    <div>
      <TextInput label="Role Name" name="role" value={formData.role} onChange={handleChange} required />
      <TextInput label="Order" name="order" type="number" value={formData.order} onChange={handleChange} required />

      <div className="flex justify-end gap-2 mt-4">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{step ? "Update" : "Add Role"}</Button>
      </div>
    </div>
  );
};

export default ApprovalStepForm;
