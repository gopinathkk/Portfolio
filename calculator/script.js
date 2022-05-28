function writeBtnValue(val) {
  if (result != "" && document.getElementById("screenText").value != "") {
    result = "";
    document.getElementById("screenText").value = "";
    document.getElementById("screenText").value += val;
    val1 = document.getElementById("screenText").value;
  } else {
    document.getElementById("screenText").value += val;
    val1 = document.getElementById("screenText").value;
  }
  console.log(val, val1, val2, result, operator);
}

function resultValue() {
  // document.getElementById("screenText").value = eval(document.getElementById("screenText").value)
  operation = val2 + operator + val1;
  result = eval(operation);
  document.getElementById("screenText").value = result;
  val1 = "";
  val2 = document.getElementById("screenText").value;
  operation = "";
}

function clearScreen() {
  document.getElementById("screenText").value = "";
  val1 = "";
  val2 = "";
  result = "";
  operator = "";
}

function sumBtn(div) {
  if (val2 == "") {
    operator = div;
    val2 = val1;
    val1 = "";
    document.getElementById("screenText").value = "";
  } else if (result == "" && val2 != "") {
    resultValue();
    operator = div;
  } else if (result != "" && val2 != "") {
    resultValue();
    val1 = "";
    operator = div;
    // document.getElementById("screenText").value = val2+val1
    // val1=""
    // val2=document.getElementById("screenText").value
  }
}
function diffBtn(div) {
  if (val2 == "") {
    operator = div;
    val2 = val1;
    val1 = "";
    document.getElementById("screenText").value = "";
  } else if (result == "" && val2 != "") {
    resultValue();
    operator = div;
  } else if (result != "" && val2 != "") {
    resultValue();
    val1 = "";
    operator = div;
  }
}
function productBtn(div) {
  if (val2 == "") {
    operator = div;
    val2 = val1;
    val1 = "";
    document.getElementById("screenText").value = "";
  } else if (result == "" && val2 != "") {
    resultValue();
    operator = div;
  } else if (result != "" && val2 != "") {
    resultValue();
    val1 = "";
    operator = div;
  }
}
function divideBtn(div) {
  if (val2 == "") {
    operator = div;
    val2 = val1;
    val1 = "";
    document.getElementById("screenText").value = "";
  } else if (result == "" && val2 != "") {
    resultValue();
    operator = div;
  } else if (result != "" && val2 != "") {
    resultValue();
    val1 = "";
    operator = div;
  }
}

function mAddition() {
  memor1 = document.getElementById("screenText").value + memor1;
  document.getElementById("screenText").value = memor1;
}
function mSubstract() {
  memor1 = memor1 - document.getElementById("screenText").value;
  document.getElementById("screenText").value = memor1;
}

function mReset() {
  memor1 = "";
}

let val1 = "";
let val2 = "";
let operator = "";
let result = "";
let memor1 = "";

function mAddition(div) {
  document.getElementById("sideText").value = div;
}
function mSubstract(div) {
  document.getElementById("sideText").value = div;
}
function mReset(div) {
  document.getElementById("sideText").value = div;
}
