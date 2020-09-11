import { ScrapperEngine } from "../models";


// TODO: ZMIENIC " NA '

class OtomotoEngine implements ScrapperEngine {
    getLastPage(doc: Document): number{
        const lastPage = doc.querySelector(".om-pager > li:nth-last-child(2) > a > span");

        return Number(lastPage?.textContent) || 1;
    };

    getNextPageUrl(originUrl: string) {
        const url = new URL(originUrl);
        const params = url.search.split('&');

        url.search = params.map(param => {
            if (param.includes('page=')) {
                const [_, currentPageNumber] = param.split('=');
                return [_, Number(currentPageNumber) + 1].join('=')
            }
           return param;
        }).join('&');

        return url.href
    }
}

export default new OtomotoEngine();
