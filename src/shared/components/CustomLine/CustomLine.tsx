import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

import styles from './CustomLine.module.scss';

import useOptionsCustomLine from './hooks/useOptionsCustomLine';

Chart.register(...registerables);

export interface iLineProps {
  dataLine: number[];
  labelLine: string;
}

export interface ICustomLineProps {
  lineOne: iLineProps;
  lineTwo?: iLineProps;
  xLabels: Array<number | string>;
  ySuggestedMax?: number;
  yStepSize?: number;
}

const CustomLine = (props: ICustomLineProps) => {
  const { xLabels, lineOne, lineTwo, ySuggestedMax, yStepSize } = props;

  const { getLineData, getLineOptions } = useOptionsCustomLine();

  return (
    <div className={styles.custom_line}>
      <Line
        data={getLineData({
          xLabels,
          lineOne,
          lineTwo,
        })}
        options={getLineOptions({
          ySuggestedMax,
          yStepSize,
        })}
      />
    </div>
  );
};

export default CustomLine;
