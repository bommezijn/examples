console.log("Hello World");
const btn = document.querySelector("#show-notification");

/* 
  Event that triggers on button click, first check whether the browser allows notifications
*/

btn.addEventListener("click", () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("permission granted");
      new Notification("Permission is Granted.");
    }
  });
});
