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
const btnReset = document.querySelector(".btn-reset");
const regexFullname = /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,}$/
const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPhone = /^[0][0-9]{2}-[0-9]{3}-[0-9]{4}/;

// click
(function () {
  document
    .querySelector("html")
    .addEventListener("keydown", function (e) {
      if (e.key === "Shift") {
        submitForm(e);
      } else if (e.key === "Delete") {
        resetData(e);
      }
    });
})();

// bắt lỗi
function validation(selector, textError = "") {
  if (textError) {
    selector.classList.add("is-invalid");
    selector.classList.remove("is-valid");
    selector.nextElementSibling.textContent = textError;
  } else {
    selector.classList.add("is-valid");
    selector.classList.remove("is-invalid");
    selector.nextElementSibling.textContent = '';
  }
}

// chữ Hoa
function addUppercase(str) {
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
      inputFullName.value = addUppercase(inputFullName.value);
    }
  }
)

// required Length
var lengthBetween = function(selector, minLength, maxLength) {
    if(minLength && selector.value.trim().length < minLength) {
        return false;
    }
    if(maxLength && selector.value.trim().length > maxLength) {
        return false;
    }
    return true;
}

inputFullName.addEventListener("input", function() {
  if(!lengthBetween(inputFullName, 0, 50)){
    validation(inputFullName, "Tối đa 50 kí tự");
  } else if(!regexFullname.test(inputFullName.value.trim())){
    validation(inputFullName, "Tên không hợp lệ");
  } else {
    validation(inputFullName);
  }
  if (!inputFullName.value) {
    inputFullName.classList.remove("is-valid");
  }
})


//email
inputEmail.addEventListener("input", function () {
    if (!lengthBetween(inputEmail, 0, 50)) {
      validation(inputEmail, "Tối đa 50 kí tự");
    } else if (!regexEmail.test(inputEmail.value.trim())) {
      validation(inputEmail, "Email không hợp lệ");
    } else {
      validation(inputEmail);
    }
    if (!inputEmail.value) {
      inputEmail.classList.remove("is-valid");
    }
  }
);

//phone
  inputPhone.addEventListener("input", function () {
    if (!lengthBetween(inputPhone, 0, 12)) {
      validation(inputPhone, "Tối đa 10 chữ số");
    } else if (!regexPhone.test(inputPhone.value.trim())) {
      validation(
        inputPhone,
        "Định dạng số đt: 034-255-2949"
      );
    } else {
      validation(inputPhone);
    }
    if (!inputPhone.value) {
      inputEmail.classList.remove("is-valid");
    }
  }
);

//birthday
inputBirthday.addEventListener("input", function () {
    if (inputBirthday.value) {
      validation(inputBirthday);
    }
    if (!inputBirthday.value) {
      inputBirthday.classList.remove("is-valid");
    }
  }
);


//password
inputPassword.addEventListener("input", function () {
  if (lengthBetween(inputPassword, 7, 30)) {
    // Bắt đầu bằng chữ
    if (!/^[A-Z]{1}/.test(inputPassword.value.trim())) {
      return validation(
        inputPassword,
        "Chữ cái đầu tiên phải viết hoa"
      );
    } else {
      validation(inputPassword);
    }
    // Kí tự đặc biệt
    if (!/[!@#$%^&*()_+}{[\]:'}]/.test(inputPassword.value.trim())) {
      return validation(
        inputPassword,
        "Mật khẩu phải chứa kí tự đặc biệt"
      );
    } else {
      validation(inputPassword);
    }
    // Number
    if (!/[\d]/.test(inputPassword.value.trim())) {
      return validation(
        inputPassword,
        "Mật khẩu phải chứa kí tự số"
      );
    } else {
      validation(inputPassword);
    }
    // Chữ hoa
      if (!/[A-Z]/.test(inputPassword.value.trim())) {
        return validation(
          inputPassword,
          "Mật khẩu phải chứa ít nhất 1 chữ hoa"
        );
      } else {
        validation(inputPassword);
      }
    } else {
      validation(inputPassword, "Độ dài không phù hợp");
    }
  
    if (!inputPassword.value) {
      inputPassword.classList.remove("is-valid");
    }
  }
);

//confirm password
inputRePassword.addEventListener("input", function () {
  if (inputRePassword.value !== inputPassword.value) {
    validation(inputRePassword, "Mật khẩu không khớp");
  } else {
    validation(inputRePassword);
  }
  if (!inputRePassword.value) {
    inputRePassword.classList.remove("is-invalid");
  }
}
);

// upload ảnh
btnUpload.addEventListener("change", function (e) {
    const [file] = btnUpload.files;
    if (file) {
      imgPreview.style.display = "block";
      imgPreview.src = URL.createObjectURL(file);
    }
  }
);

btnSubmit.addEventListener("click", submitForm);
btnReset.addEventListener("click", resetData);

function submitForm(e) {
  e.preventDefault();
  const imgAdded = document.querySelector(".img-added");
  if (inputFullName.value.length < 1) {
    validation(inputFullName, "Nhập vào FullName");
  }
  if (inputEmail.value.length < 1) {
    validation(inputEmail, "Nhập vào Email");
  }
  if (inputPhone.value.length < 1) {
    validation(inputPhone, "Nhập vào Phone");
  }
  if (inputBirthday.value.length < 1) {
    validation(inputBirthday, "Nhập vào Birthday");
  }
  if (inputPassword.value.length < 1) {
    validation(inputPassword, "Nhập vào Password");
  }
  if (inputRePassword.value.length < 1) {
    validation(inputRePassword, "Nhập lại Password");
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
  imgAdded.src = imgPreview.src;
  imgPreview.style.display='none';  
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
