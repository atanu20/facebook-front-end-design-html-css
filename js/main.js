function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                  .attr('src', e.target.result)
                  .css("display", "block");
                
               
        };

        reader.readAsDataURL(input.files[0]);
    }
}