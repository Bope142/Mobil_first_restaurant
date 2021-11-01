function Animation__splash_screen(){
  //devise app
  document.querySelector('.devise').classList.add('devise-show');
   //btn app
  document.querySelector('.btns-splash').classList.add('btn__visible');
}
function links_window(){
  document.querySelector('.btns-splash :nth-child(2)').addEventListener('click',
    ()=>{ window.location.assign('connexion.html')

  })
}
//Event
window.addEventListener('DOMContentLoaded',()=>{
Animation__splash_screen();
links_window()

})
