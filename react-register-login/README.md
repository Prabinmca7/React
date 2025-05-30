npm install axios react-hook-form


axios.post("https://reqres.in/api/login", {
  email: "eve.holt@reqres.in",
  password: "cityslicka"
})
.then((response) => {
  console.log("Login Success:", response.data);
})
.catch((error) => {
  console.error("Login failed", error.response.data);
});

