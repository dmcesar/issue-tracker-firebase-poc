"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        console.log(data);
        //await axios.post("/api/issues", data);
        //router.push("/issues");
      })}
    >
      <TextField.Root placeholder="Title" {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <SimpleMDE
            placeholder="Issue description..."
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Button type="submit">Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
