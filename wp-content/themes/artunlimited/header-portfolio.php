<?php
/**
* The Header for our theme.
* Displays all of the <head> section and everything up till <div id="main">
* @package artunlimited
*/
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>><head><meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<link href='http://fonts.googleapis.com/css?family=Roboto:300,300italic,500,500italic,700italic,700' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Gentium+Book+Basic' rel='stylesheet' type='text/css'>
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
<a class="barra" href="<?php bloginfo( 'home' )?>">
<div class="barra">
	<div class="top-barra"></div>
    <div class="seta-barra"></div>
	<div class="wrapper-barra">	Portfolio <span class="icon"></span></div>
</div><!-- .barra -->
</a>
<?php do_action( 'before' ); ?>
<div id="main" class="site-main">