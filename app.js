import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Image from "@ckeditor/ckeditor5-image/src/image";
import CKEditorInspector from "@ckeditor/ckeditor5-inspector";

ClassicEditor.create(document.querySelector("#editor"), {
  // Add Image to the plugin list.
  plugins: [Essentials, Paragraph, Bold, Italic, Image],
}).then((editor) => {
  CKEditorInspector.attach(editor);
});
