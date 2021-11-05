import React from "react";
import EasyMDE from "easymde";
import "easymde/dist/easymde.min.css";

export class Editor extends React.Component {
  render() {
    return (
      <>
        <textarea
          ref={(ref) => (this.textareaRef = ref)}
          defaultValue="With Ref"
        />
      </>
    );
  }
  componentDidMount() {
    new EasyMDE({
      element: this.textareaRef,
      autoDownloadFontAwesome: false,
      toolbar: [
        {
          name: "bold",
          action: EasyMDE.toggleBold,
          className: "fa fa-bolt",
          title: "Bold",
        },
        "|",
        {
          // Separator
          name: "alert",
          action: (editor) => {
            alert("This is from a custom button action!");
            // Custom functions have access to the `editor` instance.
          },
          className: "fa fa-star",
          title: "A Custom Button",
        },
        "|",
        {
          name: "link",
          action: "https://github.com/Ionaru/easy-markdown-editor",
          className: "fa fab fa-github",
          title: "A Custom Link",
        },
      ],
      initialValue:
        "## Custom Toolbar \n Custom functions, icons and buttons can be defined for the toolbar.",
    });
  }
}
