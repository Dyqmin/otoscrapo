import { IncomingMessage, ServerResponse } from "http";

module.exports = (req: IncomingMessage, res: ServerResponse) => {
    res.end('Hello world!');
};
