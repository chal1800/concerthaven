 function myFunction() {
            var input, filter, ul, li, a, i;
            input = document.getElementById("myInput");
            filter = input.value.toLowerCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName("li");
        
            for (var i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                if (a.innerHTML.toLowerCase().includes(filter) && filter !== "")  
                {
                    li[i].style.display = "block";
                } else {
                    li[i].style.display = "none";
                }
        
            }
        }
   
   