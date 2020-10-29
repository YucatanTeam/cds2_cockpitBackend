<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page not found</title>
    <link rel="icon" href="<?php $app->base('/favicon.ico'); ?>" type="image/x-icon">
    <?php echo  $app->assets(['assets:app/css/style.css'], $app['cockpit/version']) ; ?>
</head>
<body class="uk-height-viewport uk-flex uk-flex-middle">

    <div class="uk-container uk-container-center uk-text-center uk-animation-slide-bottom">

        <h1><strong>404</strong></h1>

        <img src="<?php $app->base('assets:app/media/icons/lighthouse.svg'); ?>" width="100" height="100">

        <p class="uk-text-large uk-margin-large">Uuuups, Page not found.</p>
        <p><a href="<?php $app->route('/'); ?>"><?php echo $app("i18n")->get('Back to start'); ?></a></p>

    </div>

</body>
</html>
