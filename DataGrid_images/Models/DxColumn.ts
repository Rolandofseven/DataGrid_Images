
function getLookupColumn<T>(dataSource?: Array<T>, displayExpr?: string, valueExpr?: string): lookup<T> {
    return {
        dataSource: dataSource,
        valueExpr:valueExpr,
        displayExpr: displayExpr
    }
}


export class DxColumn<T>  {
    public caption: string;
    public dataField: string;
    public dataType: string;
    public lookup: lookup<T>;
    public visible: boolean;
    public format: string;
    public precision: number;
    public customizeText: Function;
    public onCellClick: Function;
    public groupIndex: number;
    public cellTemplate:Function;
    public width:number


    constructor(caption: string, dataField: string, dataSource?: Array<T>, displayExpr?: string, valueExpr?: string) {
        this.caption = caption;
        this.dataField = dataField;
        if (dataSource != undefined) {
            this.lookup = getLookupColumn(dataSource, displayExpr, valueExpr);
        }
    }

    addDataSource(ds: Array<T>) {
        this.lookup = new lookup();
        this.lookup.dataSource = ds;
    };
}

export class lookup<T>{
    public dataSource: Array<T>;
    public valueExpr: string;
    public displayExpr: string;
}