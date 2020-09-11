import { send } from "micro";
import { get, withNamespace } from "microrouter";
import { ScrapperService } from "../services";

export const ScrapperController = () => {

    const run = get('/run', async (req, res) => {
        await ScrapperService.run();
        return send(res, 200, {status: 'OK'})
    });

    return withNamespace('/scrapper')(run)
};
