//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

// focus first input by default
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      input.value = "";

      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });

  input.addEventListener("input", () => {
    if (input.value !== "" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});

