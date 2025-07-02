// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch('http://localhost:3000/users', configObj)
    .then(response => response.json())
    .then(data => {
      // Append new id to DOM
      const idElement = document.createElement('p');
      idElement.textContent = data.id;
      document.body.appendChild(idElement);
      return data;
    })
    .catch(error => {
      // Append error message to DOM
      const errorElement = document.createElement('p');
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}