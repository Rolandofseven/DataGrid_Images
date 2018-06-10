import {DxColumn} from  '../Models/DxColumn';

export class DataGridOptions <T> {
    public dataSource: KnockoutObservableArray<KnockoutObservableType<T>>;
    public columns: Array<DxColumn<T>>;
    public showColumnHeaders: boolean;
    public showBorders: boolean;
    public rowAlternationEnabled: boolean;
    public sorting: sorting;
    public selection: selection;
    public showRowLines: boolean;
    public onRowClick: Function;
    public width: string;
    public columnAutoWidth: boolean;
    public filterRow: FilterRow;
    public allowColumnReordering: boolean;
    public allowColumnResizing: boolean;
    public paging: paging;
    public editing: editing;
    public onEditorPreparing: Function;
    public onEditorPrepared: Function;
    public onRowUpdated: Function;
    public summary: summary;
    public onInitialized: Function;
    public onRowValidating:Function;
    public onInitNewRow : Function;
    public grouping:grouping;
    public groupPanel:groupPanel;
    public scrolling: scrolling;

    private _sortingMode: SortingMode;
    private _filterRow:  FilterRow
    private _selectionMode: SelectionMode;
    private _scrollingMode: ScrollingMode;

    constructor(data: KnockoutObservableArray<KnockoutObservableType<T>>, columns: Array<DxColumn<T>>, onRowClick: Function) {
        this.dataSource = data;
        this.columns = columns;
        this.onRowClick = onRowClick;
    }

    //Getter and setters
    get sortingMode(): SortingMode {
        return this._sortingMode;
    }
    
    set sortingMode(sortMode: SortingMode) {
        this._sortingMode = sortMode;
        let sort = (new sorting());
        sort.mode = this._sortingMode.toString();
        this.sorting = sort;
    }

    set scrollingMode(scrollMode: ScrollingMode) {
        this._scrollingMode = scrollMode;
        let scroll = (new scrolling());
        scroll.mode = this._scrollingMode.toString();
        this.scrolling = scroll;
    }

    get selectionMode(): SelectionMode {
        return this._selectionMode;
    }

    set selectionMode(selectionMode: SelectionMode) {
        this._selectionMode = selectionMode;
        let select = (new selection());
        select.mode = this._selectionMode.toString();
        this.selection = select;
    }

    groupingVisible(visable: boolean) {
        this.groupPanel = new groupPanel();
        this.groupPanel.visible = visable;
    }

    groupingAutoExpandAll(autoExpand:boolean)
    {
        this.grouping = new grouping();
        this.grouping.autoExpandAll = autoExpand;
    }
   

    //Methods
    addSummaryField(columnName:string, aggregateFunction:string, format?:string){
        if(this.summary == null){
            this.summary = new summary();
        }
        let sumItem = new summaryItem();
        sumItem.column = columnName;
        sumItem.summaryType = aggregateFunction;
        if(format != null)
        {
            sumItem.valueFormat = format;
        }
        this.summary.totalItems.push(sumItem);
    }
}

export class scrolling{
    public mode:string;
}

export class grouping {
    public autoExpandAll:boolean;
}

export class groupPanel {
    public visible: boolean;
}

export enum EditMode {
    row = "row",
    batch = "batch",
}

export enum AggregateType{
    sum = "sum",
    count = "count"
}

export enum SortingMode {
    none = "none",
    single = "single",
}

export enum SelectionMode {
    none = "none",
    single = "single",
    multiple = "multiple"
}

export enum ScrollingMode {
    virtual = "virtual"
}

export class sorting {
    public mode: string;
}

export class selection {
    public mode: string;
}

export class FilterRow {
    public applyFilter: string;
    public applyFilterText: string;
    public betweenEndText: string;
    public betweenStartText: string;
    public resetOperationText: string;
    public showAllText: string;
    public showOperationChooser: boolean;
    public visible: boolean;
}

export class paging {
    public pageSize: number
}

export class editing {
    public allowUpdating: boolean;
    public allowAdding: boolean; 
    public allowDeleting: boolean;
    public mode: string;
    public texts: texts;
    public useIcons: boolean;
    constructor(){
        this.texts = new texts();
    }

    
} 

export class texts {
    public deleteRow: string;
    public saveRowChanges: string;
    public editRow: string;

}

export class summary {
    public totalItems: Array<summaryItem>;
    constructor(){
        this.totalItems = new Array<summaryItem>();
    }

}

export class summaryItem{
    public column: string;
    public summaryType: string;
    public valueFormat:string;
}