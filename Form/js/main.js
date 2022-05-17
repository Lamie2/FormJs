toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}


let nameInput = document.getElementById('NameInput');

nameInput.addEventListener('input', function () {

    if (!checkNameLength(nameInput.value)) {
        nameInput.nextElementSibling.classList.remove('d-none');
        nameInput.nextElementSibling.innerText = 'Name must be greated than 3 character';
        isValid = false;
    }
    else {
        nameInput.nextElementSibling.classList.add('d-none');
    }
    console.log(this.value)
})

let surnameInput = document.getElementById('SurnameInput');

surnameInput.addEventListener('input', function () {

    if (!checkNameLength(nameInput.value)) {
        surnameInput.nextElementSibling.classList.remove('d-none');
        surnameInput.nextElementSibling.innerText = 'Surname must be greated than 3 character';
        isValid = false;
    }
    else {
        surnameInput.nextElementSibling.classList.add('d-none');
    }
    console.log(this.value)
})

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let nameInput = document.getElementById('NameInput');
    let isValid = true;

    if (!checkNameLength(nameInput.value)) {
        nameInput.nextElementSibling.classList.remove('d-none');
        nameInput.nextElementSibling.innerText = 'Name must be greated than 3 character';
        isValid = false;
    }
    else {
        nameInput.nextElementSibling.classList.add('d-none');
    }

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();

        let surnameInput = document.getElementById('SurnameInput');
        let isValid = true;

        if (!checkSurnameLength(nameInput.value)) {
            surnameInput.nextElementSibling.classList.remove('d-none');
            surnameInput.nextElementSibling.innerText = 'Surname must be greated than 3 character';
            isValid = false;
        }
        else {
            surnameInput.nextElementSibling.classList.add('d-none');
        }


        let ageInput = document.getElementById('ageInput');
        if (!checkAge(ageInput.value)) {
            ageInput.nextElementSibling.classList.remove('d-none');
            ageInput.nextElementSibling.innerText = 'Age must be greater or equal 18!';
            isValid = false;
        }
        else {
            ageInput.nextElementSibling.classList.add('d-none')
        }

        if (isValid) {
            toastr["success"]("Your form submited successfully!")
        }

    })
})

    function checkNameLength(value) {
        if (value.length < 3) return false;
        else return true;
    }

    function checkSurnameLength(value) {
        if (value.length < 3) return false;
        else return true;
    }



    function checkAge(value) {
        if (value < 18) return false;
        else return true;
    }

