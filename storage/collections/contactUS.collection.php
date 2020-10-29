<?php
 return array (
  'name' => 'contactUS',
  'label' => 'contact us',
  '_id' => 'contactUS5e1ca503f31aa',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'content',
      'label' => 'content',
      'type' => 'wysiwyg',
      'default' => '',
      'info' => 'content of the contactUS ',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'editor' => 
        array (
          'element_format' => 'html',
          'plugins' => 'print preview paste importcss searchreplace autolink directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools textpattern noneditable help charmap emoticons',
          'menubar' => 'file edit view insert format tools table help',
          'noneditable_noneditable_class' => 'mceNonEditable',
          'toolbar_drawer' => 'sliding',
          'image_advtab' => 'true',
          'contextmenu' => 'link image imagetools table',
          'toolbar' => 'undo redo | bold italic underline strikethrough | fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          'font_formats' => 'Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats',
          'fontsize_formats' => '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    1 => 
    array (
      'name' => 'en_content',
      'label' => 'English content',
      'type' => 'wysiwyg',
      'default' => '',
      'info' => 'English content for contact page',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'editor' => 
        array (
          'element_format' => 'html',
          'plugins' => 'print preview paste importcss searchreplace autolink directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools textpattern noneditable help charmap emoticons',
          'menubar' => 'file edit view insert format tools table help',
          'noneditable_noneditable_class' => 'mceNonEditable',
          'toolbar_drawer' => 'sliding',
          'image_advtab' => 'true',
          'contextmenu' => 'link image imagetools table',
          'toolbar' => 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          'font_formats' => 'Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats',
          'fontsize_formats' => '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
  ),
  'sortable' => false,
  'in_menu' => false,
  '_created' => 1578935555,
  '_modified' => 1582892357,
  'color' => '#8E8271',
  'acl' => 
  array (
    'public' => 
    array (
      'entries_edit' => false,
      'entries_view' => true,
    ),
    'CANDO' => 
    array (
      'entries_view' => true,
      'entries_edit' => true,
      'entries_create' => false,
    ),
  ),
  'rules' => 
  array (
    'create' => 
    array (
      'enabled' => false,
    ),
    'read' => 
    array (
      'enabled' => false,
    ),
    'update' => 
    array (
      'enabled' => false,
    ),
    'delete' => 
    array (
      'enabled' => false,
    ),
  ),
  'contentpreview' => 
  array (
    'enabled' => true,
  ),
  'icon' => 'email.svg',
);