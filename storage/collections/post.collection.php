<?php
 return array (
  'name' => 'post',
  'label' => 'CANDO posts',
  '_id' => 'post5e1cbef49f768',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'title',
      'label' => 'title',
      'type' => 'text',
      'default' => '',
      'info' => 'Persian title',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    1 => 
    array (
      'name' => 'en_title',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => 'English title',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    2 => 
    array (
      'name' => 'content',
      'label' => '',
      'type' => 'wysiwyg',
      'default' => '',
      'info' => 'content of this post',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'editor' => 
        array (
          'element_format' => 'html',
          'plugins' => 'print preview paste importcss searchreplace autolink directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc textcolor insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons',
          'menubar' => 'file edit view insert format tools table help',
          'noneditable_noneditable_class' => 'mceNonEditable',
          'toolbar_drawer' => 'sliding',
          'image_advtab' => 'true',
          'contextmenu' => 'link image imagetools table',
          'toolbar' => 'undo redo | bold italic underline strikethrough | fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          'font_formats' => 'Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;',
          'fontsize_formats' => '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    3 => 
    array (
      'name' => 'en_content',
      'label' => '',
      'type' => 'wysiwyg',
      'default' => '',
      'info' => 'English content of this post',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'editor' => 
        array (
          'element_format' => 'html',
          'plugins' => 'print preview paste importcss searchreplace autolink directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist textcolor lists wordcount imagetools textpattern noneditable help charmap emoticons',
          'menubar' => 'file edit view insert format tools table help',
          'noneditable_noneditable_class' => 'mceNonEditable',
          'toolbar_drawer' => 'sliding',
          'image_advtab' => 'true',
          'contextmenu' => 'link image imagetools table',
          'content_css' => '[\'//fonts.googleapis.com/css?family=Indie+Flower\']',
          'toolbar' => 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          'font_formats' => 'Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats; Flower=indie flower',
          'fontsize_formats' => '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    4 => 
    array (
      'name' => 'background_head',
      'label' => '',
      'type' => 'image',
      'default' => '',
      'info' => 'background image on the head of the site for a specific post ',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    5 => 
    array (
      'name' => 'logo',
      'label' => '',
      'type' => 'image',
      'default' => '',
      'info' => 'image of this post',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    6 => 
    array (
      'name' => 'newsletter',
      'label' => '',
      'type' => 'boolean',
      'default' => '',
      'info' => 'part of a newsletter',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    7 => 
    array (
      'name' => 'slug',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => 'Persian slug',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    8 => 
    array (
      'name' => 'en_slug',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => 'English slug',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    9 => 
    array (
      'name' => 'tags',
      'label' => '',
      'type' => 'tags',
      'default' => '',
      'info' => 'keywords for SEO, one word per enter.',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    10 => 
    array (
      'name' => 'country',
      'label' => '',
      'type' => 'multipleselect',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'options' => 'switzerland, germany, italy, china, poland, spain, turkey, hungary, russia, sweden, unitedkingdom, canada, newzealand, australia, cyprus',
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    11 => 
    array (
      'name' => 'language_courses',
      'label' => '',
      'type' => 'multipleselect',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'options' => 'swiss, malta, england, malaysia',
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
        0 => 'admin',
      ),
    ),
  ),
  'sortable' => false,
  'in_menu' => false,
  '_created' => 1578942196,
  '_modified' => 1581521155,
  'color' => '#FFCE54',
  'acl' => 
  array (
    'public' => 
    array (
      'entries_view' => true,
    ),
    'CANDO' => 
    array (
      'entries_view' => true,
      'entries_edit' => true,
      'entries_create' => true,
      'entries_delete' => true,
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
    'enabled' => false,
  ),
  'description' => 'all CANDO posts.

IF YOU WANT TO FILL THE ENGLISH ONLY JUST FILL ALL OF ITS RELATED FIELDS OR VISE VERSA.',
  'icon' => 'post-it.svg',
);