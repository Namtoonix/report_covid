/* eslint-disable react-hooks/exhaustive-deps */
import Chart from "chart.js/auto";
import { EffectCallback, memo, useEffect, useRef } from "react";

interface IProps {
  chartData?: any;
  backgrounds?: any;
  label: string;
}

const ChartComponent = (props: IProps) => {
  const { chartData, backgrounds, label } = props;
  const canvasRef: any = useRef<HTMLCanvasElement>(null);

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  const useEffectDidUpdateCanvas = (effect: EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectDidUpdateCanvas(() => {
    if (canvasRef && canvasRef?.current) {
      renderChartCanvas();
    }
  });

  const renderChartCanvas = () => {
    new Chart(canvasRef.current, {
      type: "pie",
      data: {
        datasets: [
          {
            data: [...chartData.map((item: any) => Number(item[`${label}`]))],
            backgroundColor: backgrounds,
          },
        ],
        labels: [...chartData.map((item: any) => item.Country)],
      },
      options,
    });
  };

  return <canvas id="myChart" ref={canvasRef} />;
};

ChartComponent.defaultProps = {
  chartData: [],
  labels: [],
};

export default memo(ChartComponent);
