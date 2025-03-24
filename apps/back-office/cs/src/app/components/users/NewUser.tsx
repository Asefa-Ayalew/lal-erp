"use client";

import { useState, useEffect } from "react";
import * as z from "zod";
import { useRouter } from "next/navigation";

const validationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
});

const NewUserComponent = ({ userId }: { userId?: string }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      // Simulate fetching user data
      setTimeout(() => {
        setFormData({ name: "Example User", email: "example@gmail.com" });
      }, 500);
    }
  }, [userId]);

  const handleSubmit = async () => {
    setLoading(true);
    if (userId) {
      alert("Updating user: " + JSON.stringify(formData));
    } else {
      alert("Saving new user: " + JSON.stringify(formData));
    }
    setLoading(false);
    router.push("/users");
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-semibold">{userId ? "Edit User" : "New User"}</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="block border p-2 w-full mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="block border p-2 w-full mb-2"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        {userId ? "Update" : "Save"}
      </button>
    </div>
  );
};

export default NewUserComponent;
