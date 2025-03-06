"use client";
import "quill/dist/quill.snow.css";
import "quill-table-ui/dist/index.css";
import { useQuill } from "react-quilljs";

import { useEffect, useRef } from "react";

import * as QuillTableUI from "quill-table-ui";

export default function TextEditor() {
  const { quill, quillRef, Quill } = useQuill({
    placeholder: "Write something...",
    formats: ["header", "bold", "italic", "underline", "list", "link", "image", "table"],
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],

        // Add table module
        [{ table: true }],
      ],
      table: true,
      tableUI: true,
    },
  });

  // Store table module reference
  const tableModuleRef = useRef(null);

  if (Quill && !quill) {
    // Quill.register('modules/magicUrl', MagicUrl);
    Quill.register("modules/tableUI", QuillTableUI.default, true);
  }

  useEffect(() => {
    if (quill) {
      // Store the table module reference when quill is initialized
      tableModuleRef.current = quill.getModule("table");

      quill.on("text-change", (delta, oldDelta, source) => {
        console.log("Text change!");
        console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  const handleInsertTable = () => {
    if (tableModuleRef.current) {
      // Insert a table with 3 rows and 3 columns
      tableModuleRef.current.insertTable(3, 3);
    }
  };

  return (
    <div className="max-w-3xl">
      <button
        className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={handleInsertTable}
      >
        Insert Table
      </button>
      <div ref={quillRef} />
    </div>
  );
}
