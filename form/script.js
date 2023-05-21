const username=document.getElementById("name")
const password=document.getElementById("password")
const form=document.getElementById("form")
const email=document.getElementById("email")

form.addEventListener("submit",(e)=>{
   
    if(!validate()){
        e.preventDefault()
    }
})
function seterror(ele,mess){
    const input=ele.parentElement;
    const errordis=input.querySelector('.error')
    errordis.innerHTML=mess
    input.classList.add('error')
    input.classList.remove('success')
    
}
function setsuccess(ele){

    const input=ele.parentElement;
    const errordis=input.querySelector('.error')
    errordis.innerText=''
    input.classList.add('success')
    input.classList.remove('error')   
}
function verify(email){
    return String(email).match(/^[A-Z a-z 0-9._]{3,}@[A-Z a-z]{3,}[.]{1}[A-Z a-z.]{2,6}$/)
}
function validate(){
    const namevalue=username.value.trim();
    const passvalue=password.value.trim();
    const emailvalue=email.value.trim();
    let v=true;
    if(namevalue===''){
        v=false
        seterror(username,"Name is required")
        
    }
    else{
        setsuccess(username)
    }
    if(passvalue===''){
       
        v=false
        seterror(password,"Password is required")
    }
    else if(passvalue.length >=8){
        v=false
        seterror(password,"password length should not exceed 8 char")
    }
    else{
        setsuccess(password)
    }
    if(emailvalue===""){
        v=false
        seterror(email,"email is required")
    }
  else if(!verify(emailvalue)){
    v=false
    seterror(email,"email is wrong")
  }
  else{
    setsuccess(email)
  }
  return v
}