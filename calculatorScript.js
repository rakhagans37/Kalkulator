let darkmode = document.getElementById("checktheme");
let buttonPackage = document.getElementById("button-package");
let operation = document.getElementById("operation");
let total = document.getElementById("total");
let totalSymbol = document.getElementById("samadengan");
let specialFunc = document.getElementById("special-func");
let numberPackage = document.getElementById("number-package");
let rightSide = document.getElementById("right-side");
let historyImg = document.getElementById("historyImg");
let historyDiv = document.getElementById("historyDiv");
let historyList = document.getElementById("history-list");
let arrayHistory = [];
let numberHistory = 0;

darkmode.addEventListener("change", () => {
   if (darkmode.checked) {
      document.body.classList.add("dark");
      buttonPackage.classList.add("darkbutton-package");
      totalSymbol.classList.add("dark");
      total.classList.add("dark");
      operation.classList.add("dark");
      specialFunc.classList.add("dark");
      numberPackage.classList.add("dark");
      rightSide.classList.add("dark");
      historyImg.src = "img/History.png";
      historyDiv.classList.add("dark");
      historyList.classList.add("dark");
   } else {
      document.body.classList.remove("dark");
      document
         .getElementById("button-package")
         .classList.remove("darkbutton-package");
      totalSymbol.classList.remove("dark");
      total.classList.remove("dark");
      operation.classList.remove("dark");
      specialFunc.classList.remove("dark");
      numberPackage.classList.remove("dark");
      rightSide.classList.remove("dark");
      historyImg.src = "img/Historyl.png";
      historyDiv.classList.remove("dark");
      historyList.classList.remove("dark");
   }
});

function insert(value) {
   operation.textContent = "";
   total.textContent += value;
}

function clearText() {
   operation.textContent = "";
   total.textContent = "";
   totalSymbol.textContent = "";
}

function getTotal() {
   operation.textContent = total.textContent;
   total.textContent = eval(total.textContent);
   totalSymbol.textContent = "=";
   arrayHistory.push([operation.textContent, total.textContent]);
   historyPrint(operation.textContent, total.textContent);
}

let using = 0;
function historyOn() {
   using += 1;
   if (using % 2 == 1) {
      historyList.style.visibility = "visible";
   } else {
      historyList.style.visibility = "hidden";
   }
}

function historyPrint(operationString, totalString) {
   const createDiv = document.createElement("div");
   const createOp = document.createElement("p");
   const createSamaDengan = document.createElement("p");
   const createTotal = document.createElement("p");
   const createDivTotal = document.createElement("div");

   createOp.textContent = operationString;
   createSamaDengan.textContent = "=";
   createTotal.textContent = totalString;

   createDiv.classList.add("history-unit");
   createDiv.setAttribute("onclick", `historyCopy(${numberHistory})`);
   createOp.classList.add("operation");
   createDivTotal.classList.add("history-print");

   historyList.appendChild(createDiv);
   createDiv.appendChild(createOp);
   createDiv.appendChild(createDivTotal);
   createDivTotal.appendChild(createSamaDengan);
   createDivTotal.appendChild(createTotal);

   numberHistory += 1;
}

historyCopy = (index) => {
   historyList.style.visibility = "hidden";
   total.textContent = arrayHistory[index][1];
   operation.textContent = arrayHistory[index][0];
};

repeat = () => {
   operation.textContent =
      total.textContent +
      operation.textContent.substring(
         operation.textContent.length,
         operation.textContent.indexOf(" ")
      );
   total.textContent = eval(operation.textContent);
   arrayHistory.push([operation.textContent, total.textContent]);
   historyPrint(operation.textContent, total.textContent);
};
