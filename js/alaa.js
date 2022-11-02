
        // Accordion
        function myFunction(id) {
            var x = document.getElementById(id);
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
                x.previousElementSibling.className += " w3-theme-d1";
            } else { 
                x.className = x.className.replace("w3-show", "");
                x.previousElementSibling.className = 
                x.previousElementSibling.className.replace(" w3-theme-d1", "");
            }
        }
        
        // Used to toggle the menu on smaller screens when clicking on the menu button
        function openNav() {
            var x = document.getElementById("navDemo");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else { 
                x.className = x.className.replace(" w3-show", "");
            }
        }

 // Used to toggle the menu on smaller screens when clicking on the menu button
 function openNotices() {
    var x = document.getElementById("noticesDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

 function openMune(x) {
  //   alert(x);
     if(x == 'shwoCopmpaniesMune'){
        var x = document.getElementById("shwoCopmpaniesMune");
     }
     else if(x == 'showlenguagesMune'){
        var x = document.getElementById("showlenguagesMune");
     }
 

    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

 // Used to toggle the menu on smaller screens when clicking on the menu button
 function alaa(x) {
    var x = document.getElementById(x);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}



      function dateTimeReturn() {
         
         return alert(Date.now);
      }



      function fluttrValues(values){
    //    var sele = document.getElementById("select_de_pr_id");
      //    alert(sele.innerHTML);
          
      }


    //   function showAddProperties(val) {
    //       alert(val);
    //       document.getElementById('AddProperties').style.display='block';
    //   }