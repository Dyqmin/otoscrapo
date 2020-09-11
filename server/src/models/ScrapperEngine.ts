export interface ScrapperEngine {
    getLastPage(document: Document): number;
    getNextPageUrl(originUrl: string): string;
}
