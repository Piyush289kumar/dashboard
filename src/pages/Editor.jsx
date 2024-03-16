import React from "react";
import { Header } from "../components";
import {
  RichTextEditorComponent,
  HtmlEditor,
  Image,
  Link,
  QuickToolbar,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy";
function Editor() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category={"App"} title={"Blog Editor"} />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default Editor;
