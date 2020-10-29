
<?php if ($form['color']) { ?>
<style>
    .app-header { border-top: 8px <?php echo  $form['color'] ; ?> solid; }
</style>
<?php } ?>

<div>
    <ul class="uk-breadcrumb">
        <li><a href="<?php $app->route('/forms'); ?>"><?php echo $app("i18n")->get('Forms'); ?></a></li>
        <li class="uk-active" data-uk-dropdown>

            <a><i class="uk-icon-bars"></i> <?php echo  htmlspecialchars(@$form['label'] ? $form['label']:$form['name']) ; ?></a>

            <div class="uk-dropdown">
                <ul class="uk-nav uk-nav-dropdown">
                    <li class="uk-nav-header"><?php echo $app("i18n")->get('Actions'); ?></li>
                    <li><a href="<?php $app->route('/forms/form/'.$form['name']); ?>"><?php echo $app("i18n")->get('Edit'); ?></a></li>
                    <li class="uk-nav-divider"></li>
                    <li class="uk-text-truncate"><a href="<?php $app->route('/forms/export/'.$form['name']); ?>" download="<?php echo  $form['name'] ; ?>.form.json"><?php echo $app("i18n")->get('Export entries'); ?></a></li>
                </ul>
            </div>

        </li>
    </ul>

</div>

<div riot-view>

    <div class="uk-margin uk-text-muted uk-text-center" if="{ready && entries.length}">

        <img class="uk-svg-adjust" src="<?php echo $app->pathToUrl($form['icon'] ? 'assets:app/media/icons/'.$form['icon']:'forms:icon.svg'); ?>" width="50" alt="icon" data-uk-svg>
        <?php if ($form['description']) { ?>
        <div class="uk-container-center uk-margin-top uk-width-medium-1-2">
            <?php echo  htmlspecialchars($form['description']) ; ?>
        </div>
        <?php } ?>
    </div>

    <div>

        <div class="uk-width-medium-1-3 uk-viewport-height-1-2 uk-container-center uk-text-center uk-flex uk-flex-center uk-flex-middle" if="{ loading }">

            <div class="uk-animation-fade uk-text-center">

                <cp-preloader class="uk-container-center"></cp-preloader>

            </div>

        </div>

        <div class="uk-width-medium-1-3 uk-viewport-height-1-2 uk-container-center uk-text-center uk-flex uk-flex-middle" if="{!loading && !entries.length}">

            <div class="uk-animation-scale uk-width-1-1 uk-text-muted">

                <img class="uk-svg-adjust" src="<?php echo $app->pathToUrl($form['icon'] ? 'assets:app/media/icons/'.$form['icon']:'forms:icon.svg'); ?>" width="50" alt="icon" data-uk-svg>
                <?php if ($form['description']) { ?>
                <div class="uk-margin-top uk-text-small">
                    <?php echo  htmlspecialchars($form['description']) ; ?>
                </div>
                <?php } ?>
                <hr>
                <span class="uk-text-large"><?php echo $app("i18n")->get('No entries'); ?></span>

            </div>

        </div>

        <div class="uk-clearfix uk-margin-top uk-flex uk-flex-middle" show="{!loading && selected.length}">

            <div class="uk-flex-item-1 uk-flex uk-flex-middle uk-h3">
                <div class="uk-margin-small-right"><img src="<?php echo $app->pathToUrl($form['icon'] ? 'assets:app/media/icons/'.$form['icon']:'forms:icon.svg'); ?>" width="40" alt="icon"></div>
                <strong class="uk-margin-small-right"><?php echo  htmlspecialchars(@$form['label'] ? $form['label']:$form['name']) ; ?></strong> 
                <?php echo $app("i18n")->get('Entries'); ?>
            </div>

            <div class="uk-animation-fade" if="{ selected.length }">

                <a class="uk-button uk-button-large uk-button-danger" onclick="{ removeselected }">
                    <?php echo $app("i18n")->get('Delete'); ?> <span class="uk-badge uk-badge-contrast uk-margin-small-left">{ selected.length }</span>
                </a>

            </div>

        </div>

        <table class="uk-table uk-table-border uk-table-striped uk-margin-large-top" if="{ entries.length }">
            <thead>
                <tr>
                    <th width="20"><input class="uk-checkbox" type="checkbox" data-check="all"></th>
                    <th class="uk-text-small"><?php echo $app("i18n")->get('Entry'); ?></th>
                    <th width="100" class="uk-text-small"><?php echo $app("i18n")->get('Created'); ?></th>
                    <th width="20"></th>
                </tr>
            </thead>
            <tbody>
                <tr each="{entry, idx in entries}">
                    <td width="20"><input class="uk-checkbox" type="checkbox" data-check data-id="{ entry._id }"></td>
                    <td>
                        <div class="uk-text-small uk-margin-small-top" each="{ value, name in entry.data }">
                            <strong>{name}:</strong>
                            <div>
                                {value}
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="uk-text-muted">{ App.Utils.dateformat( new Date( 1000 * entry._modified )) }</span>
                    </td>
                    <td>
                        <a class="uk-text-danger" onclick="{ parent.remove }" title="<?php echo $app("i18n")->get('Delete'); ?>"><i class="uk-icon-trash-o"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>

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


    <script type="view/script">

        var $this = this, $root = App.$(this.root);

        this.ready      = false;
        this.form       = <?php echo  json_encode($form) ; ?>;
        this.count      = 0;
        this.page       = 1;
        this.limit      = 20;
        this.entries    = [];

        this.loading    = true;

        this.selected = [];

        this.on('mount', function(){

            $root.on('click', '[data-check]', function() {

                if (this.getAttribute('data-check') == 'all') {
                    $root.find('[data-check][data-id]').prop('checked', this.checked);
                }

                $this.checkselected();

                $this.update();
            });

            this.load();

        });

        remove(e, entry, idx) {

            entry = e.item.entry
            idx   = e.item.idx;

            App.ui.confirm("Are you sure?", function() {

                App.callmodule('forms:remove', [this.form.name, {'_id':entry._id}]).then(function(data) {

                    App.ui.notify("Entry removed", "success");

                    $this.entries.splice(idx, 1);

                    if ($this.pages > 1 && !$this.entries.length) {
                        $this.page = $this.page == 1 ? 1 : $this.page - 1;
                        $this.load();
                        return;
                    }

                    $this.update();

                    $this.checkselected(true);
                });

            }.bind(this));
        }

        removeselected() {

            if (this.selected.length) {

                App.ui.confirm("Are you sure?", function() {

                    var promises = [];

                    this.entries = this.entries.filter(function(entry, yepp){

                        yepp = ($this.selected.indexOf(entry._id) === -1);

                        if (!yepp) {
                            promises.push(App.callmodule('forms:remove', [$this.form.name, {'_id':entry._id}]));
                        }

                        return yepp;
                    });

                    Promise.all(promises).then(function(){

                        App.ui.notify("Entries removed", "success");

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
        }

        load() {

            var options = {
                sort: {_created: -1},
                limit: this.limit,
                skip: (this.page - 1) * this.limit
            };

            this.loading = true;

            return App.request('/forms/find', {form:this.form.name, options:options}).then(function(data){

                window.scrollTo(0, 0);

                this.entries = data.entries;

                this.loading = false;

                this.pages   = data.pages;
                this.page    = data.page;
                this.count   = data.count;

                this.checkselected();
                this.update();

            }.bind(this))
        }

        loadpage(page) {
            this.page = page > this.pages ? this.pages:page;
            this.load();
        }

        checkselected(update) {

            var checkboxes = $root.find('[data-check][data-id]'),
                selected   = checkboxes.filter(':checked');

            this.selected = [];

            if (selected.length) {

                selected.each(function(){
                    $this.selected.push(App.$(this).attr('data-id'));
                });
            }

            $root.find('[data-check="all"]').prop('checked', checkboxes.length === selected.length);

            if (update) {
                this.update();
            }
        }

        updateLimit(limit) {
            this.limit = limit;
            this.page = 1;
            this.load();
        }

    </script>

</div>
