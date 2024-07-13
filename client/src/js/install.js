export const initInstallButton = () => {
  const installButton = document.getElementById("installButton");
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = "block";

    installButton.addEventListener("click", () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        deferredPrompt = null;
      });
    });
  });

  window.addEventListener("appinstalled", () => {
    console.log("PWA installed");
  });
};
