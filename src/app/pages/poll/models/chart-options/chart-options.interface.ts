export interface IChartOptions {
    view: Array<number>;
    results: Array<object>;
    scheme: object;
    schemeType: string;
    customColors: object;
    animations: boolean;
    legend: boolean;
    legendTitle: string;
    xAxis: boolean;
    yAxis: boolean;
    showGridLines: boolean;
    roundDomains: boolean;
    showXAxisLabel: boolean;
    showYAxisLabel: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    xAxisTickFormatting: any;
    yAxisTickFormatting: any;
    gradient: boolean;
    activeEntries: Array<object>;
    barPadding: number;
    tooltipDisabled: boolean;
    tooltipTemplate: string;
    xScaleMax: number;
    showLabels: boolean;
}