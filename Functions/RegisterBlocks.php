<?php // phpcs:ignore Squiz.Commenting.FileComment.Missing

namespace MultiBlock;

use MultiBlock\PluginPaths;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class RegisterBlocks
 *
 * This class is responsible for registering custom Gutenberg blocks for the plugin.
 *
 * @package MultiBlock
 */
class RegisterBlocks {


	/**
	 * Constructor for the class.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	/**
	 * Registers custom Gutenberg blocks for the plugin.
	 *
	 * This function is responsible for registering the custom blocks
	 * that are defined within the plugin. It ensures that the blocks
	 * are available for use within the Gutenberg editor.
	 *
	 * @return void
	 */
	public function register_blocks() {
		$blocks_dirs = array(
			PluginPaths::plugin_path() . 'build/blocks/singular/',
			PluginPaths::plugin_path() . 'build/blocks/compiled/',
		);

		foreach ( $blocks_dirs as $blocks_dir ) {
			$block_folders = glob( $blocks_dir . '*', GLOB_ONLYDIR );

			if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
				wp_register_block_metadata_collection(
					$blocks_dir,
					PluginPaths::plugin_path() . 'build/blocks-manifest.php'
				);
			}

			foreach ( $block_folders as $block_path ) {
				$block_json = $block_path . '/block.json';

				if ( file_exists( $block_json ) ) {
					$metadata = json_decode( file_get_contents( $block_json ), true );
					
					// Special handling for interactive blocks
					if ( isset( $metadata['viewScriptModule'] ) ) {
						add_filter( 'should_load_separate_core_block_assets', '__return_true' );
					}
					
					register_block_type( $block_path );
				}
			}
		}
	}
}
