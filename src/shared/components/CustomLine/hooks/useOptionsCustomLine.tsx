import { ChartData, ChartOptions } from 'chart.js';
import { iLineProps } from '../CustomLine';

type LineData = ChartData<'line'>;
type LineOptions = ChartOptions<'line'>;

const useOptionsCustomLine = () => {
  const getLineData = (props: {
    lineOne: iLineProps;
    lineTwo?: iLineProps | undefined;
    xLabels: Array<number | string>;
  }): LineData => {
    const { xLabels, lineOne, lineTwo = null } = props;

    const datasets = [
      {
        label: lineOne.labelLine,
        data: lineOne.dataLine,
        borderColor: 'rgb(10, 141, 202)',
        backgroundColor: 'rgb(10, 141, 202)',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderColor: 'rgb(10, 141, 202)',
        pointBorderWidth: 2,
      },
    ];

    if (lineTwo) {
      datasets.push({
        label: lineTwo.labelLine,
        data: lineTwo.dataLine,
        borderColor: 'rgb(39, 171, 131)',
        backgroundColor: 'rgb(39, 171, 131)',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderColor: 'rgb(39, 171, 131)',
        pointBorderWidth: 2,
      });
    }
    return {
      labels: xLabels,
      datasets: datasets,
    };
  };

  const getLineOptions = (props: {
    ySuggestedMax?: number;
    yStepSize?: number;
  }): LineOptions => {
    const { ySuggestedMax, yStepSize } = props;
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: {
          title: { display: false },
          grid: {
            display: false,
          },
        },
        y: {
          title: { display: false },
          beginAtZero: true,
          suggestedMax: ySuggestedMax ? ySuggestedMax : 50,
          ticks: {
            stepSize: yStepSize ? yStepSize : 5,
          },
          grid: {
            color: 'rgba(240, 244, 248, 1)',
          },
        },
      },
    };
  };

  return { getLineData, getLineOptions };
};

export default useOptionsCustomLine;
