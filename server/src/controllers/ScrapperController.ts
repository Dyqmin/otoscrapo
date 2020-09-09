import { send } from "micro";
import { get, withNamespace } from "microrouter";

export const ScrapperController = () => {

    const run = get('/run', (req, res) => {
        return send(res, 200, {status: 'OK'})
    });

    return withNamespace('/scrapper')(run)
};
