"use client";
import { TextField, Button, Callout } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, SubmitHandler, Controller, set } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface IssueForm {
  title: string;
  description: string;

}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<IssueForm>()
  const [error, setError] = useState('');
  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    try {
      await axios.post('http://localhost:3000/api/issues', data);
      router.push('/issues')
    } catch (error) {
      setError("Unexpected error");
    }

  }
  return (
    <div className="max-w-xl">{error && <Callout.Root>
      <Callout.Text>
        {error}
      </Callout.Text>
    </Callout.Root>
    }
      <form className=" space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root placeholder="Title" {...register('title')} />
        <Controller
          name='description'
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Description" {...field} />}
        />
        <Button> Submit new issue</Button>
      </form>
    </div>

  );
};

export default NewIssuePage;
