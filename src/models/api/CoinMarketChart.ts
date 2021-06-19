import { GenericState } from ".."

export type AvailableDayRanges = 1 | 7 | 30 | 90 | 365 | 730

export interface CoinMarketChart {
  marketCaps: [number, number][];
  prices: [number, number][];
  totalVolumes: [number, number][];
}

export type CoinMarketChartList = {
  [key in AvailableDayRanges]: {
    [key: string]: CoinMarketChart;
  };
}

export interface DominanceChartList {
  [key: string]: CoinMarketChart;
}

export interface CoinMarketChartListState extends GenericState<CoinMarketChartList> {
  selectedDayRange: AvailableDayRanges;
  selectedDataType: keyof CoinMarketChart;
}