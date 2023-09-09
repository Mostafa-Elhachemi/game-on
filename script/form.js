

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const modalbg = document.querySelector(".bground");



const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const spanValidModal = document.querySelector(".formConfirmation > span");
const btnSubmitConfirm = document.querySelector(".btn-submit-confirm");

const form = document.querySelector("form");


const submitInput = form[form.length -1]; 




const inputs = document.querySelectorAll(
  "#first, #last, #email, #birthdate, #quantity, input[name=location] , #checkbox1 "
);


inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    switch (e.target.id) {
      case "first":
        firstChecker(e.target.value);
        break;
      case "last":
        lastChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "birthdate":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;
      case "input":
        checkboxContainer(e.target.value);
        break;  
      case "checkbox1":
        checkboxChecker(e.target.value);
      default:
        null;
    }
  });
});


const firstChecker = (value) => {
  const firstContainer = document.querySelector(".first-container");
  const errorDisplay = document.querySelector(".first-container > span");
  let isValid = false;
  let regExName =  new RegExp('^[A-Za-z-]{2,30}$', 'g');
  if (value.length < 2 || !regExName.test(value)) {
    firstContainer.classList.add("error");
    errorDisplay.textContent =
      "Entrez 2 caractères ou plus pour le champ du prénom.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

const lastChecker = (value) => {
  const lastContainer = document.querySelector(".last-container");
  const errorDisplay = document.querySelector(".last-container > span");
  let isValid = false;
  let regExName =  new RegExp('^[A-Za-z-]{2,30}$', 'g');
  if (value.length < 2 || !regExName.test(value)) {
    lastContainer.classList.add("error");
    errorDisplay.textContent =
      "Entrez 2 caractères ou plus pour le champ du nom.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};


const emailChecker = (value) => {
  const emailContainer = document.querySelector(".email-container");
  const errorDisplay = document.querySelector(".email-container > span");
  let isValid = false;

  if (!value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    emailContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une adresse mail valide.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};


const birthdateChecker = (value) => {
  const birthdateContainer = document.querySelector(".birthdate-container");
  const errorDisplay = document.querySelector(".birthdate-container > span");
  let isValid = false;
  let birthdateRegExp = new RegExp(
    '^(19|20)[0-9]{2}[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$'
  );

  if (!value || !birthdateRegExp.test(value)) {
    birthdateContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une date de naissance.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};


const quantityChecker = (value) => {
  const quantityContainer = document.querySelector(".quantity-container");
  const errorDisplay = document.querySelector(".quantity-container > span");
  let isValid = false;

  if (!value || value == 0 ) {
    quantityContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer un chiffre.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};


const checkboxContainer = () => {
  const errorDisplay = document.querySelector(".formData > small");
  const radios = document.querySelectorAll('input[name = "location"]');
  isValid = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
     
      isValid = true;
      errorDisplay.textContent = "";
      break;
    } else {
      errorDisplay.textContent = "Veuillez sélectionner un choix.";
      errorDisplay.style.color = "red";
      errorDisplay.style.fontSize = "0.6em";
    }
  } 
  
  return isValid;
};


const checkboxChecker = () => {
  const errorDisplay = document.querySelector(".formData > div");
  const check = document.querySelector(".checkbox1");
  const checkbox1 = document.querySelector("#checkbox1");
  let isValid = false;

  if (!checkbox1.checked) {
    check.classList.add("error");
    errorDisplay.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};


const onSubmit = (e) => {
  e.preventDefault();
  
   const formValues = (inputs) => {
    let data = [];

    for (let i = 0; i < inputs.length; i++) {
      if (
        inputs[i].type === "text" ||
        inputs[i].type === "email" ||
        inputs[i].type === "date" ||
        inputs[i].type === "number" 
       

      ) {
        data.push(inputs[i].value);
      }

      if (inputs[i].type === "checkbox" ) {
        let currentValue = "";

        if (inputs[i].checked) {
          currentValue = inputs[i].value;
        }
        data.push(currentValue);
      }

      if (inputs[i].type === "radio") {
        let currentValue = "";
        
        if (inputs[i].checked) {
          currentValue = inputs[i].value;
          data.push(currentValue);
        }
        
      }
    }
	
		
    return data;
	
	
  };
 
  

  
  const formIsValid = (values) => {
   
    let formValid = false;

    if(firstChecker(values[0]) && lastChecker(values[1]) && emailChecker(values[2])
    && birthdateChecker(values[3]) && quantityChecker(values[4]) 
    && checkboxChecker(values[5]) && checkboxContainer(values))
    {
      formValid= true;
    }
    
    return formValid;
  };
 
  if (formIsValid(formValues(inputs))) {
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".formConfirmation").style.display = "block";
    spanValidModal.innerHTML = "Merci pour <br> votre inscription";
    console.log(formValues(inputs));
	
  } else {
    document.querySelector(".modal-body").style.display = "block";
    document.querySelector(".formConfirmation").style.display = "none";
  
  }
};

submitInput.addEventListener("click", (e) => onSubmit(e));





function closeModalConfirmation() {
  modalbg.style.display = "none";
  window.location.reload();
}

btnSubmitConfirm.addEventListener("click", closeModalConfirmation);


function launchModal() {
  modalbg.style.display = "block"; 
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));




function closeModal() {
  modalbg.style.display = "none"; 
}

closeBtn.addEventListener("click", closeModal);



