
<div>
    <ul class="uk-breadcrumb">
        <li><a href="<?php $app->route('/settings'); ?>"><?php echo $app("i18n")->get('Settings'); ?></a></li>
        <li class="uk-active"><span><?php echo $app("i18n")->get('System Information'); ?></span></li>
    </ul>
</div>

<div riot-view>

    <div class="uk-grid" data-uk-grid-margin>

        <div class="uk-width-medium-3-4">

            <div id="settings-info" class="uk-switcher">

                <div>

                    <p><strong><span class="uk-badge app-badge">System</span></strong></p>

                    <h4 class="uk-text-bold"><?php echo $app("i18n")->get('General'); ?></h4>

                    <table class="uk-table uk-table-striped">
                        <tbody>
                            <tr>
                                <td width="30%"><?php echo $app("i18n")->get('Version'); ?></td>
                                <td><?php echo  $info['app']['version'] ; ?></td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 class="uk-text-bold"><?php echo $app("i18n")->get('Cache'); ?></h4>

                    <div class="uk-margin">

                        <div class="uk-panel uk-panel-box" if="{ !cleaning && cacheSize }">
                            { cacheSize } <a class="uk-margin-small-left" title="<?php echo $app("i18n")->get('Clear cache'); ?>" data-uk-tooltip="pos:'right'" onclick="{cleanUpCache}"><i class="uk-icon-button uk-icon-trash-o"></i></a>
                        </div>

                        <div class="uk-alert" if="{ cleaning }">
                            <i class="uk-icon-spinner uk-icon-spin"></i> <?php echo $app("i18n")->get('Clearing cache...'); ?>
                        </div>

                        <div class="uk-alert uk-alert-success" if="{ !cacheSize }">
                            <?php echo $app("i18n")->get('Cache is clean'); ?>
                        </div>
                    </div>

                    <?php if ($app->module('cockpit')->isSuperAdmin() && count(getenv())) { ?>

                    <h4 class="uk-text-bold"><?php echo $app("i18n")->get('Environment Variables'); ?></h4>

                    <table class="uk-table uk-table-striped">
                        <tbody>
                            <?php foreach (getenv() as $key => $value) { ?>
                            <tr>
                                <td width="30%" class="uk-text-small uk-text-bold"><?php echo  $key ; ?></td>
                                <td class="uk-text-small"><?php echo  $value ; ?></td>
                            </tr>
                            <?php } ?>
                        </tbody>
                    </table>

                    <?php } ?>

                </div>

                <div>
                    <p>
                        <strong><span class="uk-badge app-badge">PHP</span></strong>
                    </p>
                    <table class="uk-table uk-table-striped">
                        <tbody>
                            <tr>
                                <td width="30%">Version</td>
                                <td><?php echo  $info['phpversion'] ; ?></td>
                            </tr>
                            <tr>
                                <td width="30%">PHP SAPI</td>
                                <td><?php echo  $info['sapi_name'] ; ?></td>
                            </tr>
                            <tr>
                                <td width="30%">System</td>
                                <td><?php echo  $info['system'] ; ?></td>
                            </tr>
                            <tr>
                                <td width="30%">Loaded Extensions</td>
                                <td><?php echo  implode(", ", $info['extensions']) ; ?></td>
                            </tr>
                            <tr>
                                <td width="30%">Max. execution time</td>
                                <td><?php echo  ini_get("max_execution_time") ; ?> sec.</td>
                            </tr>
                            <tr>
                                <td width="30%">OPCache enabled</td>
                                <td><span class="uk-badge uk-badge-outline uk-text-<?php echo  ini_get("opcache.enable") ? 'success':'danger' ; ?>"><?php echo  ini_get("opcache.enable") ? 'Yes':'No' ; ?></span></td>
                            </tr>
                            <tr>
                                <td width="30%">Memory limit</td>
                                <td><?php echo  ini_get("memory_limit") ; ?></td>
                            </tr>
                            <tr>
                                <td width="30%">Upload file size limit</td>
                                <td><?php echo  ini_get("upload_max_filesize") ; ?></td>
                            </tr>
                            <tr>
                                <td width="30%">Realpath Cache</td>
                                <td><?php echo  ini_get("realpath_cache_size") ; ?> / <?php echo  ini_get("realpath_cache_ttl") ; ?> (ttl)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            <?php $app->trigger("cockpit.settings.infopage.main.menu"); ?>
            </div>


            <?php $app->trigger("cockpit.settings.infopage.main"); ?>

        </div>

        <div class="uk-width-medium-1-4">

            <ul class="uk-nav uk-nav-side" data-uk-switcher="connect:'#settings-info'">
                <li><a href="#SYSTEM">System</a></li>
                <li><a href="#PHP">PHP</a></li>
                <?php $app->trigger("cockpit.settings.infopage.aside.menu"); ?>
            </ul>

            <?php $app->trigger("cockpit.settings.infopage.aside"); ?>
        </div>

        <script type="view/script">

            var $this = this;

            this._system = {};
            this.system  = <?php echo  json_encode($info['app']) ; ?>;
            this.cacheSize = <?php echo  $info['cacheSize'] ? '"'.$info['cacheSize'].'"':0 ; ?>;
            this.loading = false;

            this.on('mount', function() {


            });

            cleanUpCache() {

                this.cleaning = true;

                App.callmodule('cockpit:clearCache').then(function(){
                    setTimeout(function(){
                        $this.cleaning = false;
                        $this.cacheSize = 0;
                        $this.update();
                    }, 1000);
                });
            }

            version_compare(v1, v2, operator) {

              var i, x, compare = 0, vm = {
                'dev': -6,
                'alpha': -5,
                'a': -5,
                'beta': -4,
                'b': -4,
                'RC': -3,
                'rc': -3,
                '#': -2,
                'p': 1,
                'pl': 1
              }

              var _prepVersion = function (v) {
                v = ('' + v).replace(/[_\-+]/g, '.')
                v = v.replace(/([^.\d]+)/g, '.$1.').replace(/\.{2,}/g, '.')
                return (!v.length ? [-8] : v.split('.'))
              }

              var _numVersion = function (v) {
                return !v ? 0 : (isNaN(v) ? vm[v] || -7 : parseInt(v, 10))
              }

              v1 = _prepVersion(v1)
              v2 = _prepVersion(v2)
              x = Math.max(v1.length, v2.length)
              for (i = 0; i < x; i++) {
                if (v1[i] === v2[i]) {
                  continue
                }
                v1[i] = _numVersion(v1[i])
                v2[i] = _numVersion(v2[i])
                if (v1[i] < v2[i]) {
                  compare = -1
                  break
                } else if (v1[i] > v2[i]) {
                  compare = 1
                  break
                }
              }
              if (!operator) {
                return compare
              }

              switch (operator) {
                case '>':
                case 'gt':
                  return (compare > 0)
                case '>=':
                case 'ge':
                  return (compare >= 0)
                case '<=':
                case 'le':
                  return (compare <= 0)
                case '===':
                case '=':
                case 'eq':
                  return (compare === 0)
                case '<>':
                case '!==':
                case 'ne':
                  return (compare !== 0)
                case '':
                case '<':
                case 'lt':
                  return (compare < 0)
                default:
                  return null
              }
            }

        </script>

    </div>

</div>
