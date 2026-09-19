<?php
/**
 * Plugin Name: Every-Tool SpeechTimer
 * Description: Voegt de Every-Tool functionaliteit toe via een shortcode.
 * Version: 1.0
 * Author: Bodhi Rombley
 */

// Voorkom direct misbruik van het bestand
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Laad de benodigde CSS en JS in op de pagina waar de shortcode gebruikt wordt
function speechtimer_enqueue_assets() {
    $plugin_url = plugin_dir_url( __FILE__ );

    // Laad jouw bestaande stylesheet
    wp_enqueue_style( 'speechtimer-style', $plugin_url . 'style.css', array(), '1.0' );

    // Laad jouw bestaande JavaScript (defer zodat het laadt nadat de HTML klaar is)
    wp_enqueue_script( 'speechtimer-script', $plugin_url . 'script.js', array(), '1.0', true );
}

// Shortcode functie: [every_tool]
function speechtimer_shortcode() {
    // Zorg ervoor dat de scripts worden ingeladen
    speechtimer_enqueue_assets();

    // Haal de HTML op uit index.html of zet het direct hier neer
    $html_file = plugin_dir_path( __FILE__ ) . 'index.html';
    
    if ( file_exists( $html_file ) ) {
        // Leest de inhoud van je index.html bestand uit de repository
        $content = file_get_contents( $html_file );
        
        // Optioneel: filter de <html>, <head> en <body> tags eruit zodat alleen de innerlijke inhoud overblijft voor WordPress
        // Maar als je index.html al schone content bevat binnen <main>, kun je het direct tonen:
        return '<div class="every-tool-wrapper">' . $content . '</div>';
    }

    return '<p>Every-Tool bestanden niet gevonden.</p>';
}
add_shortcode( 'every_tool', 'speechtimer_shortcode' );
