import { saveContent, getContent } from "./database";

export const initEditor = async () => {
  const editor = document.createElement("textarea");
  editor.id = "editor";
  document.getElementById("app").appendChild(editor);

  const content = await getContent();
  if (content) {
    editor.value = content;
  }

  editor.addEventListener("blur", () => {
    saveContent(editor.value);
  });
};
