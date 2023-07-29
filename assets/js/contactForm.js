const form = document.getElementById("contact-form");
const formResult = document.getElementById("form-result");
const submitButton = document.querySelector(".form__submit");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);

  e.preventDefault();

  const payload = {};

  formData.forEach((value, key) => {
    payload[key] = value;
  });

  const jsonPayload = JSON.stringify(payload);

  formResult.textContent = "Please wait...";
  submitButton.disabled = true;
  submitButton.classList.add("form__submit--disabled");

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: jsonPayload,
  })
    .then(async (response) => {
      let jsonResponse = await response.json();

      if (response.status == 200) {
        formResult.classList.remove("form__result--hidden");
        formResult.textContent = jsonResponse.message;
      } else {
        console.log(response);
        formResult.classList.remove("form__result--hidden");
        formResult.textContent = jsonResponse.message;
      }
    })
    .catch((error) => {
      console.log(error);
      formResult.classList.remove("form__result--hidden");
      formResult.textContent = "Something went wrong. Please try again later.";
    })
    .then(function () {
      form.reset();
      submitButton.disabled = false;
      submitButton.classList.remove("form__submit--disabled");

      setTimeout(() => {
        formResult.classList.add("form__result--hidden");
      }, 5000);
    });
});
