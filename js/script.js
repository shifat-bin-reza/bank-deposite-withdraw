document.getElementById("btn-login").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "md.rudro1999@gmail.com" && password === "password") {
    window.location.href = "dashboard.html";
  } else {
    const inputs = document.getElementsByClassName("input");
    for (const input of inputs) {
      input.style.borderColor = "red";
      input.addEventListener("focusin", function () {
        input.style.borderColor = "grey";
      });
    }

    document.getElementById("invalid-info").style.display = "block";
  }
});
