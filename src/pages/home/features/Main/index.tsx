/* eslint-disable react-hooks/exhaustive-deps */
import { ModelReport } from "models/Report";
import { useStore } from "pages/home/context/store";
import { EffectCallback, useEffect } from "react";
import { TableLayout } from "components/Table/loadabled";
import { Filter } from "components/Filter/loadabled";
import { COLUMNS, OPTIONS_SORT } from "pages/home/context/store/constants";

function Main() {
  const { dispatch, actions, state } = useStore();
  const { params, loading, results, sortType } = state;
  const { getList } = ModelReport();

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
      if (data.Message === "") {
        dispatch(actions.getReportDataCompleted(data));
      } else {
        dispatch(actions.getReportDataSuccess(data));
        intervalFetch();
      }
    }
  };

  const handleOnChangePagination = (pagination: any) => {
    dispatch(actions.setQuery({ ...pagination }));
  };

  const handleChangeSort = (value: string) => {
    dispatch(actions.setSort(value));
  };

  return (
    <div>
      <h3 className="text-center my-[20px] text-[20px] font-[600]">
        List of countries which are most affected by Covid-19
      </h3>
      <Filter
        options={OPTIONS_SORT}
        value={sortType}
        onChange={handleChangeSort}
      />
      <TableLayout
        columns={COLUMNS}
        params={params}
        data={results?.Countries || []}
        loading={loading}
        onChange={handleOnChangePagination}
      />
    </div>
  );
}

export default Main;
