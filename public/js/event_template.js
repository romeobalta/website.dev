window.addEventListener("load", (event) => {
  document.getElementById("resume-link").addEventListener("click", () => {
    fathom.trackGoal("$OPEN_RESUME_EVENT", 0);
  });
});
