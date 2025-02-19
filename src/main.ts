import './style.css'

import { createTextAnnotator, HighlightStyleExpression } from '@recogito/text-annotator';
import '@recogito/text-annotator/dist/text-annotator.css';

window.onload = async () => {
   const contentContainer = document.getElementById('content');
   if (!contentContainer) {
    throw new Error('Could not find content container');
   }

  const style: HighlightStyleExpression = ((_annotation, state) =>
    ({
      fill: "rgb(217, 233, 255)",
      fillOpacity: state.selected ? 0.9 : 0.5,
      underlineColor: '#9b3c06',
      underlineThickness: 2
    }));

  const r = createTextAnnotator(contentContainer, {
    renderer: 'SPANS',
    style
  });

  // Make global so we can manipulate from the console
  window.r = r;
};
