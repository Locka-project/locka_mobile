import './theme';
import { React, router, route } from 'reapp-kit';
import _ from 'lodash';
import Immutable from 'immutable';
const window = window || global;
window.React = React;
window._ = _;
window.Immutable = Immutable;

router(require,
  route('app', '/', { dir: '' },
    route('home'),
    route('login')
  )
);
