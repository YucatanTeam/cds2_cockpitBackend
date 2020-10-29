<div>
   <div class="uk-panel-box uk-panel-card">
      <div class="uk-panel-box-header uk-flex">
         <strong class="uk-panel-box-header-title uk-flex-item-1">
            <?php echo $app("i18n")->get('Groups'); ?>

            <?php if ($app->module("cockpit")->hasaccess('cockpit', 'groups_create')) { ?>
            <a href="<?php $app->route('/groups/create'); ?>" class="uk-icon-plus uk-margin-small-left" title="<?php echo $app("i18n")->get('Create Group'); ?>" data-uk-tooltip></a>
            <?php } ?>
         </strong>
         <?php if (count($groups)) { ?>
         <span class="uk-badge uk-flex uk-flex-middle"><span><?php echo  count($groups) ; ?></span></span>
         <?php } ?>
      </div>
        <?php if (count($groups)) { ?>
            <div class="uk-margin">
                <ul class="uk-list uk-list-space uk-margin-top">
                    <?php foreach (array_slice($groups, 0, count($groups) > 5 ? 5: count($groups)) as $col) { ?>
                    <li>
                        <div class="uk-grid uk-grid-small">
                            <div class="uk-flex-item-1">
                                <a href="<?php $app->route('/groups/group/'.$col['_id']); ?>">
                                    <img class="uk-margin-small-right uk-svg-adjust" src="<?php echo $app->pathToUrl('assets:app/media/icons/accounts.svg'); ?>" width="18px" alt="icon" data-uk-svg>
                                    <?php echo  @$col['group'] ; ?>
                                </a>
                            </div>
                            <div>
                                <?php if ($app->module('cockpit')->hasaccess('cockpit', 'accounts_create')) { ?>
                                <a class="uk-text-muted" href="<?php $app->route('/accounts/create'); ?>#<?php echo  $col['group'] ; ?>" title="<?php echo $app("i18n")->get('Add user to group'); ?>" data-uk-tooltip="pos:'right'">
                                    <img src="<?php echo $app->pathToUrl('assets:app/media/icons/plus-circle.svg'); ?>" width="1.2em" data-uk-svg />
                                </a>
                                <?php } ?>
                            </div>
                        </div>
                    </li>
                    <?php } ?>
                </ul>
            </div>
            <div class="uk-panel-box-footer">
                <a href="<?php $app->route('/groups'); ?>"><?php echo $app("i18n")->get('See all'); ?></a>
            </div>
        <?php } else { ?>
            <div class="uk-margin uk-text-center uk-text-muted">
                <p>
                    <img src="<?php echo $app->pathToUrl('assets:app/media/icons/accounts.svg'); ?>" width="30" height="30" alt="Groups" data-uk-svg />
                </p>
                <?php echo $app("i18n")->get('No groups'); ?>.

                <?php if ($app->module("cockpit")->hasaccess('groups', 'create')) { ?>
                <a href="<?php $app->route('/groups/group/create'); ?>"><?php echo $app("i18n")->get('Create a groups'); ?></a>.
                <?php } ?>
            </div>
        <?php } ?>
    </div>

</div>

