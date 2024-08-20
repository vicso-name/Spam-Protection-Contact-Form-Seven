
# Contact Form 7 Spam Protection


This project provides an additional layer of spam protection for Contact Form 7 by using a dynamically named hidden input field to trick spam bots that tend to fill in all form fields. The solution consists of JavaScript code to randomize the name of a hidden input field and PHP server-side validation to reject submissions if the field is filled.

## Installation

Open the Contact Form 7 form where you want to add spam protection. Add the following shortcode for the hidden input field:

[hidden spam_protection id:dynamic_spam_protection]

### How It Works:

#### Hidden Field
A hidden field is added to the form, which remains invisible to legitimate users but is detected by bots that fill out all fields.

#### Dynamic Naming
Upon form load, the name of the hidden field is randomized using a predefined array of field names to ensure that bots cannot predict it.

#### Form Validation
The form is not submitted if the hidden field is filled in. Server-side validation is also performed to ensure no hidden fields were tampered with.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests. If you find any bugs or have feature requests, please submit them through the GitHub issue tracker.
