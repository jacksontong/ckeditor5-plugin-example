import Swal from "sweetalert2";
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import imageIcon from "@ckeditor/ckeditor5-core/theme/icons/image.svg";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

export default class InsertImage extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("insertImage", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Insert image",
        icon: imageIcon,
        tooltip: true,
      });

      // Callback executed once the image is clicked.
      view.on("execute", async () => {
        const { value: imageUrl, isConfirmed } = await Swal.fire({
          title: "Enter image url",
          input: "text",
          inputLabel: "Image url",
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return "Please specify the image url";
            }
          },
        });

        editor.model.change((writer) => {
          if (isConfirmed) {
            const imageElement = writer.createElement("imageBlock", {
              src: imageUrl,
            });

            // Insert the image in the current selection location.
            editor.model.insertContent(
              imageElement,
              editor.model.document.selection
            );
          }
        });
      });

      return view;
    });
  }
}
