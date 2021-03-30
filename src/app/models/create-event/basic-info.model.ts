export class BasicInfo{

    constructor(
        public title: string,
        public description: string,
        public type: number,
        public category_id: number,
        public subcategory_id: number,
        public tags: string,
        public start_date: string,
        public end_date: string,
        public recurring: number,
        public venue: string,
        public gps: string,
        public venue_tobe_announced: number,
        public hosting: number
    ) {}
    
}