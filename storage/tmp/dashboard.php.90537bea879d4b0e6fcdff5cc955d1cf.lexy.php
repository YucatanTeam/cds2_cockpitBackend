
<div class="dashboard-header-panel uk-container-breakout">

    <div class="uk-container uk-container-center">

        <div class="uk-grid uk-grid-width uk-grid-margin" data-uk-grid-margin>

            <div class="uk-width-medium-1-2">

                <div class="uk-flex">
                    <div riot-mount>
                        <cp-gravatar email="<?php echo  $app['user']['email'] ; ?>" size="55" alt="<?php echo  $app["user"]["name"] ? $app["user"]["name"] : $app["user"]["user"] ; ?>"></cp-gravatar>
                    </div>
                    <div class="uk-flex-item-1 uk-margin-left">
                        <h2 class="uk-margin-remove"><?php echo $app("i18n")->get('Welcome back'); ?></h2>
                        <div class="uk-h3 uk-text-bold uk-margin-small-top">
                            <?php echo  $app['user/name'] ? $app['user/name'] : $app['user/user'] ; ?>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="uk-flex uk-flex-middle">
                    <span class="uk-badge uk-margin-small-right"><?php echo  $app['user/group'] ; ?></span>
                    <a class="uk-button uk-button-link uk-link-muted" href="<?php $app->route('/accounts/account'); ?>"><img class="uk-margin-small-right inherit-color" src="<?php $app->base('assets:app/media/icons/settings.svg'); ?>" width="20" height="20" data-uk-svg /> <?php echo $app("i18n")->get('Account'); ?></a>
                </div>

            </div>

            <div class="uk-width-medium-1-2">

                <?php if ($app('admin')->data['menu.modules']->count()) { ?>

                <?php
                    $modules = $app('admin')->data['menu.modules']->getArrayCopy();

                    usort($modules, function($a, $b) {
                        return mb_strtolower($a['label']) <=> mb_strtolower($b['label']);
                    });    
                ?>
                <ul class="uk-sortable uk-grid uk-grid-match uk-grid-small uk-grid-gutter uk-text-center" data-uk-grid-margin>

                    <?php foreach ($modules as $item) { ?>
                    <li class="uk-width-1-2 uk-width-medium-1-4 uk-width-xlarge-1-5" data-route="<?php echo  $item['route'] ; ?>">
                        <a class="uk-display-block uk-panel-box uk-panel-space uk-panel-card-hover" href="<?php $app->route($item['route']); ?>">
                            <div class="uk-svg-adjust">
                                <?php if (preg_match('/\.svg$/i', $item['icon'])) { ?>
                                <img src="<?php echo $app->pathToUrl($item['icon']); ?>" alt="<?php echo $app("i18n")->get($item['label']); ?>" data-uk-svg width="40" height="40" />
                                <?php } else { ?>
                                <img src="<?php echo $app->pathToUrl('assets:app/media/icons/module.svg'); ?>" alt="<?php echo $app("i18n")->get($item['label']); ?>" data-uk-svg width="40" height="40" />
                                <?php } ?>
                            </div>
                            <div class="uk-text-truncate uk-text-small uk-margin-top"><?php echo $app("i18n")->get($item['label']); ?></div>
                        </a>
                    </li>
                    <?php } ?>

                </ul>
                <?php } ?>

                <?php $app->trigger('admin.dashboard.header'); ?>

            </div>

        </div>

    </div>
</div>


<div id="dashboard">

    <div class="uk-margin">
        <?php $app->trigger('admin.dashboard.top'); ?>
    </div>

    <div class="uk-grid uk-margin" data-uk-grid-margin>
        <div class="uk-width-medium-1-2" data-area="main">
            <div class="uk-sortable uk-grid uk-grid-gutter uk-grid-width-1-1" data-uk-sortable="{group:'dashboard',animation:false}">
                <?php foreach ($areas['main'] as $widget) { ?>
                <div data-widget="<?php echo  $widget['name'] ; ?>">
                    <?php echo  $widget['content'] ; ?>
                </div>
                <?php } ?>
            </div>
        </div>
        <div class="uk-width-medium-1-4" data-area="aside-left">
            <div class="uk-sortable uk-grid uk-grid-gutter uk-grid-width-medium-1-1" data-uk-sortable="{group:'dashboard',animation:false}">
                <?php foreach ($areas['aside-left'] as $widget) { ?>
                <div data-widget="<?php echo  $widget['name'] ; ?>">
                    <?php echo  $widget['content'] ; ?>
                </div>
                <?php } ?>
            </div>
        </div>
        <div class="uk-width-medium-1-4" data-area="aside-right">
            <div class="uk-sortable uk-grid uk-grid-gutter uk-grid-width-medium-1-1" data-uk-sortable="{group:'dashboard',animation:false}">
                <?php foreach ($areas['aside-right'] as $widget) { ?>
                <div data-widget="<?php echo  $widget['name'] ; ?>">
                    <?php echo  $widget['content'] ; ?>
                </div>
                <?php } ?>
            </div>
        </div>
    </div>

    <div class="uk-margin">
        <?php $app->trigger('admin.dashboard.bottom'); ?>
    </div>

</div>

<style>

    #dashboard .uk-grid.uk-sortable {
        min-height: 30vh;
    }

</style>

<script>

    App.$(function($){

        var data, dashboard = App.$('#dashboard').on('stop.uk.sortable', function(){

            data = {};

            dashboard.find('[data-area]').each(function(){
                var $a      = $(this),
                    area    = $a.data('area'),
                    widgets = $a.find('[data-widget]');

                widgets.each(function(prio){
                    data[this.getAttribute('data-widget')] = {
                        area: area,
                        prio: prio + 1
                    };
                });
            });

            App.request('/cockpit/savedashboard',{widgets:data}).then(function(){

            });
        });
    });

</script>
