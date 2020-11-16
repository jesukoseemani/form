document.getElementById('username').addEventListener('blur', validateName);

document.getElementById('zip-code').addEventListener('blur', validateZip);

document.getElementById('Phone-number').addEventListener('blur', validatePhone);

document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('password').addEventListener('blur', validatePassword);

document.getElementById('re-password').addEventListener('blur', validaterePassword);

function validateName(){
/* <p class="m-name alert">Your Username must be less than 20 or more 8 Characters </p> */
const name = document.getElementById('username');
const re = /^[A-Za-z]{8,20}([0-9]{1,3})?\W?$/;

if(!re.test(name.value)){
 document.querySelector('.m-name').style.display = 'block';
 name.classList.add('redborder');

}else{
  document.querySelector('.m-name').style.display = 'none';
  name.classList.remove('redborder')
};
};

function validateZip(){
  // <p class="m-zipcode alert">Your zip-code must be more than 3 digits and less than 6digits</p>
   
  const zipcode= document.getElementById('zip-code');
  const re = /^\+?\d{3,6}$/;
  
  if(!re.test(zipcode.value)){
   document.querySelector('.m-zipcode').style.display = 'block';
   name.classList.add('redborder');
  
  }else{
    document.querySelector('.m-zipcode').style.display = 'none';
    name.classList.remove('redborder')
  };
  };

  function validatePhone(){
    // <p class="m-phone alert">Your Phone-number must be less than 11 digits and more than 5 digits </p>
     
    const phone = document.getElementById('Phone-number');
    const re = /^\(?\+?([0-9]{3})?\)?\-?\d{10,11}$/;
    
    if(!re.test(phone.value)){
     document.querySelector('.m-phone').style.display = 'block';
     phone.classList.add('redborder');
    
    }else{
      document.querySelector('.m-phone').style.display = 'none';
      phone.classList.remove('redborder')
    };
    };

    function validateEmail(){
      // <p class="m-email alert">Your email is not valid</p>
       
      const email = document.getElementById('email');
      const re = /^([A-Za-z0-9\.\_\-]+)@([A-Za-z0-9\.\_\-])+\.[A-Za-z]{1,5}$/;
      
      if(!re.test(email.value)){
       document.querySelector('.m-email').style.display = 'block';
       email.classList.add('redborder');
      
      }else{
        document.querySelector('.m-email').style.display = 'none';
        email.classList.remove('redborder')
      };
      };

      function validatePassword(){
        // <p class="m-password alert">Your password must be more than 6 Characters,<br>
        // Your password must contain atleast 1 capital letter,<br>
        // Your password must contain atleast 1 small letter,<br>
        // Your password must contain atleast 1 digit,<br>
        // Your password must contain atleast 1 non-alphanumeric</p>
         
        const password = document.getElementById('password');
        const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{6,}/;
        
        if(!re.test(password.value)){
         document.querySelector('.m-password').style.display = 'block';
         password.classList.add('redborder');
        
        }else{
          document.querySelector('.m-password').style.display = 'none';
          password.classList.remove('redborder')
        };
        };

        function validaterePassword(){
          // <p class="m-re-password alert">Your password do not match</p>
          const password = document.getElementById('password').value;
          const repassword = document.getElementById('re-password').value;
          
          
          if(password !== repassword){
           document.querySelector('.m-re-password').style.display = 'block';
           repassword.classList.add('redborder');
          
          }else{
            document.querySelector('.m-re-password').style.display = 'none';
            repassword.classList.remove('redborder')
          };
          };
  
          document.querySelector('form').addEventListener('submit',loadSubmit);

          function loadSubmit(e){
        
        const name = document.getElementById('username');
        const password = document.getElementById('password');
        const password2 = document.getElementById('re-password');
        const email = document.getElementById('email');
        const zipcode= document.getElementById('zip-code');
        const phone = document.getElementById('Phone-number');
        const date = document.getElementById('date');

        if(name || password || password2 || email || zipcode || phone || date === '' ){
            
          showAlert('Go back and completely fill your form','showalert')
        
          }else{
            window.location.reload();

            };

            e.preventDefault();
          }

  
  
  

 

        function showAlert(message,className){
        const div = document.createElement('div');

        div.className = className;

        div.appendChild(document.createTextNode(message));

        const body = document.querySelector('body');
        const form = document.querySelector('.container');

        body.insertBefore(div, form);


        }