<style>
<?php if ($collection['color']) { ?>
.app-header { border-top: 8px <?php echo  $collection['color'] ; ?> solid; }
<?php } ?>
</style>

<div>

    <ul class="uk-breadcrumb">
        <li><a href="<?php $app->route('/collections'); ?>"><?php echo $app("i18n")->get('Collections'); ?></a></li>
        <li class="uk-active" data-uk-dropdown="mode:'hover', delay:300">

        <a href="<?php $app->route('/collections/entries/'.$collection['name']); ?>"><i class="uk-icon-bars"></i> <?php echo  htmlspecialchars(@$collection['label'] ? $collection['label']:$collection['name']) ; ?></a>

            <?php if ($app->module('collections')->hasaccess($collection['name'], 'collection_edit')) { ?>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-nav-dropdown">
                    <li class="uk-nav-header"><?php echo $app("i18n")->get('Actions'); ?></li>
                    <li><a href="<?php $app->route('/collections/collection/'.$collection['name']); ?>"><?php echo $app("i18n")->get('Edit'); ?></a></li>
                    <li class="uk-nav-divider"></li>
                    <li class="uk-text-truncate"><a href="<?php $app->route('/collections/export/'.$collection['name']); ?>" download="<?php echo  $collection['name'] ; ?>.collection.json"><?php echo $app("i18n")->get('Export entries'); ?></a></li>
                    <li class="uk-text-truncate"><a href="<?php $app->route('/collections/import/collection/'.$collection['name']); ?>"><?php echo $app("i18n")->get('Import entries'); ?></a></li>
                </ul>
            </div>
            <?php } ?>

        </li>
        <li class="uk-active"><span><?php echo $app("i18n")->get('Trash'); ?></span></li>
    </ul>

</div>

<div riot-view>


    <div class="uk-width-medium-1-3 uk-viewport-height-1-2 uk-container-center uk-text-center uk-flex uk-flex-center uk-flex-middle" if="{ loading }">

        <div class="uk-animation-fade uk-text-center">
            <cp-preloader class="uk-container-center"></cp-preloader>
        </div>

    </div>

    <div class="uk-width-medium-1-3 uk-viewport-height-1-2 uk-container-center uk-text-center uk-text-muted uk-flex uk-flex-center uk-flex-middle" if="{ !loading && !entries.length }">

        <div class="uk-animation-scale">

            <img class="uk-svg-adjust" src="<?php echo $app->pathToUrl('assets:app/media/icons/misc/trash.svg'); ?>" width="80" alt="icon" data-uk-svg>
            
            <div class="uk-h1 uk-margin-top">
                <?php echo $app("i18n")->get('Trash is empty'); ?>
            </div>
        </div>

    </div>

    <div if="{ !loading && entries.length }">

        <div class="uk-margin uk-flex uk-flex-right uk-flex-middle">
            
            <div class="uk-flex-item-1 uk-flex uk-flex-middle">

                <div class="uk-margin-small-right">
                    <img class="uk-svg-adjust" src="<?php echo $app->pathToUrl('assets:app/media/icons/misc/trash.svg'); ?>" width="50" alt="icon" data-uk-svg>
                </div>

                <h3>
                    <strong><?php echo  htmlspecialchars(@$collection['label'] ? $collection['label']:$collection['name']) ; ?></strong>
                    <?php echo $app("i18n")->get('Trash'); ?>
                </h3>
            </div>


            <div class="uk-display-inline-block uk-margin-small-right" data-uk-dropdown="mode:'click'" if="{ selected.length }">
                <button class="uk-button uk-button-large uk-animation-fade"><?php echo $app("i18n")->get('Batch Action'); ?> <span class="uk-badge uk-badge-contrast uk-margin-small-left">{ selected.length }</span></button>
                <div class="uk-dropdown">
                    <ul class="uk-nav uk-nav-dropdown uk-dropdown-close">
                        <li class="uk-nav-header"><?php echo $app("i18n")->get('Actions'); ?></li>
                        <li><a onclick="{ recycleSelected }"><?php echo $app("i18n")->get('Recycle'); ?></a></li>
                        <li class="uk-nav-item-danger"><a onclick="{ removeSelected }"><?php echo $app("i18n")->get('Delete'); ?></a></li>
                    </ul>
                </div>
            </div>

            <button type="button" class="uk-button uk-button-large uk-button-danger uk-flex uk-flex-middle" onclick="{ emptyTrash }"><?php echo $app("i18n")->get('Empty Trash'); ?> <span class="uk-badge uk-badge-contrast uk-margin-small-left">{ count }</span></button>

        </div>

        <table class="uk-table uk-table-tabbed uk-table-striped uk-margin-top">
            <thead>
                <tr>
                    <th width="20"><input class="uk-checkbox" type="checkbox" data-check="all"></th>
                    <th width="{field.name == '_modified' || field.name == '_created' ? '100':''}" class="uk-text-small" each="{field,idx in fields}">
                        { field.label || field.name }
                    </th>
                    <th><?php echo $app("i18n")->get('Deleted'); ?></th>
                    <th width="20"></th>
                </tr>
            </thead>
            <tbody>
                <tr each="{entry,idx in entries}">
                    <td><input class="uk-checkbox" type="checkbox" data-check data-id="{ entry._id }"></td>
                    <td class="uk-text-truncate" each="{field,idy in parent.fields}" if="{ field.name != '_created' }">
                        <raw content="{ App.Utils.renderValue(field.type, parent.entry.data[field.name], field) }" if="{parent.entry.data[field.name] !== undefined}"></raw>
                        <span class="uk-icon-eye-slash uk-text-muted" if="{parent.entry.data[field.name] === undefined}"></span>
                    </td>
                    <td><span class="uk-badge uk-badge-outline uk-text-warning">{ App.Utils.dateformat( new Date( 1000 * entry._created )) }</span></td>
                    <td>
                        <span data-uk-dropdown="mode:'click'">

                            <a class="uk-icon-bars"></a>

                            <div class="uk-dropdown uk-dropdown-flip">

                                <span class="uk-badge uk-badge-outline uk-text-muted"><?php echo $app("i18n")->get('Deleted by'); ?></span>

                                <div class="uk-margin-top">
                                    <cp-account account="{entry._by}"></cp-account>
                                </div>

                                <hr>

                                <ul class="uk-nav uk-nav-dropdown uk-margin-top">
                                    <li class="uk-nav-header"><?php echo $app("i18n")->get('Actions'); ?></li>
                                    <li><a onclick="{ parent.recycle }"><?php echo $app("i18n")->get('Recycle'); ?></a></li>
                                    <li class="uk-nav-item-danger"><a class="uk-dropdown-close" onclick="{ parent.remove }"><?php echo $app("i18n")->get('Delete'); ?></a></li>
                                </ul>
                            </div>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>


        <div class="uk-margin uk-flex uk-flex-middle" if="{ !loading && pages > 1 }">

            <ul class="uk-breadcrumb uk-margin-remove">
                <li class="uk-active"><span>{ page }</span></li>
                <li data-uk-dropdown="mode:'click'">

                    <a><i class="uk-icon-bars"></i> { pages }</a>

                    <div class="uk-dropdown">

                        <strong class="uk-text-small"><?php echo $app("i18n")->get('Pages'); ?></strong>

                        <div class="uk-margin-small-top { pages > 5 ? 'uk-scrollable-box':'' }">
                            <ul class="uk-nav uk-nav-dropdown">
                                <li class="uk-text-small" each="{k,v in new Array(pages)}"><a class="uk-dropdown-close" onclick="{ parent.loadpage.bind(parent, v+1) }"><?php echo $app("i18n")->get('Page'); ?> {v + 1}</a></li>
                            </ul>
                        </div>
                    </div>

                </li>
            </ul>

            <div class="uk-button-group uk-margin-small-left">
                <a class="uk-button uk-button-small" onclick="{ loadpage.bind(this, page-1) }" if="{page-1 > 0}"><?php echo $app("i18n")->get('Previous'); ?></a>
                <a class="uk-button uk-button-small" onclick="{ loadpage.bind(this, page+1) }" if="{page+1 <= pages}"><?php echo $app("i18n")->get('Next'); ?></a>
            </div>

            <div class="uk-margin-small-right" data-uk-dropdown="mode:'click'">
                <a class="uk-button uk-button-link uk-button-small uk-text-muted">{limit}</a>
                <div class="uk-dropdown">
                    <ul class="uk-nav uk-nav-dropdown">
                        <li class="uk-nav-header"><?php echo $app("i18n")->get('Show'); ?></li>
                        <li><a onclick="{updateLimit.bind(this, 20)}">20</a></li>
                        <li><a onclick="{updateLimit.bind(this, 40)}">40</a></li>
                        <li><a onclick="{updateLimit.bind(this, 80)}">80</a></li>
                        <li><a onclick="{updateLimit.bind(this, 100)}">100</a></li>
                        <li class="uk-nav-divider"></li>
                        <li><a onclick="{updateLimit.bind(this, null)}"><?php echo $app("i18n")->get('All'); ?></a></li>
                    </ul>
                </div>
            </div>

        </div>

    </div>



    <script type="view/script">

        var $this = this, $root = App.$(this.root);

        this.collection  = <?php echo  json_encode($collection) ; ?>;
        this.entries  = [];
        this.loading  = true;

        this.count    = 0;
        this.pages    = 1;
        this.page     = 1;
        this.limit    = 20;

        this.selected = [];

        this.fields   = this.collection.fields.filter(function(field){
            return field.lst;
        });

        this.on('mount', function() {

            $root.on('click', '[data-check]', function() {

                if (this.getAttribute('data-check') == 'all') {
                    $root.find('[data-check][data-id]').prop('checked', this.checked);
                }

                $this.checkselected();
                $this.update();
            });

            this.load();
        });

        checkselected(update) {

            var checkboxes = $root.find('[data-check][data-id]'),
                selected   = checkboxes.filter(':checked');

            this.selected = [];

            if (selected.length) {

                selected.each(function(){
                    $this.selected.push(App.$(this).attr('data-id'));
                });
            }

            $root.find('[data-check="all"]').prop('checked', checkboxes.length && checkboxes.length === selected.length);

            if (update) {
                this.update();
            }
        }

        load() {

            var options = {
                limit: this.limit,
                skip: (this.page - 1) * this.limit
            };

            return App.request('/collections/trash/find', {collection:this.collection.name, options:options}).then(function(data){

                window.scrollTo(0, 0);

                this.entries = data.entries;
                this.pages   = data.pages;
                this.page    = data.page;
                this.count   = data.count;

                this.checkselected();
                this.loading = false;
                this.update();

            }.bind(this))
        }

        loadpage(page) {
            this.page = page > this.pages ? this.pages:page;
            this.load();
        }

        updateLimit(limit) {
            this.limit = limit;
            this.page = 1;
            this.load();
        }

        emptyTrash() {

            App.ui.confirm('Are you sure?', function() {

                App.request('/collections/trash/empty/'+$this.collection.name).then(function(data) {
                    App.ui.notify('Trash was emptied', 'success');
                    $this.loadpage(1);
                });
            });
        }

        recycle(e) {
            
            var entry = e.item.entry, idx = e.item.idx;

            App.ui.confirm("Are you sure?", function() {

                App.request('/collections/trash/recycle/'+$this.collection.name, {filter: {'_id':entry._id}}).then(function(data) {

                    App.ui.notify('Item recycled', 'success');

                    $this.entries.splice(idx, 1);

                    if ($this.pages > 1 && !$this.entries.length) {
                        $this.page = $this.page == 1 ? 1 : $this.page - 1;
                        $this.load();
                        return;
                    }

                    $this.update();
                    $this.checkselected();
                });

            }.bind(this));
        }

        recycleSelected() {

            if (!this.selected.length) {
                return;
            }

            App.ui.confirm('Are you sure?', function() {

                var promises = [];

                this.entries = this.entries.filter(function(entry, yepp){

                    yepp = ($this.selected.indexOf(entry._id) === -1);

                    if (!yepp) {
                        promises.push(App.request('/collections/trash/recycle/'+$this.collection.name, {filter: {'_id':entry._id}}));
                    }

                    return yepp;
                });

                Promise.all(promises).then(function(){

                    App.ui.notify(promises.length > 1 ? (promises.length + ' items recycled') : 'Item recycled', 'success');

                    $this.loading = false;

                    if ($this.pages > 1 && !$this.entries.length) {
                        $this.page = $this.page == 1 ? 1 : $this.page - 1;
                        $this.load();
                    } else {
                        $this.update();
                    }

                });

                this.loading = true;
                this.update();
                this.checkselected(true);

            }.bind(this));
        }

        remove(e) {
            
            var entry = e.item.entry, idx = e.item.idx;

            App.ui.confirm("Are you sure?", function() {

                App.request('/collections/trash/delete/'+$this.collection.name, {filter: {'_id':entry._id}}).then(function(data) {

                    App.ui.notify('Item removed', 'success');

                    $this.entries.splice(idx, 1);

                    if ($this.pages > 1 && !$this.entries.length) {
                        $this.page = $this.page == 1 ? 1 : $this.page - 1;
                        $this.load();
                        return;
                    }

                    $this.update();
                    $this.checkselected();
                });

            }.bind(this));
        }

        removeSelected() {

            if (!this.selected.length) {
                return;
            }

            App.ui.confirm('Are you sure?', function() {

                var promises = [];

                this.entries = this.entries.filter(function(entry, yepp){

                    yepp = ($this.selected.indexOf(entry._id) === -1);

                    if (!yepp) {
                        promises.push(App.request('/collections/trash/delete/'+$this.collection.name, {filter: {'_id':entry._id}}));
                    }

                    return yepp;
                });

                Promise.all(promises).then(function(){

                    App.ui.notify(promises.length > 1 ? (promises.length + " items removed") : "Item removed", "success");

                    $this.loading = false;

                    if ($this.pages > 1 && !$this.entries.length) {
                        $this.page = $this.page == 1 ? 1 : $this.page - 1;
                        $this.load();
                    } else {
                        $this.update();
                    }

                });

                this.loading = true;
                this.update();
                this.checkselected(true);

            }.bind(this));

        }

    </script>

</div>