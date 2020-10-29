<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>

    </head>   
    <body>
        <div class="container">

            <h1><center><?php echo  $app['app.name'] ; ?></center></h1>

            <center><a href="<?php echo  $target ; ?>?token=<?php echo  $token ; ?>"><?php echo $app("i18n")->get('Reset Password'); ?></a></center>

        </div>
    </body>
</html>