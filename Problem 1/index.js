function BtnClick(val) {
  document.getElementById("screen").value += val;
  //   console.log(val);
  // document.getElementById("screen").value + val;
}

function displayClear() {
  //   debugger;
  document.getElementById("screen").value = "";
}

function result() {
  var input = document.getElementById("screen").value;
  var result = eval(input);
  document.getElementById("screen").value = result;
}

function clearSingle() {
  let displayValue = document.getElementById("screen");
  if (displayValue.value.length > 0) {
    let updatedValue = displayValue.value.substring(
      0,
      displayValue.value.length - 1
    );
    displayValue.value = updatedValue;
  }
}
