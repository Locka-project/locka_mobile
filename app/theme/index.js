import { theme } from 'reapp-kit';
import iOS from 'reapp-kit/themes/ios';
import components from './constants/components';
import styles from './styles';
import base from './constants/base';

theme({
  constants: [
    iOS.constants.base,
    base,
    iOS.constants.components,
    components,
  ],
  styles: [
    iOS.styles,
    styles,
  ],
  animations: [iOS.animations],
});
