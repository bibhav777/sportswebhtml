$(document).ready(
   function() {
   	// body...

   $('#regisform').submit(function(event){

        event.preventDefault();
        var myFormData={
        	username: $('#username').val(),
        	password: $('#password').val()
                


        }

$.ajax({

	url: 'https/localhost:3000/v1/users',
	method: 'POST',
	contentType: 'application/json',
	data: JSON.stringify(myFormData),



	sucsscess :function(result,status){
      
	},

	error:function(jqXHR,status) {

	}
})    


   })

   }

	)