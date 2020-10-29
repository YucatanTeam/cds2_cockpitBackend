<?php
 return array (
  'name' => 'socialmedias',
  'label' => 'CANDO social media links',
  '_id' => 'socialmedias5e1edfa55aecb',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'link',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => 'social media link',
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
      'name' => 'logo',
      'label' => '',
      'type' => 'image',
      'default' => '',
      'info' => 'logo of the social media',
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
  ),
  'sortable' => false,
  'in_menu' => false,
  '_created' => 1579081637,
  '_modified' => 1579296764,
  'color' => '#A0D468',
  'acl' => 
  array (
    'public' => 
    array (
      'entries_edit' => false,
      'entries_view' => false,
    ),
    'CANDO' => 
    array (
      'entries_view' => false,
      'entries_create' => false,
      'entries_edit' => false,
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
);