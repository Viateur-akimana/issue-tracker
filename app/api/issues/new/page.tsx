"use client";
import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";


interface IssueForm {
  title: string;
  description: string;

}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<IssueForm>()
  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    await axios.post('http://localhost:3000/api/issues', data);
    router.push('/issues')
  }
  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField.Root placeholder="Title" {...register('title')} />
      <Controller
        name='description'
        control={control}
        render={({ field }) => <SimpleMDE placeholder="Description" {...field} />}
      />
      <Button> Submit new issue</Button>
    </form>
  );
};

export default NewIssuePage;
