<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $category = $_POST['category'];
    $about = $_POST['about'];
    
    // Email recipient
    $to = 'akshueditz434@gmail.com';
    
    // Email subject
    $subject = 'New Form Submission';
    
    // Email message
    $message = "Name: $name\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Category: $category\n";
    $message .= "About: $about\n";
    
    // Send email
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();
    
    if (mail($to, $subject, $message, $headers)) {
        echo 'Thank you for your submission!';
    } else {
        echo 'Oops! Something went wrong.';
    }
} else {
    // If form is not submitted, redirect to the form page
    header("Location: your-form-page.html");
    exit;
}
?>
