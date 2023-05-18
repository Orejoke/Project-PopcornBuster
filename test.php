<!DOCTYPE html>
<html>
    <head>
        <title>forms</title>
    </head>
    <body>
        <h2>You recommended: <?php echo $_GET["Title"]; ?> </h2>
        The directors are:<?php echo $_GET["Directors"]; ?> <br>
        Description:<?php echo $_GET["Description"]; ?> <br>
        Genres:<br>
        <? foreach($_GET['Geners'] as $value)
        {
            echo $value .'';
        } ?> <br>
        website: <?php echo $_GET["website"]; ?> <br>
    </body>
</html>