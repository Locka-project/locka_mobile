import './theme';
import { router, route } from 'reapp-kit';

router(require,
  route('app', '/', { dir: '' },
    route('home'),
    route('login')
  )
);
