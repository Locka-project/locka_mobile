import './theme';
import { React, router, route } from 'reapp-kit';
import _ from 'lodash';
import Immutable from 'immutable';
import Alt from 'alt';

const window = window || global;
window.React = React;
window._ = _;
window.Immutable = Immutable;
window.alt = new Alt();

router(require,
  route('app', '/', { dir: '' },
    route('home', { default: true }),
    route('login')
  )
);
