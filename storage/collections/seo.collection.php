<?php
 return array (
  'name' => 'seo',
  'label' => 'CANDO SEO helper',
  '_id' => 'seo5e1dcbe33a7c2',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'page',
      'label' => 'name of the page',
      'type' => 'text',
      'default' => '',
      'info' => 'SEO tags for this page',
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
      'name' => 'tags',
      'label' => 'content',
      'type' => 'tags',
      'default' => '',
      'info' => 'description keywords for this page',
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
  '_created' => 1579011043,
  '_modified' => 1579262014,
  'color' => '#AC92EC',
  'acl' => 
  array (
    'CANDO' => 
    array (
      'entries_view' => true,
      'entries_edit' => true,
      'entries_create' => false,
    ),
    'public' => 
    array (
      'entries_view' => true,
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
  'description' => 'KEYWORDS SEPARATED BY ENTER.

:::::::WORD PER ENTER:::::::',
  'icon' => 'button.svg',
);