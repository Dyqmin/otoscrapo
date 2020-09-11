const got = require('got');
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

import { OtomotoEngine} from "../core";

import { ScrapperEngine } from "../models";

class ScrapperService {
    engine: ScrapperEngine;

    constructor(engine: ScrapperEngine) {
        this.engine = engine;
    }

    public async run() {
        const url = 'https://www.otomoto.pl/osobowe/lexus/ct/';
        const response = await got(url);
        const dom = new JSDOM(response.body);


        const nodes: Node[] = [...dom.window.document.querySelectorAll('div.offer-item__price > div > div > span > span:nth-child(1)')];

        const prices = nodes.map(e => String(e.textContent).replace(/ /g, ''));

        console.log(prices);
    }
}

export default new ScrapperService(OtomotoEngine);
