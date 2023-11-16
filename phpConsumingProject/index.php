<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Demo</title>
    <script src="./assets/button.js"></script>
    <style>
        <?php include './assets/button.css'; ?>
    </style>
    <script>
        window.addEventListener('wc-event', (event) => {
            document.getElementById("demo").innerHTML = ""; //clearing
            const valueString = Object.values(event.detail);
            console.log("This is the value string: " + valueString);
            document.getElementById("demo").innerHTML += valueString;
        });
    </script>
</head>

<body>
    <?php
    $text = 'This is a PHP project containing a web component';
    echo "$text <br> Below is the web component containing example data";
    $displayValue = "test prop sent from PHP to React Webcomponent";
    echo "<aggrid-wc prop-display='$displayValue'></aggrid-wc>";
    ?>
    <div id="demo"></div>
</body>
</html>