/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Skeleton } from "antd";
import { ModalLayout } from "components/Modal/loadabled";
import { TableLayout } from "components/Table/loadabled";
import { ToastMessage } from "components/ToastMessage/loadabled";
import { ModelCountry } from "models/Country";
import { ModelReport } from "models/Report";
import { useStore } from "pages/home/context/store";
import { CHART_VIEW } from "pages/home/context/store/constants";
import { EffectCallback, useEffect, useState } from "react";
import { formatNumber } from "utils/helper";
import { Chart } from "../Chart/loadabled";
const { Meta } = Card;

function Main() {
  const { dispatch, actions, state } = useStore();
  const { params, loading, results, loadingDetail, detail, error } = state;
  const { getList } = ModelReport();
  const { getDetail } = ModelCountry();
  const [countryView, setCountryView] = useState("");
  const [chartView, setChartView] = useState("");

  const COLUMNS = [
    {
      title: "Country",
      dataIndex: "Country",
      render: (text: string, value: any) => (
        <span
          className="text-[#1677ff] cursor-pointer"
          onClick={() => setCountryView(value.Country)}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Total Confirmed",
      dataIndex: "TotalConfirmed",
      sorter: (a: any, b: any) => a.TotalConfirmed - b.TotalConfirmed,
      width: "20%",
    },
    {
      title: "Total Deaths",
      dataIndex: "TotalDeaths",
      sorter: (a: any, b: any) => a.TotalDeaths - b.TotalDeaths,
      width: "20%",
    },
    {
      title: "Total Recovered",
      dataIndex: "TotalRecovered",
      sorter: (a: any, b: any) => a.TotalRecovered - b.TotalRecovered,
      width: "20%",
    },
  ];

  const useEffectDidMount = (effect: EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectDidMount(() => {
    apiFetchReport();
  });

  const intervalFetch = () => {
    setTimeout(() => {
      apiFetchReport();
    }, 10000);
  };

  const apiFetchReport = async () => {
    dispatch(actions.getReportData());

    const { data, isError } = await getList();
    if (isError) {
      dispatch(actions.getReportDataError(data.message || "Fetch error!"));
    } else {
      dispatch(actions.getReportDataSuccess(data));
      if (data.Message !== "") {
        intervalFetch();
      } else {
        dispatch(actions.getReportDataCompleted(data.Countries?.length || 0));
      }
    }
  };

  const useEffectDidViewDetail = (effect: EffectCallback) => {
    useEffect(effect, [countryView]);
  };

  useEffectDidViewDetail(() => {
    if (countryView) {
      apiFetchDetail();
    }
  });

  const apiFetchDetail = async () => {
    dispatch(actions.getCountryDetail());

    const { data, isError } = await getDetail(countryView);
    if (isError) {
      dispatch(actions.getCountryDetailError(data.message || "Fetch error!"));
    } else {
      dispatch(actions.getCountryDetailSuccess(data[0]));
    }
  };

  const handleOnChangePagination = (pagination: any) => {
    dispatch(actions.setQuery({ ...pagination }));
  };

  const renderContent = () => {
    return (
      <Card style={{ width: "100%", border: "none" }}>
        <Skeleton loading={loadingDetail} avatar active>
          <Meta
            avatar={
              <img
                className="shadow-xl"
                width="80"
                src={detail?.flags?.png}
                alt=""
              />
            }
            title={`Official Name: ${detail?.name?.official || "--"}`}
            description={
              <div>
                <p>{`Population: ${
                  detail?.population ? formatNumber(detail?.population) : "--"
                } people`}</p>
                <p>{`Capital: ${
                  detail?.capital
                    ? detail?.capital?.map(
                        (item: string, index: number) =>
                          `${item}${
                            index === detail?.capital?.length - 1 ? "." : ","
                          }`
                      )
                    : "--"
                }`}</p>
                <p>{`Region: ${detail?.region || "--"}`}</p>
                <p>{`Subregion: ${detail?.subregion || "--"}`}</p>
              </div>
            }
          />
        </Skeleton>
      </Card>
    );
  };

  return (
    <>
      <div>
        <h3 className="text-center my-[20px] text-[20px] font-[600]">
          List of countries which are most affected by Covid-19
        </h3>
        <div className="sm:flex items-center mb-[20px]">
          <span className="font-[600]">View chart:</span>
          <ul className="sm:flex items-center">
            {CHART_VIEW.map((item) => (
              <li
                className={`p-[12px] hover:text-[#1677ff] ${
                  loading ? "cursor-wait" : "cursor-pointer"
                }`}
                key={item.id}
                onClick={() => !loading && setChartView(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <TableLayout
          columns={COLUMNS}
          params={params}
          data={results?.Countries || []}
          loading={loading}
          onChange={handleOnChangePagination}
        />
        <ModalLayout
          title={countryView}
          content={renderContent()}
          isModalOpen={countryView !== ""}
          onCancel={() => setCountryView("")}
        />
        {chartView && (
          <Chart
            item={CHART_VIEW.filter((item) => item.id === chartView)[0]}
            global={{ ...results?.Global, Country: "Global" }}
            data={results?.Countries || []}
            chartView={chartView}
            onCancel={() => setChartView("")}
          />
        )}
      </div>
      {error && <ToastMessage message={error} />}
    </>
  );
}

export default Main;
