<?php
/**
 * Plugin Name: Validador de CEP para Elementor
 * Description: Valida CEPs e mostra aviso visual em formulários do Elementor.
 * Version: 1.0
 * Author: Leticia Dev
 */

add_action('wp_enqueue_scripts', 'cep_validator_enqueue_scripts');
function cep_validator_enqueue_scripts() {
    
    wp_enqueue_script(
        'jquery-mask',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js',
        array('jquery'),
        null,
        true
    );

    wp_enqueue_script(
        'validador-js',
        plugins_url('validador.js', __FILE__),
        array('jquery', 'jquery-mask'),
        null,
        true
    );

    wp_enqueue_style(
        'cep-validator-css',
        plugins_url('cep-validator.css', __FILE__)
    );
}
?>
