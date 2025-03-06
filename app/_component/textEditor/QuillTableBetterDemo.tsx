import QuillTableBetter from "quill-table-better";
import "quill-table-better/dist/quill-table-better.css";
import { useMemo, useRef } from "react";
import { Controller } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

Quill.register({ "modules/table-better": QuillTableBetter }, true);

const QuillTableBetterDemo = ({
  control,
  name,
  label,
  errors,
  placeholder,
  readOnly,
}: {
  control: any;
  name: string;
  label: string;
  errors: string | undefined;
  placeholder: string;
  readOnly?: boolean;
}) => {
  const quillRef = useRef(null);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: 1 }, { header: 2 }], // custom button values
          ["bold", "italic", "underline", "strike"], // toggled buttons
          ["link", "image"],
          [{ list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          [{ direction: "rtl" }], // text direction
          [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],
          // ['tableUI']
          ["table-better"], // Add table tool
        ],
      },
      table: false,
      "table-better": {
        language: "en_US",
        menus: ["column", "row", "merge", "table", "cell", "wrap", "copy", "delete"],
        toolbarTable: true,
      },
      keyboard: {
        bindings: QuillTableBetter.keyboardBindings,
      },
    }),
    []
  );

  // Simulate the initialization data
  // function initValue() {
  //   const html = `
  //   <table style="width: 216px" class="ql-table-better">
  //   <tbody>
  //     <tr>
  //       <td data-row="row-kbbt" width="72" class="">
  //         <p class="ql-table-block" data-cell="cell-pqbh">1</p>
  //       </td>
  //       <td data-row="row-kbbt" width="72" style="background-color: #4d99e6; " class="">
  //         <p class="ql-table-block" data-cell="cell-6vwb">2</p>
  //       </td>
  //       <td data-row="row-kbbt" width="72" style="background-color: #4d99e6; " class="">
  //         <p class="ql-table-block" data-cell="cell-sbdd">3</p>
  //       </td>
  //     </tr>
  //     <tr>
  //       <td data-row="row-j9rd" width="72" class="">
  //         <p class="ql-table-block" data-cell="cell-hbqz">4</p>
  //       </td>
  //       <td data-row="row-j9rd" width="72" class="">
  //         <p class="ql-table-block" data-cell="cell-kgtt">5</p>
  //       </td>
  //       <td data-row="row-j9rd" width="72" class="">
  //         <p class="ql-table-block" data-cell="cell-2pu4">6</p>
  //       </td>
  //     </tr>
  //     <tr>
  //       <td data-row="row-inie" width="72" class="">
  //         <p class="ql-table-block" data-cell="cell-x6xx">7</p>
  //       </td>
  //       <td data-row="row-inie" width="72" class="">
  //         <p class="ql-table-block ql-align-center" data-cell="cell-8axw">8</p>
  //       </td>
  //       <td data-row="row-inie" width="72" class="">
  //         <p class="ql-table-block ql-align-center" data-cell="cell-45td">9</p>
  //       </td>
  //     </tr>
  //   </tbody>
  // </table>
  //   `;
  //   const editor = quillRef.current.getEditor();
  //   const delta = editor.clipboard.convert({ html });
  //   const [range] = editor.selection.getRange();
  //   editor.updateContents(delta, Quill.sources.USER);
  //   editor.setSelection(delta.length() - (range?.length || 0), Quill.sources.SILENT);
  //   editor.scrollSelectionIntoView();
  // }

  // useEffect(() => {
  //   if (quillRef.current) initValue();
  // }, [quillRef]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <>
            <p className="mt-1">
              {label} <sup className={"text-danger text"}>*</sup>
            </p>
            <ReactQuill
              ref={quillRef}
              theme={"snow"}
              placeholder={placeholder || "lead wolly ganteng"}
              modules={modules}
              className={`${errors ? "rounded-[7px] border border-red-500 " : ""} -mt-3`}
              readOnly={readOnly}
              value={field.value}
              onChange={(val) => {
                const value = val === "<p><br></p>" ? "" : val;
                field.onChange(value);
              }}
            />

            {errors && <p className="text-error text-caption">{errors}</p>}
          </>
        );
      }}
    />
  );
};

export default QuillTableBetterDemo;
