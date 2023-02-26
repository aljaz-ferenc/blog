import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

export default function Code({ code, display }) {
  return (
    <CodeEditor
      value={code}
      language="jsx"
      style={{
        // fontSize: 14,
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        display: display === "inline" && "inline-block",
        transform: display === "inline" && "translateY(30%)",
        // padding:  display === "inline" ? "0" : '5',
        borderRadius: "10px",
        // margin: display === "inline" ? '0' : ".5rem",
      }}
    />
  );
}
