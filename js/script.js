const inputFullName = document.querySelector("#fullname");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const inputBirthday = document.querySelector("#birthday");
const inputPassword = document.querySelector("#password");
const inputRePassword = document.querySelector("#confirmpassword");
const btnSubmit = document.querySelector(".btn-submit");
const resultFullName = document.querySelector(".fullname");
const resultEmail = document.querySelector(".email");
const resultPhone = document.querySelector(".phone");
const resultBirthday = document.querySelector(".birthday");
const btnUpload = document.querySelector("#btn-upload");
const imgPreview = document.querySelector(".img-preview");
const imgAdded = document.querySelector(".img-added");

const iconUploadPreview = document.querySelector(".icon-upload-preview");
const btnReset = document.querySelector(".btn-reset");
const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPhone = /^[0][0-9]{2}-[0-9]{3}-[0-9]{4}/;

// click
(function () {
  document
    .querySelector(".wrapper")
    .addEventListener("keydown", function (e) {
      if (e.key === "Shift") {
        submitForm(e);
      } else if (e.key === "Delete") {
        resetData(e);
      }
    });
})();
// bắt lỗi
function Validation(selector, textError = "") {
  if (textError) {
    selector.classList.add("is-invalid");
    selector.classList.remove("is-valid");
    selector.nextElementSibling.textContent = textError;
  } else {
    // ok
    selector.classList.add("is-valid");
    selector.classList.remove("is-invalid");
  }
}
// chữ Hoa
function addFullname(str) {
  let arrStr = str.toLowerCase().split(" ");
  let result = "";
  arrStr.forEach((e) => {
      e = e.charAt(0).toUpperCase() + e.substr(1);
      result += e + " ";
  });
  return result;
}

inputFullName.addEventListener("change", function() {
  if(inputFullName.value) {
      inputFullName.value = addFullname(inputFullName.value);
    }
  }
)


//fullname
inputFullName.addEventListener("input", function () {
  if (inputFullName.value.trim().length > 50) {
    Validation(
      inputFullName,
      "Tối đa 50 kí tự"
    );
    } else {
      Validation(inputFullName);
    }
    if (!inputFullName.value) {
      inputFullName.classList.remove("is-valid");
    }
  }
);

//email
inputEmail.addEventListener("input", function () {
  if (inputEmail.value.trim().length > 50) {
    Validation(inputEmail, "Email max length is 50 characters");
  } else if (!regexEmail.test(inputEmail.value.trim())) {
    Validation(inputEmail, "Email invalid");
  } else {
    Validation(inputEmail);
  }
  if (!inputEmail.value) {
    inputEmail.classList.remove("is-valid");
  }
});
//phone
inputPhone.addEventListener("input", function () {
  if (inputPhone.value.trim().length > 12) {
    Validation(inputPhone, "Phone max length is 10 characters");
  } else if (!regexPhone.test(inputPhone.value.trim())) {
    Validation(
      inputPhone,
      "Phone number in the format: 090-123-4567"
    );
  } else {
    Validation(inputPhone);
  }
  if (!inputPhone.value) {
    inputEmail.classList.remove("is-valid");
  }
});

  //birthday
  inputBirthday.addEventListener("input", function () {
    if (inputBirthday.value) {
      Validation(inputBirthday);
    }
    if (!inputBirthday.value) {
      inputBirthday.classList.remove("is-valid");
    }
  });

  //password
  inputPassword.addEventListener("input", function () {
    if (
      inputPassword.value.trim().length > 7 &&
      inputPassword.value.trim().length <= 30
    ) {
      // Bắt đầu bằng chữ
      if (!/^[a-zA-Z]{1}/.test(inputPassword.value.trim())) {
        return Validation(
          inputPassword,
          "Password must start with letter"
        );
      } else {
        Validation(inputPassword);
      }

      // Kí tự đặc biệt
      if (!/[!@#$%^&*()_+}{[\]:'}]/.test(inputPassword.value.trim())) {
        return Validation(
          inputPassword,
          "Password must contain special characters"
        );
      } else {
        Validation(inputPassword);
      }

      // Number
      if (!/[\d]/.test(inputPassword.value.trim())) {
        return Validation(
          inputPassword,
          "Password must contain number characters"
        );
      } else {
        Validation(inputPassword);
      }

      // Chữ hoa
      if (!/[A-Z]/.test(inputPassword.value.trim())) {
        return Validation(
          inputPassword,
          "Password must contain uppercase characters"
        );
      } else {
        Validation(inputPassword);
      }
    } else {
      Validation(inputPassword, "Password length 8 - 30 characters");
    }

    if (!inputPassword.value) {
      inputPassword.classList.remove("is-valid");
    }
  });

  //confirm password
  inputRePassword.addEventListener("input", function () {
    if (inputRePassword.value !== inputPassword.value) {
      Validation(inputRePassword, "Mật khẩu không khớp");
    } else {
      Validation(inputRePassword);
    }

    if (!inputRePassword.value) {
      inputRePassword.classList.remove("is-invalid");
    }
  });

  // btnUpload.addEventListener("change", function () {
  //   const [avatar] = btnUpload.files;
  //   if (
  //     avatar &&
  //     (avatar.type == "image/jpeg" ||
  //       avatar.type == "image/png" ||
  //       avatar.type == "image/jpg")
  //   ) {
  //     avatarUpload.style.display = "block";
  //     avatarUpload.src = URL.createObjectURL(avatar);
  //     iconUploadAvatar.style.display = "none";
  //   } else {
  //     avatarWrapper.children[2].textContent = "Not file img";
  //   }
  // });

  // upload ảnh
  btnUpload.addEventListener("change", function (e) {
    const [file] = btnUpload.files;
    if (file) {
      imgPreview.style.display = "block";
      console.log(imgPreview)
      imgPreview.src = URL.createObjectURL(file);
      iconUploadPreview.style.display = "none";
    }
  });

  btnSubmit.addEventListener("click", submitForm);
  btnReset.addEventListener("click", resetData);

  function submitForm(e) {
    e.preventDefault();
    if (inputFullName.value.length < 1) {
      Validation(inputFullName, "Nhập vào FullName");
    }
    if (inputEmail.value.length < 1) {
      Validation(inputEmail, "Nhập vào Email");
    }
    if (inputPhone.value.length < 1) {
      Validation(inputPhone, "Nhập vào Phone");
    }
    if (inputBirthday.value.length < 1) {
      Validation(inputBirthday, "Nhập vào Birthday");
    }
    if (inputPassword.value.length < 1) {
      Validation(inputPassword, "Nhập vào Password");
    }
    if (inputRePassword.value.length < 1) {
      Validation(inputRePassword, "Nhập lại Password");
    }

    const listInvalid = document.querySelectorAll("input.is-invalid");
    if ([...listInvalid].length !== 0) return;

    resultFullName.innerText = inputFullName.value;
    resultEmail.innerText = inputEmail.value;
    resultPhone.innerText = inputPhone.value;
    resultBirthday.innerText = inputBirthday.value
      .split("-")
      .reverse()
      .join("/");

    // clear input
    // setTimeout(() => {
    //   return resetData(e);
    // }, 11000);
    imgAdded.src = imgPreview.src;
    
  }

  function resetData(e) {
    e.preventDefault();
    const listValid = document.querySelectorAll("input.is-valid");
    const listInvalid = document.querySelectorAll("input.is-invalid");
    document.querySelectorAll("input").forEach((element) => {
      element.value = "";
    });
    [...listInvalid].forEach((element) => {
      element.classList.remove("is-invalid");
    });
    [...listValid].forEach((element) => {
      element.classList.remove("is-valid");
    });
    imgPreview.src = ""
  }

  


// ============




