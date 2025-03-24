// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button, TextInput, NumberInput, Select } from "@mantine/core";
// import * as z from "zod";

// export function Form<T>({
//   fields,
//   defaultValues,
//   validationSchema,
//   onSubmit,
// }: {
//   fields: { name: keyof T; label: string; type: "text" | "number" | "select"; options?: string[] }[];
//   defaultValues?: Partial<T>;
//   validationSchema: z.ZodObject<any>;
//   onSubmit: (data: T) => void;
// }) {
//   const { control, handleSubmit } = useForm<T>({
//     defaultValues,
//     resolver: zodResolver(validationSchema),
//   });

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded">
//       {fields.map((field) => (
//         <Controller
//           key={field.name as string}
//           name={field.name}
//           control={control}
//           render={({ field: inputField, fieldState }) => (
//             <>
//               {field.type === "text" && <TextInput {...inputField} label={field.label} error={fieldState.error?.message} />}
//               {field.type === "number" && <NumberInput {...inputField} label={field.label} error={fieldState.error?.message} />}
//               {field.type === "select" && (
//                 <Select {...inputField} label={field.label} data={field.options || []} error={fieldState.error?.message} />
//               )}
//             </>
//           )}
//         />
//       ))}
//       <Button type="submit" fullWidth>{defaultValues ? "Update" : "Save"}</Button>
//     </form>
//   );
// }
