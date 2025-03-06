"use client";

import { useForm } from "react-hook-form";
import DisplayText from "../_component/textEditor/DisplayText";
import QuillTableBetterDemo from "../_component/textEditor/QuillTableBetterDemo";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { mockHtml } from "@/mock";

interface FormData {
  body: string;
}

const schema = yup.object().shape({
  body: yup.string().required("Konten harus diisi"),
});

export default function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  useEffect(() => {
    setValue("body", mockHtml.body);
  }, []);

  return (
    <div>
      <form
        className="max-w-7xl mx-auto my-4 flex flex-col gap-4 bg-white min-h-[640px] dark:text-black p-4 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <DisplayText />

        <QuillTableBetterDemo
          control={control}
          errors={errors.body?.message}
          name="body"
          label="isi ajah"
          placeholder="Write smth"
        />
        {/* <TextEditor /> */}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-fit">
          Submit
        </button>
      </form>
    </div>
  );
}
