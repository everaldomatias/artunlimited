<?php
/**
* Adicionamos uma acção no inicio do carregamento do WordPress
* através da função add_action( 'init' )
*/

add_action( 'init', 'create_post_type_portfolios' );

/** * Esta é a função que é chamada pelo add_action() */
function create_post_type_portfolios() {
	/**     * Labels customizados para o tipo de post     */
	$labels = array(
		'name' => _x('Portfolio', 'post type general name'),
		'singular_name' => _x('Portfolio', 'post type singular name'),
		'add_new' => _x('Novo Portfolio', 'portfolio'),
		'add_new_item' => __('Novo Portfolio'),
		'edit_item' => __('Editar Portfolio'),
		'new_item' => __('Novo Portfolio'),
		'all_items' => __('Ver Todos'),
		'view_item' => __('Ver Portfolio'),
		'search_items' => __('Procurar Projetos'),
		'not_found' =>  __('Nenhum portfolio encontrado'),
		'not_found_in_trash' => __('Nenhum portfolio encontrado no lixo'),
		'parent_item_colon' => '',
		'menu_name' => 'Portfolio'
    );

/**     * Registamos o tipo de post portfolios através desta função     
		* passando-lhe os labels e parâmetros de controlo.
 */
    register_post_type( 'portfolio', array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'has_archive' => 'portfolio',
		'query_var' => true,
		'rewrite' => array(
		'slug' => 'portfolio',
		'with_front' => false,
	    ),
	    'capability_type' => 'post',
	    'has_archive' => true,
	    'hierarchical' => true,
	    'menu_position' => null,
	    'supports' => array('title','editor','thumbnail')
		)    );

	flush_rewrite_rules();}


register_taxonomy(
	"area", 
		"portfolio", 
		array(            
		"label" => "Areas", 
		"singular_label" => "Area", 
		"rewrite" => true,
		"hierarchical" => true
	)
);

// Adiciona a coluna Areas ao Custom Post Type Projetos
add_filter( 'manage_portfolio_posts_columns', 'ilc_cpt_columns' );
add_action('manage_portfolio_posts_custom_column', 'ilc_cpt_custom_column', 10, 2);

function ilc_cpt_columns($defaults) {
    $defaults['area'] = 'Area';
    return $defaults;
}

function ilc_cpt_custom_column($column_name, $post_id) {
    $taxonomy = $column_name;
    $post_type = get_post_type($post_id);
    $terms = get_the_terms($post_id, $taxonomy);
 
    if ( !empty($terms) ) {
        foreach ( $terms as $term )
            $post_terms[] = "<a href='edit.php?post_type={$post_type}&{$taxonomy}={$term->slug}'> " . esc_html(sanitize_term_field('name', $term->name, $term->term_id, $taxonomy, 'edit')) . "</a>";
        echo join( ', ', $post_terms );
    }
    else echo '<i>Nenhuma area.</i>';
}

?>
