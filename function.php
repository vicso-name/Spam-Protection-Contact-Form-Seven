<?php
add_action('wpcf7_before_send_mail', 'check_dynamic_spam_protection');


function check_dynamic_spam_protection($contact_form) {
  // The random names you used in JavaScript
  $randomNames = ['protection1', 'guardfield', 'safeinput', 'blockerfield', 'inputshield'];
  
  foreach ($randomNames as $name) {
    if (!empty($_POST[$name])) {
      // Block the form submission if the spam field is filled
      wp_die('Spam detected. Form submission blocked.');
    }
  }
}
