<?php
/**
 * Plugin Name: Every-Tool SpeechTimer
 * Description: Laadt de complete Every-Tool website/tool set via een shortcode.
 * Version: 1.0
 * Author: Bodhi Rombley
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function speechtimer_enqueue_assets() {
    $plugin_url = plugin_dir_url( __FILE__ );

    // Laad stylesheet
    wp_enqueue_style( 'speechtimer-style', $plugin_url . 'style.css', array(), '1.0' );

    // Laad externe bibliotheek (heic2any) uit je HTML
    wp_enqueue_script( 'heic2any-lib', 'https://cdn.jsdelivr.net/npm/heic2any@0.0.4/dist/heic2any.min.js', array(), null, false );

    // Laad eigen JavaScript (inclusief true om achteraan te laden)
    wp_enqueue_script( 'speechtimer-script', $plugin_url . 'script.js', array('heic2any-lib'), '1.0', true );
}

function speechtimer_shortcode() {
    speechtimer_enqueue_assets();

    $html_file = plugin_dir_path( __FILE__ ) . 'index.html';
    
    if ( file_exists( $html_file ) ) {
        // Leest de volledige HTML in
        $content = file_get_contents( $html_file );
        
        // Retourneert de HTML binnen een veilige wrapper div
        return '<div class="every-tool-plugin-container">' . $content . '</div>';
    }

    return '<p>Every-Tool bestanden niet gevonden.</p>';
}
add_shortcode( 'every_tool', 'speechtimer_shortcode' );
