const cursor = document.getElementById("cursor");
const links = document.querySelectorAll(".aartema-link");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("link-hover");
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-hover");
  });
});
