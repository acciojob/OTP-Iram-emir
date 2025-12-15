//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

// focus first box
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("focus", () => {
    if (input.value === "0") {
      input.value = "";
    }
  });

  input.addEventListener("input", () => {
    if (input.value !== "" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
    }
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.value = "0";
    }
  });
});


