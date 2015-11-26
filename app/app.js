import './theme';
import { React, router, route } from 'reapp-kit';
import _ from 'lodash';
import Immutable from 'immutable';
import Alt from 'alt';

const config = {
  dev: {
    API_URL: 'http://localhost:1337',
    SOCKET_URL: 'http://localhost:1337',
  },
  prod: {
    API_URL: 'http://149.12.192.138:1337',
    SOCKET_URL: 'http://149.12.192.138:1337',
  },
};

// globals
const window = global || global;
window.React = React;
window.alt = new Alt();
window._ = _;
window.Immutable = Immutable;
window.CONFIG = config.prod;

import Socket from './api/Socket';
setTimeout(() => {
  window.Socket = new Socket();
}, 2000);

router(require,
  route('app', '/', { dir: '' },
    route('home', '/', { dir: '' },
     route('devices', '/',
       route('deviceNew', '/device/create'),
       route('deviceDetail', '/device/:deviceId')
     ),
     route('settings', '/settings')
    ),
    route('login')
  )
);
