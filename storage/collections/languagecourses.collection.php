<?php
 return array (
  'name' => 'languagecourses',
  'label' => 'CANDO language courses',
  '_id' => 'languagecourses5e1cc1ad0ee08',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'name',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => 'name of course',
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
    1 => 
    array (
      'name' => 'en_name',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => 'English name of a course',
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
    2 => 
    array (
      'name' => 'logo',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => 'image of this course',
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
    3 => 
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
      'required' => true,
    ),
    4 => 
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
      'required' => true,
    ),
    5 => 
    array (
      'name' => 'header_background_img',
      'label' => '',
      'type' => 'image',
      'default' => '',
      'info' => 'top header background image of this post',
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
      'name' => 'first_card_language_courses',
      'label' => '',
      'type' => 'boolean',
      'default' => '',
      'info' => 'part of first card',
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
      'name' => 'second_card_language_courses',
      'label' => '',
      'type' => 'boolean',
      'default' => '',
      'info' => 'part of second card',
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
    8 => 
    array (
      'name' => 'third_card_language_courses',
      'label' => '',
      'type' => 'boolean',
      'default' => '',
      'info' => 'part of fourth card',
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
    9 => 
    array (
      'name' => 'fourth_card_language_courses',
      'label' => '',
      'type' => 'boolean',
      'default' => '',
      'info' => 'part of fourth card',
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
    10 => 
    array (
      'name' => 'en_desc',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => 'English description of card',
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
    11 => 
    array (
      'name' => 'posts',
      'label' => '',
      'type' => 'collectionlink',
      'default' => '',
      'info' => 'communicate with post collection',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'link' => 'post',
        'multiple' => true,
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
  '_created' => 1578942893,
  '_modified' => 1579296699,
  'color' => '#5D9CEC',
  'acl' => 
  array (
    'public' => 
    array (
      'entries_view' => false,
    ),
    'CANDO' => 
    array (
      'entries_view' => false,
      'entries_edit' => false,
      'entries_create' => false,
      'entries_delete' => false,
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
  'icon' => 'post.svg',
);