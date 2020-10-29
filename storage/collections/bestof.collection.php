<?php
 return array (
  'name' => 'bestof',
  'label' => 'best of all URLs',
  '_id' => 'bestof5e1c9cb96f4bd',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'title',
      'label' => 'title of the link',
      'type' => 'text',
      'default' => '',
      'info' => 'paste a URL',
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
      'name' => 'en_title',
      'label' => 'en_title',
      'type' => 'text',
      'default' => '',
      'info' => 'English title of a URL',
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
      'name' => 'link',
      'label' => 'URL',
      'type' => 'text',
      'default' => '',
      'info' => 'best of URL ',
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
  '_created' => 1578933433,
  '_modified' => 1579432780,
  'color' => '#48CFAD',
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
  'description' => 'best of all posts',
  'contentpreview' => 
  array (
    'enabled' => false,
  ),
  'icon' => 'webhooks.svg',
);