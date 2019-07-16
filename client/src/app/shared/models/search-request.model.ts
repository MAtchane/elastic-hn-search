export class SearchRequest {
    constructor(
        public term: string,
        public sortBy: string,
        public page: number,
        public size: number) { }
}