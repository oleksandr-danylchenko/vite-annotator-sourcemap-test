/// <reference types="vite/client" />

import { TextAnnotator } from '@recogito/text-annotator';

declare global {
  interface Window {
    r?: TextAnnotator;
  }
}
