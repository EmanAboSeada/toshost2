(function (){
  let coll1 = document.getElementsByClassName("collapseOne");
  for (let i = 0; i < coll1.length; i++) {
    coll1[i].addEventListener("click", function() {
      this.classList.toggle("active");
      for(let item of coll1){
        if(item != this){
          item.classList.remove('active');
        }
      }
    });
  }
  let coll2 = document.getElementsByClassName("collapseTwo");
  for ( i = 0; i < coll2.length; i++) {
    coll2[i].addEventListener("click", function() {
      this.classList.toggle("active");
      for(let item of coll2){
        if(item != this){
          item.classList.remove('active');
        }
      }
    });
  }
}());

//sidenav
function openNav() {
  document.getElementById("sidenav").style.width = "calc(250px + 20vw )";
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}