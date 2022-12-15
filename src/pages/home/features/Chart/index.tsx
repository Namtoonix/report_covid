/* eslint-disable react-hooks/exhaustive-deps */
import { ChartComponent } from "components/ChartJS/loadabled";
import { ModalLayout } from "components/Modal/loadabled";

interface IProps {
  data: any;
  item: any;
  chartView: string;
  onCancel: Function;
  global: any;
}

function Chart(props: IProps) {
  const { data, chartView, onCancel, item, global } = props;
  const dataChart = [
    ...data.sort((a: any, b: any) => {
      return b[`${item.key}`] - a[`${item.key}`];
    }),
  ];

  const top5 = [
    dataChart[0],
    dataChart[1],
    dataChart[2],
    dataChart[3],
    dataChart[4],
  ];

  const others = {
    Country: "Others",
    TotalConfirmed:
      global.TotalConfirmed -
      top5.reduce((total: number, item: any) => total + item.TotalConfirmed, 0),
    TotalDeaths:
      global.TotalDeaths -
      top5.reduce((total: number, item: any) => total + item.TotalDeaths, 0),
    TotalRecovered:
      global -
      top5.reduce((total: number, item: any) => total + item.TotalRecovered, 0),
  };

  const backgrounds: any = [
    "#df0808",
    "#f2a354",
    "#f7cf6a",
    "#6dbebf",
    "#57a0e5",
    "#ed6d85",
  ];

  const renderContent = (item: any) => {
    return (
      <ChartComponent
        chartData={[others, ...top5]}
        backgrounds={backgrounds}
        label={item.key}
      />
    );
  };

  return (
    item.id && (
      <ModalLayout
        title={item?.label || ""}
        content={renderContent(item)}
        isModalOpen={chartView !== ""}
        onCancel={onCancel}
      />
    )
  );
}

export default Chart;
