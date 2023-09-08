window.addEventListener('load', solution);

function solution() {
  const name = document.querySelector('#fname');
  const email = document.querySelector('#email');
  const number = document.querySelector('#phone');
  const address = document.querySelector('#address');
  const code = document.querySelector('#code');
  const submitBtn = document.querySelector('#submitBTN');
  const editBtn = document.querySelector('#editBTN');
  const continueBtn = document.querySelector('#continueBTN');
  const previewElement = document.querySelector('#infoPreview');

  submitBtn.disabled = false;
  editBtn.disabled = true;
  continueBtn.disabled = true;

  submitBtn.addEventListener('click', () => {

    if (name.value == '' || email.value == '') {
      return;
    }

    const liName = document.createElement('li');
    const liEmail = document.createElement('li');
    const liNumber = document.createElement('li');
    const liAddress = document.createElement('li');
    const liCode = document.createElement('li');

    const nameValue = name.value;
    const emailValue = email.value;
    const numberValue = number.value;
    const addressValue = address.value;
    const codeValue = code.value;

    liName.textContent = `Full Name: ${nameValue}`;
    liEmail.textContent = `Email: ${emailValue}`;
    liNumber.textContent = `Phone Number: ${numberValue}`;
    liAddress.textContent = `Address: ${addressValue}`;
    liCode.textContent = `Postal Code: ${codeValue}`;

    previewElement.appendChild(liName);
    previewElement.appendChild(liEmail);
    previewElement.appendChild(liNumber);
    previewElement.appendChild(liAddress);
    previewElement.appendChild(liCode);

    name.value = '';
    email.value = '';
    number.value = '';
    address.value = '';
    code.value = '';

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    editBtn.addEventListener('click', () => {
      name.value = nameValue;
      email.value = emailValue;
      number.value = numberValue;
      address.value = addressValue;
      code.value = codeValue;

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;

      liName.remove();
      liEmail.remove();
      liNumber.remove();
      liAddress.remove();
      liCode.remove();
    })

    continueBtn.addEventListener('click', () => {
      const blockDiv = document.querySelector('#block');
      blockDiv.innerHTML = `<h3>Thank you for your reservation!</h3>`;
    })
  })
}
