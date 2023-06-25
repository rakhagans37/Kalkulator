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

let operation = document.getElementById("operation");
let total = document.getElementById("total");
let totalSymbol = document.getElementById("samadengan");

function insert(value) {
   operation.textContent += value;
}

function clearText() {
   operation.textContent = "";
   total.textContent = "";
   totalSymbol.textContent = "";
}

function getTotal() {
   total.textContent = eval(operation.textContent);
   totalSymbol.textContent = "=";
}
