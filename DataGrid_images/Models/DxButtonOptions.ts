export class DxButtonOptions {
    public text: string;
    public type: string;
    public onClick: Function;

    constructor(text: string, type: string, onClick: Function) {
        this.text = text;
        this.type = type;
        this.onClick = onClick;
    }
}