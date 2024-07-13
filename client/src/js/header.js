const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.textContent = "PWA Text Editor";
  header.appendChild(title);

  return header;
};

export default createHeader;
