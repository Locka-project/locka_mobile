import './theme';
import { React, router, route } from 'reapp-kit';
import _ from 'lodash';
import Immutable from 'immutable';
import Alt from 'alt';
import Api from 'api/Api';

const config = {
  dev: {
    API_URL: 'http://localhost:1337',
  },
  prod: {
    API_URL: 'http://locka',
  },
};

// globals
const window = window || global;
window.React = React;
window._ = _;
window.Immutable = Immutable;
window.alt = new Alt();
window.CONFIG = config.dev;
window.Api = Api;

router(require,
  route('app', '/', { dir: '' },
    route('home', '/', { dir: '' },
     route('devices', '/',
       route('deviceNew', '/device/create'),
       route('deviceDetails', '/device/:deviceId')
     ),
     route('settings', '/settings')
    ),
    route('login')
  )
);
