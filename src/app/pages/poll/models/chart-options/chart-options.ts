import { IChartOptions } from './chart-options.interface';

export class ChartOptions implements IChartOptions {
    public view: Array<number>;
    public results: Array<object>;
    public scheme: object;
    public schemeType: string;
    public customColors: object;
    public animations: boolean;
    public legend: boolean;
    public legendTitle: string;
    public xAxis: boolean;
    public yAxis: boolean;
    public showGridLines: boolean;
    public roundDomains: boolean;
    public showXAxisLabel: boolean;
    public showYAxisLabel: boolean;
    public xAxisLabel: string;
    public yAxisLabel: string;
    public xAxisTickFormatting: any;
    public yAxisTickFormatting: any;
    public gradient: boolean;
    public activeEntries: Array<object>;
    public barPadding: number;
    public tooltipDisabled: boolean;
    public tooltipTemplate: string;
    public xScaleMax: number;
    public showLabels: boolean;

    constructor(options: any = {}) {
        this.view = options.view || null;
        this.results = options.results || null;
        this.scheme = options.scheme || null;
        this.schemeType = options.schemeType || 'ordinal';
        this.customColors = options.customColors || null;
        this.animations = options.animations || true;
        this.legend = options.legend || false;
        this.legendTitle = options.legendTitle || 'Legend';
        this.xAxis = options.xAxis || false;
        this.yAxis = options.yAxis || false;
        this.showGridLines = options.showGridLines || true;
        this.roundDomains = options.roundDomains || false;
        this.showXAxisLabel = options.showXAxisLabel || false;
        this.showYAxisLabel = options.showYAxisLabel || false;
        this.xAxisLabel = options.xAxisLabel || null;
        this.yAxisLabel = options.yAxisLabel || null;
        this.xAxisTickFormatting = options.xAxisTickFormatting || null;
        this.yAxisTickFormatting = options.yAxisTickFormatting || null;
        this.gradient = options.gradient || false;
        this.activeEntries = options.activeEntries || [];
        this.barPadding = options.barPadding || 8;
        this.tooltipDisabled = options.tooltipDisabled || false;
        this.tooltipTemplate = options.tooltipTemplate || null;
        this.xScaleMax = options.xScaleMax || null;
        this.showLabels = options.showLabels || null;
    }
}