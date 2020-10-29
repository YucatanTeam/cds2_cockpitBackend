<?php
 return array (
  'name' => 'country',
  'label' => 'available countries',
  '_id' => 'country5e1ca83f01f85',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'name',
      'label' => 'country name',
      'type' => 'text',
      'default' => '',
      'info' => 'name of the country',
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
      'label' => 'en name',
      'type' => 'text',
      'default' => '',
      'info' => 'English name of country',
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
      'label' => 'logo',
      'type' => 'image',
      'default' => '',
      'info' => 'country flag',
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
      'name' => 'main',
      'label' => 'main card',
      'type' => 'boolean',
      'default' => '',
      'info' => 'part of main cards',
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
      'name' => 'slug',
      'label' => 'slug',
      'type' => 'text',
      'default' => '',
      'info' => 'Persian slug',
      'group' => '',
      'localize' => true,
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
      'name' => 'en_slug',
      'label' => 'en slug',
      'type' => 'text',
      'default' => '',
      'info' => 'English slug',
      'group' => '',
      'localize' => true,
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
      'name' => 'header_background_img',
      'label' => 'header background img',
      'type' => 'image',
      'default' => '',
      'info' => 'background image of header',
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
    7 => 
    array (
      'name' => 'first_card_other_country',
      'label' => 'first card other country',
      'type' => 'boolean',
      'default' => '',
      'info' => 'part of other country - first card',
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
      'name' => 'second_card_other_country',
      'label' => 'second card other country',
      'type' => 'boolean',
      'default' => '',
      'info' => 'part of other country - second card',
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
      'name' => 'third_card_other_country',
      'label' => 'third card other country',
      'type' => 'boolean',
      'default' => '',
      'info' => 'part of other country - third card',
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
      'name' => 'posts',
      'label' => 'posts',
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
  '_created' => 1578936383,
  '_modified' => 1579296632,
  'color' => '#EC87C0',
  'acl' => 
  array (
    'public' => 
    array (
      'entries_view' => false,
    ),
    'CANDO' => 
    array (
      'collection_edit' => false,
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
    'url' => '',
  ),
  'icon' => 'globe.svg',
  'description' => 'NEVER DELETE THE 3 FIRST ENTRIES.
THOSE ARE FOR MAIN COUNTRIES AND IF YOU WANT TO CHANGE THEM JUST EDIT THEM!!!!!!!

DO NOT TURN THE MAIN VALUE OFF FOR THESE ENTRIES.',
);