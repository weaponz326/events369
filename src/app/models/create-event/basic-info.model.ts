export class BasicInfo{

    constructor(
        public title?: String,
        public description?: String,
        public type?: Number,
        public category_id?: Number,
        public subcategory_id?: Number,
        public tags?: String,
        public start_date?: Date,
        public end_date?: Date,
        public start_time?: Date,
        public end_time?: Date,
        public venue?: String
    ) {}
    
}