const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
   button.addEventListener("click", e => {
      const id = button.getAttribute("data-id");
      if (button.classList.contains("liked")) {
         button.classList.remove("liked")
         button.innerHTML = "Me gusta"
      } else {
         button.classList.add("liked");
         button.innerHTML = "Quitar me gusta";
      }
   })
})