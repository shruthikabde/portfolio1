document.addEventListener('DOMContentLoaded', function () { // This means that your Javascript will only start working once your entire webpage has finised loading all the content from the server
     const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
     const body = document.body;
     const projectItems = document.querySelectorAll(".project-item");
     const formFeedback = document.getElementById('formFeedback');
     const contactForm = document.getElementById('contactForm');

     //Toggle Dark Mode code starts from here
     toggleDarkModeBtn.addEventListener('click', function () {
          body.classList.toggle("dark-mode");

     });

     //Form Validation
     contactForm.addEventListener('submit', function (event) {

          event.preventDefault(); // Won't submit until all the code inside the function is run.
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          //AND( && ) OR( || ) NOT(!)
          //= Assignment Operator.Checks VALUE
          //== Comparison Operator 
          //=== EQUALITY Operator (TRUE/FAlSE)

          //JS has 3 types of Pop UPs
          //Alert BOX  - alert()
          //Confirm BOX - confirm()
          //User Input BOX - prompt()

          if (name === "" || email === "" || message === "") {
               alert("Please fill out all the fields");

          }
          else if (!validateEmail(email)) { //WHEN THE Condition here will be false, Please enter a valid email will not be printed
               alert("Please enter a valid email");
          }
          else {
               contactForm.reset();
          }

     }); //CONTACT FORM VALIDATION CLOSE

     function validateEmail(email) {
          const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //smallest domain is .co longest 6 characters
          return emailpattern.test(email); //THIS WILL ONLY RETURN EITHER TRUE OR FALSE
     }


     function greet() {
          const userName = prompt("Please enter your name:");

          if (userName) {
               alert(`Hello, ${userName}, Welcome to my portfolio Website! `);
          }
          else {
               alert(`Hello, you didn't enter your name! `);
          }
     }

     greet();
});

