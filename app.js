import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Image from "@ckeditor/ckeditor5-image/src/image";
import CKEditorInspector from "@ckeditor/ckeditor5-inspector";
import List from "@ckeditor/ckeditor5-list/src/list";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";
import SimpleBox from "./simplebox/simplebox";
import InsertImage from "./insertimage";

ClassicEditor.create(document.querySelector("#editor"), {
  // Add Image to the plugin list.
  plugins: [
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Image,
    InsertImage,
    Heading,
    List,
    SimpleBox,
    SourceEditing,
    InsertImage,
  ],
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "numberedList",
    "bulletedList",
    "|",
    "insertImage",
    "simpleBox",
    "|",
    "sourceEditing",
  ],
}).then((editor) => {
  if (process.env.NODE_ENV === "development") {
    CKEditorInspector.attach(editor);
  }
});
