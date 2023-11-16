<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Demo</title>
    <script src="./assets/test.js"></script>
    <style>
        <?php include './assets/test.css'; ?>
    </style>
</head>

<body>
    <?php
    $text = 'This is a PHP project containing a web component';
    echo "$text <br> Below is the web component containing example data";
    echo "<aggrid-wc></aggrid-wc>";
    ?>
</body>
</html>