## Angular - Form Validation


This code validates the content of a login form.

The form contains the following fields: name, email, website and message and has a submit button. When the submit button is clicked, it should validate all of the form fields and show all errors in the form data. 

The validation rules are:

* Name cannot be left empty
* Email cannot be left empty
* Email must contain a "@"
* Website cannot be left empty
* Website must start with "http://"
* Message cannot be left empty

If the form input has no errors, it alerts a "form submitted" message to the user and `console.log` out the form's data.

I used CSS to style the form to be responsive. Examples that I modelled this after are `desktop.png` and `mobile.png`. 

This project is LESS enabled.

I used `$scope.$watch` to validate the form as a user is typing in content. The form shows a gray bar on the bottom of the input element if the input is left empty as the user is typing and an error message if the input contianes errors. 