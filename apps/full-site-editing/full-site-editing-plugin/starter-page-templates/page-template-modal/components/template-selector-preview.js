/**
 * WordPress dependencies
 */
/* eslint-disable import/no-extraneous-dependencies */
import { __ } from '@wordpress/i18n';
/* eslint-enable import/no-extraneous-dependencies */

/**
 * Internal dependencies
 */
import BlockFramePreview from './block-iframe-preview';

const TemplateSelectorPreview = ( { blocks = [], viewportWidth } ) => {
	const noBlocks = blocks.length <= 1;
	return (
		/* eslint-disable wpcalypso/jsx-classname-namespace */
		<div className={ `template-selector-preview ${ noBlocks ? 'not-selected' : '' }` }>
			{ noBlocks && (
				<div className="editor-styles-wrapper">
					<div class="template-selector-preview__empty-state">
						{ __( 'Select a layout to preview.', 'full-site-editing' ) }
					</div>
				</div>
			) }
			{ ! noBlocks && <BlockFramePreview blocks={ blocks } viewportWidth={ viewportWidth } /> }
		</div>
		/* eslint-enable wpcalypso/jsx-classname-namespace */
	);
};

export default TemplateSelectorPreview;
