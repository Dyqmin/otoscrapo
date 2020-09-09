import { RequestHandler, send } from 'micro';
import { router, get } from 'microrouter';

import Controllers from './controllers';

const notFound: RequestHandler = (req, res) => send(res, 404, 'Not found route');

module.exports = router(
    ...Controllers,
    get('/*', notFound)
);
