<script>
    window.__collections = <?php echo  json_encode($collections) ; ?>;
</script>

<div>
    <ul class="uk-breadcrumb">
        <li class="uk-active"><span><?php echo $app("i18n")->get('Collections'); ?></span></li>
    </ul>
</div>

<div riot-view>

    <div>

        <div class="uk-margin uk-clearfix" if="{ App.Utils.count(collections) }">

            <div class="uk-form-icon uk-form uk-text-muted">

                <i class="uk-icon-filter"></i>
                <input class="uk-form-large uk-form-blank" type="text" ref="txtfilter" placeholder="<?php echo $app("i18n")->get('Filter collections...'); ?>" aria-label="<?php echo $app("i18n")->get('Filter collections...'); ?>" onkeyup="{ updatefilter }">

            </div>

            <?php if ($app->module("cockpit")->hasaccess('collections', 'create')) { ?>
            <div class="uk-float-right">
                <a class="uk-button uk-button-large uk-button-primary uk-width-1-1" href="<?php $app->route('/collections/collection'); ?>"><?php echo $app("i18n")->get('Add Collection'); ?></a>
            </div>
            <?php } ?>

        </div>

        <div class="uk-width-medium-1-1 uk-viewport-height-1-3 uk-container-center uk-text-center uk-flex uk-flex-middle uk-flex-center" if="{ !App.Utils.count(collections) }">

            <div class="uk-animation-scale">

                <p>
                    <img class="uk-svg-adjust uk-text-muted" src="<?php echo $app->pathToUrl('collections:icon.svg'); ?>" width="80" height="80" alt="Collections" data-uk-svg />
                </p>
                <hr>
                <span class="uk-text-large"><strong><?php echo $app("i18n")->get('No Collections'); ?>.</strong>
                <?php if ($app->module("cockpit")->hasaccess('collections', 'create')) { ?>
                <a href="<?php $app->route('/collections/collection'); ?>"><?php echo $app("i18n")->get('Create one'); ?></a></span>
                <?php } ?>
            </div>

        </div>

        <div class="uk-margin" if="{groups.length}">

            <ul class="uk-tab uk-tab-noborder uk-flex uk-flex-center uk-noselect">
                <li class="{ !group && 'uk-active'}"><a class="uk-text-capitalize { group && 'uk-text-muted'}" onclick="{ toggleGroup }">{ App.i18n.get('All') }</a></li>
                <li class="{ group==parent.group && 'uk-active'}" each="{group in groups}"><a class="uk-text-capitalize { group!=parent.group && 'uk-text-muted'}" onclick="{ toggleGroup }">{ App.i18n.get(group) }</a></li>
            </ul>
        </div>

        <div class="uk-grid uk-grid-match uk-grid-gutter uk-grid-width-1-1 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 uk-grid-width-xlarge-1-5 uk-margin-top">

            <div each="{ collection, idx in collections }" show="{ ingroup(collection.meta) && infilter(collection.meta) }">

                <div class="uk-panel uk-panel-box uk-panel-card uk-panel-card-hover">

                    <div class="uk-panel-teaser uk-position-relative">
                        <canvas width="600" height="350"></canvas>
                        <a aria-label="{ collection.label }" href="<?php $app->route('/collections/entries'); ?>/{collection.name}" class="uk-position-cover uk-flex uk-flex-middle uk-flex-center">
                            <div class="uk-width-1-4 uk-svg-adjust" style="color:{ (collection.meta.color) }">
                                <img riot-src="{ collection.meta.icon ? '<?php echo $app->pathToUrl('assets:app/media/icons/'); ?>'+collection.meta.icon : '<?php echo $app->pathToUrl('collections:icon.svg'); ?>'}" alt="icon" data-uk-svg>
                            </div>
                        </a>
                    </div>

                    <div class="uk-grid uk-grid-small">

                        <div data-uk-dropdown="mode:'click'">

                            <a class="uk-icon-cog" style="color:{ (collection.meta.color) }"></a>

                            <div class="uk-dropdown">
                                <ul class="uk-nav uk-nav-dropdown">
                                    <li class="uk-nav-header"><?php echo $app("i18n")->get('Actions'); ?></li>
                                    <li><a href="<?php $app->route('/collections/entries'); ?>/{collection.name}"><?php echo $app("i18n")->get('Entries'); ?></a></li>
                                    <li><a href="<?php $app->route('/collections/entry'); ?>/{collection.name}" if="{ collection.meta.allowed.entries_create }"><?php echo $app("i18n")->get('Add entry'); ?></a></li>
                                    <li if="{ collection.meta.allowed.edit || collection.meta.allowed.delete }" class="uk-nav-divider"></li>
                                    <li if="{ collection.meta.allowed.edit }"><a href="<?php $app->route('/collections/collection'); ?>/{ collection.name }"><?php echo $app("i18n")->get('Edit'); ?></a></li>
                                    <?php if ($app->module("cockpit")->hasaccess('collections', 'delete')) { ?>
                                    <li class="uk-nav-item-danger" if="{ collection.meta.allowed.delete }"><a class="uk-dropdown-close" onclick="{ parent.remove }"><?php echo $app("i18n")->get('Delete'); ?></a></li>
                                    <?php } ?>
                                    <li class="uk-nav-divider" if="{ collection.meta.allowed.edit }" if="{ collection.meta.allowed.entries_delete }"></li>
                                    <li><a href="<?php $app->route('/collections/trash/collection'); ?>/{collection.name}" if="{ collection.meta.allowed.entries_delete }"><?php echo $app("i18n")->get('Trash'); ?></a></li>
                                    <li class="uk-nav-divider" if="{ collection.meta.allowed.edit }"></li>
                                    <li class="uk-text-truncate" if="{ collection.meta.allowed.edit }"><a href="<?php $app->route('/collections/export'); ?>/{ collection.name }" download="{ collection.meta.name }.collection.json"><?php echo $app("i18n")->get('Export entries'); ?></a></li>
                                    <li class="uk-text-truncate" if="{ collection.meta.allowed.edit }"><a href="<?php $app->route('/collections/import/collection'); ?>/{ collection.name }"><?php echo $app("i18n")->get('Import entries'); ?></a></li>
                                </ul>
                            </div>
                        </div>

                        <a class="uk-text-bold uk-flex-item-1 uk-text-center uk-link-muted" href="<?php $app->route('/collections/entries'); ?>/{collection.name}">{ collection.label }</a>
                        <div>
                            <span class="uk-badge" riot-style="background-color:{ (collection.meta.color) }">{ collection.meta.itemsCount }</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>


    <script type="view/script">

        var $this = this;

        this.collections = window.__collections;
        this.groups = [];

        this.collections.forEach(function(collection) {

            if (collection.meta.group) {
                $this.groups.push(collection.meta.group);
            }
        });

        if (this.groups.length) {
            this.groups = _.uniq(this.groups.sort());
        }


        remove(e, collection) {

            collection = e.item.collection;

            App.ui.confirm("Are you sure?", function() {

                App.callmodule('collections:removeCollection', collection.name).then(function(data) {

                    App.ui.notify("Collection removed", "success");

                    $this.collections.splice(e.item.idx, 1);

                    $this.groups = [];

                    $this.collections.forEach(function(collection) {
                        if (collection.meta.group) $this.groups.push(collection.meta.group);
                    });

                    if ($this.groups.length) {
                        $this.groups = _.uniq($this.groups.sort());
                    }

                    $this.update();
                });
            });
        }

        toggleGroup(e) {
            this.group = e.item && e.item.group || false;
        }

        updatefilter(e) {

        }

        ingroup(singleton) {
            return this.group ? (this.group == singleton.group) : true;
        }

        infilter(collection, value, name, label) {

            if (!this.refs.txtfilter.value) {
                return true;
            }

            value = this.refs.txtfilter.value.toLowerCase();
            name  = [collection.name.toLowerCase(), collection.label.toLowerCase()].join(' ');

            return name.indexOf(value) !== -1;
        }

    </script>

</div>
