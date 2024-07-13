import createHeader from "./header";
import { initDB, saveContent, getContent } from "./database";
import { initEditor } from "./editor";
import { initSW } from "./registerSW";
import { initInstallButton } from "./install";

document.addEventListener("DOMContentLoaded", async () => {
  // await initDB();
  // initEditor();
  // initSW();
  // initInstallButton();
  
  const app = document.getElementById("app");
  app.appendChild(createHeader());

  // Further initialization code can go here
  const editor = document.createElement("textarea");
  editor.id = "editor";
  app.appendChild(editor);

  // Add an install button if desired
  const installButton = document.createElement("button");
  installButton.textContent = "Install";
  app.appendChild(installButton);
});
