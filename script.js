


const loginBtn = document.getElementById('login');
const signBtn = document.getElementById('signup');

if(localStorage.getItem('currUser') ){
  
    alert("You are already in our system");
   
    location.href='./shop/index.html';
  
}

loginBtn.addEventListener('click',()=>{
    location.href='./login/index.html';
})

signBtn.addEventListener('click',()=>{
    location.href='./signup/index.html'
})