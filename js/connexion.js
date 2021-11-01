function animation(){
  let inputs= document.querySelectorAll('.form__input input');
  document.querySelector('.connexion__formulaire').classList.add('connexion__formulaire_show')
  inputs.forEach(InputsElment => {
        InputsElment.addEventListener("focus",(e)=>{
           e.target.parentNode.classList.add('input_form_focus')
        })
        InputsElment.addEventListener("blur",(e)=>{
           e.target.parentNode.classList.remove('input_form_focus')
        })
      })
}
function hide_show_password(IsShow){
  if(IsShow === false){
    document.querySelector('.btn-pass').classList.replace('fa-eye-slash','fa-eye')
     document.querySelector('#mp').type ="text"
  }else {
    document.querySelector('.btn-pass').classList.replace('fa-eye','fa-eye-slash')
    document.querySelector('#mp').type ="password"
  }
}
 window.addEventListener('DOMContentLoaded',()=>{
  animation();
 const btn__mp = document.querySelector('.btn-pass');
 btn__mp.addEventListener('click',()=>{
  if(btn__mp.classList.contains('fa-eye-slash')){
    hide_show_password(false)
  }else {
    hide_show_password(true)
  }
 })
 })
