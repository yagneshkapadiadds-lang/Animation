<?php
/**
 * astra-child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package astra-child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );


function monster_custom_scripts() {
    wp_enqueue_script(
        'gsap',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
        array(),
        '3.12.2',
        true
    );

    wp_enqueue_script(
        'monster-custom-js',
        get_stylesheet_directory_uri() . '/script.js',
        array('gsap'),
        '1.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'monster_custom_scripts');

function monster_enqueue_scripts() {
    wp_enqueue_script(
        'gsap',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
        array(),
        null,
        true
    );

    wp_enqueue_script(
        'monster-custom-js',
        get_stylesheet_directory_uri() . '/js/script.js',
        array('gsap'),
        '1.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'monster_enqueue_scripts');

function dragon_gallery_assets() {
    wp_enqueue_script(
        'gsap',
        'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js',
        array(),
        null,
        true
    );

    wp_enqueue_script(
        'gsap-scrolltrigger',
        'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js',
        array('gsap'),
        null,
        true
    );

    wp_enqueue_script(
        'dragon-gallery-js',
        get_stylesheet_directory_uri() . '/js/custom.js',
        array('gsap', 'gsap-scrolltrigger'),
        time(),
        true
    );
}
add_action('wp_enqueue_scripts', 'dragon_gallery_assets');












function unhung_enqueue_assets() {

    // Load GSAP
    wp_enqueue_script(
        'gsap',
        'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js',
        array(),
        null,
        true
    );

    // Load ScrollTrigger (depends on GSAP)
    wp_enqueue_script(
        'gsap-scrolltrigger',
        'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js',
        array('gsap'),
        null,
        true
    );

    // Load your custom JS
    wp_enqueue_script(
        'unhung-custom-js',
        get_stylesheet_directory_uri() . '/js/script.js',
        array('gsap', 'gsap-scrolltrigger'),
        '1.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'unhung_enqueue_assets');