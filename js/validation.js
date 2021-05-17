

var url = "https://nathan-ss.github.io/jsonserver-api-avaforbrain/usuarios.json";//Sua URL

//user: disseminador_example
//password: 123456

// fazendo a chamada dos dados da api
var button = document.querySelector(".btn");
button.onclick = async () => {
  user = document.querySelector("#user").value;
  password = document.querySelector("#password").value;


  const data_url = await fetch(this.url);
  const data = await data_url.json()
  validation (data)

    
}

function validation (data){
  
  data_user = data.name;
  data_password = data.password;
  if (this.user == data_user) {
    if (this.password == data_password){
      window.location.assign("pages/dashboard/")
      
      
    }
    else{
      alert("Usuario ou senha incorretos")
    }
  } else {
    alert("Usuario ou senha incorretos")
    window.location.assign("")
  }


}




