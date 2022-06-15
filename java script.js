
    
   
        function inputsData () 
        {
            var nme = $(".name").val();
            var roll = $(".phone").val();
            var cls = $("#.time").val();
            var ph = $(".date").val();
            if (!nme || !roll || !cls || !ph) {
                alert("your Some Important Record is missing");
                return;
            }
            
           
             
           
            clearText();
        }
       
        function clearText() {
            $("input").each(function () {
                $(this).val('');
            })
        }

 
