"use client";

import { TextField, Button, Callout } from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState<string>("");

  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    try {
      await axios.post("http://localhost:3000/api/issues", data);
      router.push("/issues/issueList");
    } catch (error) {
      setError("Unexpected error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">New Issue</h1>
      {error && (
        <Callout.Root className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField.Root
            placeholder="Title"
            className=" bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("title")}
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("description")}
          />
        </div>
        <Button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit new issue
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;