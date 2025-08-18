import React, { useState } from "react";
import FormInput from "../../../FormInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useAddTerms from "../../../../hooks/adminMining/useAddTerms";
import Loading from "../../../Loading";

export default function AddNewTermsForm({ refetch }) {
  const [version, setVersion] = useState("");
  const [content, setContent] = useState("");
  const { loading, addTerms } = useAddTerms();
  return (
    <div className="p-5 rounded-md bg-gray-50">
      <FormInput
        admin
        title={"Version"}
        type={"text"}
        placeholder={"Enter the version"}
        value={version}
        onchange={(e) => setVersion(e.target.value)}
      />
      <p className="text-sm mb-3">Content</p>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={(value) => setContent(value)}
        className="bg-white rounded-lg mb-5"
      />
      <button
        onClick={async () => {
          await addTerms({ content, version });
          refetch();
        }}
        className="px-4 py-2 bg-homeBg hover:bg-homeBgGradient text-white rounded-md"
      >
        Add
      </button>
      {loading && <Loading />}
    </div>
  );
}
