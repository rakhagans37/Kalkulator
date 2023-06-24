let darkmode = document.getElementById("checktheme");
darkmode.addEventListener("change", () => {
   if (darkmode.checked) {
      document.body.classList.add("dark");
      document
         .getElementById("button-package")
         .classList.add("darkbutton-package");
      document.getElementById("samadengan").classList.add("dark");
      document.getElementById("total").classList.add("dark");
      document.getElementById("operation").classList.add("dark");
      document.getElementById("special-func").classList.add("dark");
      document.getElementById("number-package").classList.add("dark");
      document.getElementById("right-side").classList.add("dark");
   } else {
      document.body.classList.remove("dark");
      document
         .getElementById("button-package")
         .classList.remove("darkbutton-package");
      document.getElementById("samadengan").classList.remove("dark");
      document.getElementById("total").classList.remove("dark");
      document.getElementById("operation").classList.remove("dark");
      document.getElementById("special-func").classList.remove("dark");
      document.getElementById("number-package").classList.remove("dark");
      document.getElementById("right-side").classList.remove("dark");
   }
});
