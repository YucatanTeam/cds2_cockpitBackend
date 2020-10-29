<div>
    <ul class="uk-breadcrumb">
        <li><a href="<?php $app->route('/forms'); ?>"><?php echo $app("i18n")->get('Forms'); ?></a></li>
        <li class="uk-active"><span><?php echo $app("i18n")->get('Form'); ?></span></li>
    </ul>
</div>

<div class="uk-margin-top" riot-view>

    <form class="uk-form" onsubmit="{ submit }">

        <div class="uk-grid">

            <div class="uk-width-medium-1-2">

                <div class="uk-margin">
                    <label class="uk-text-small"><?php echo $app("i18n")->get('Name'); ?></label>
                    <input aria-label="<?php echo $app("i18n")->get('Name'); ?>" class="uk-width-1-1 uk-form-large" type="text" ref="name" bind="form.name" pattern="[a-zA-Z0-9_]+" required>
                    <p class="uk-text-small uk-text-muted" if="{!form._id}">
                        <?php echo $app("i18n")->get('Only alpha nummeric value is allowed'); ?>
                    </p>
                </div>

                <div class="uk-margin">
                    <label class="uk-text-small"><?php echo $app("i18n")->get('Label'); ?></label>
                    <input aria-label="<?php echo $app("i18n")->get('Label'); ?>" class="uk-width-1-1 uk-form-large" type="text" name="label" bind="form.label">
                </div>

                <div class="uk-margin">
                   <label class="uk-text-small"><?php echo $app("i18n")->get('Icon'); ?></label>
                   <div data-uk-dropdown="pos:'right-center', mode:'click'">
                       <a><img class="uk-display-block uk-margin uk-container-center" riot-src="{ form.icon ? '<?php echo $app->pathToUrl('assets:app/media/icons/'); ?>'+form.icon : '<?php echo $app->pathToUrl('forms:icon.svg'); ?>'}" alt="icon" width="100"></a>
                       <div class="uk-dropdown uk-dropdown-scrollable uk-dropdown-width-2">
                            <div class="uk-grid uk-grid-gutter">
                                <div>
                                    <a class="uk-dropdown-close" onclick="{ selectIcon }" icon=""><img src="<?php echo $app->pathToUrl('forms:icon.svg'); ?>" width="30" icon=""></a>
                                </div>
                                <?php foreach ($app->helper("fs")->ls('*.svg', 'assets:app/media/icons') as $icon) { ?>
                                <div>
                                    <a class="uk-dropdown-close" onclick="{ selectIcon }" icon="<?php echo  $icon->getFilename() ; ?>"><img src="<?php echo $app->pathToUrl($icon->getRealPath()); ?>" width="30" icon="<?php echo  $icon->getFilename() ; ?>"></a>
                                </div>
                                <?php } ?>
                            </div>
                       </div>
                   </div>
               </div>

                <div class="uk-margin">
                    <label class="uk-text-small"><?php echo $app("i18n")->get('Color'); ?></label>
                    <div class="uk-margin-small-top">
                        <field-colortag bind="form.color" title="<?php echo $app("i18n")->get('Color'); ?>" size="20px"></field-colortag>
                    </div>
                </div>

                <div class="uk-margin">
                    <label class="uk-text-small"><?php echo $app("i18n")->get('Description'); ?></label>
                    <textarea aria-label="<?php echo $app("i18n")->get('Description'); ?>" class="uk-width-1-1 uk-form-large" name="description" bind="form.description" rows="5"></textarea>
                </div>

                <div class="uk-margin">
                    <label class="uk-text-small"><?php echo $app("i18n")->get('Email'); ?></label>
                    <input aria-label="<?php echo $app("i18n")->get('Email'); ?>" class="uk-width-1-1 uk-form-large" type="text" name="label" bind="form.email_forward">

                    <div class="uk-alert">
                        <?php echo $app("i18n")->get('Leave the email field empty if you don`t want to recieve any form data via email.'); ?>
                    </div>
                </div>

                <div class="uk-margin">
                    <field-boolean bind="form.save_entry" label="<?php echo $app("i18n")->get('Save form data'); ?>"></field-boolean>
                </div>

                <?php $app->trigger('forms.settings.aside'); ?>

            </div>

        </div>

        <cp-actionbar>
            <div class="uk-container uk-container-center">

                <button class="uk-button uk-button-large uk-button-primary"><?php echo $app("i18n")->get('Save'); ?></button>

                <a class="uk-button uk-button-large uk-button-link" href="<?php $app->route('/forms'); ?>">
                    <span show="{ !form._id }"><?php echo $app("i18n")->get('Cancel'); ?></span>
                    <span show="{ form._id }"><?php echo $app("i18n")->get('Close'); ?></span>
                </a>
            </div>
        </cp-actionbar>

    </form>

    <script type="view/script">

        var $this = this;

        this.mixin(RiotBindMixin);

        this.form = <?php echo  json_encode($form) ; ?>;

        this.on('mount', function(){

            this.trigger('update');

            // bind global command + save
            Mousetrap.bindGlobal(['command+s', 'ctrl+s'], function(e) {

                e.preventDefault();
                $this.submit();
                return false;
            });
        });

        this.on('update', function(){

            // lock name if saved
            if (this.form._id) {
                this.refs.name.disabled = true;
            }
        });

        selectIcon(e) {
            this.form.icon = e.target.getAttribute('icon');
        }

        submit(e) {

            if(e) e.preventDefault();

            var form = this.form;

            App.callmodule('forms:saveForm', [this.form.name, form]).then(function(data) {

                if (data.result) {

                    App.ui.notify("Saving successful", "success");
                    $this.form = data.result;

                    $this.update();

                } else {

                    App.ui.notify("Saving failed.", "danger");
                }
            });
        }

    </script>

</div>
