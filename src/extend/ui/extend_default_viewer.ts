import 'neuroglancer/sliceview/chunk_format_handlers';

import {StatusMessage} from 'neuroglancer/status';
import {DisplayContext} from 'neuroglancer/display_context';
import {ExtendViewer} from 'extend/viewer';
import {disableContextMenu, disableWheel} from 'neuroglancer/ui/disable_default_actions';

export function makeExtendViewer() {
  disableContextMenu();
  disableWheel();
  try {
    let display = new DisplayContext(document.getElementById('neuroglancer-container')!);
    return new ExtendViewer(display);
  } catch (error) {
    StatusMessage.showMessage(`Error: ${error.message}`);
    throw error;
  }
}
