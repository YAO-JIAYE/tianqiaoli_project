import {
  BarController,
  BubbleController,
  Chart,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController
} from "./chunk-OQC4OYUT.js";
import {
  defineComponent,
  h,
  isProxy,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  shallowRef,
  toRaw,
  version,
  watch
} from "./chunk-DDXJJ377.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vue-chartjs/dist/index.js
var CommonProps = {
  data: {
    type: Object,
    required: true
  },
  options: {
    type: Object,
    default: () => ({})
  },
  plugins: {
    type: Array,
    default: () => []
  },
  datasetIdKey: {
    type: String,
    default: "label"
  },
  updateMode: {
    type: String,
    default: void 0
  }
};
var A11yProps = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
};
var Props = {
  type: {
    type: String,
    required: true
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...CommonProps,
  ...A11yProps
};
var compatProps = version[0] === "2" ? (internals, props) => Object.assign(internals, {
  attrs: props
}) : (internals, props) => Object.assign(internals, props);
function toRawIfProxy(obj) {
  return isProxy(obj) ? toRaw(obj) : obj;
}
function cloneProxy(obj) {
  let src = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : obj;
  return isProxy(src) ? new Proxy(obj, {}) : obj;
}
function setOptions(chart, nextOptions) {
  const options = chart.options;
  if (options && nextOptions) {
    Object.assign(options, nextOptions);
  }
}
function setLabels(currentData, nextLabels) {
  currentData.labels = nextLabels;
}
function setDatasets(currentData, nextDatasets, datasetIdKey) {
  const addedDatasets = [];
  currentData.datasets = nextDatasets.map((nextDataset) => {
    const currentDataset = currentData.datasets.find((dataset) => dataset[datasetIdKey] === nextDataset[datasetIdKey]);
    if (!currentDataset || !nextDataset.data || addedDatasets.includes(currentDataset)) {
      return {
        ...nextDataset
      };
    }
    addedDatasets.push(currentDataset);
    Object.assign(currentDataset, nextDataset);
    return currentDataset;
  });
}
function cloneData(data, datasetIdKey) {
  const nextData = {
    labels: [],
    datasets: []
  };
  setLabels(nextData, data.labels);
  setDatasets(nextData, data.datasets, datasetIdKey);
  return nextData;
}
function getDatasetAtEvent(chart, event) {
  return chart.getElementsAtEventForMode(event, "dataset", {
    intersect: true
  }, false);
}
function getElementAtEvent(chart, event) {
  return chart.getElementsAtEventForMode(event, "nearest", {
    intersect: true
  }, false);
}
function getElementsAtEvent(chart, event) {
  return chart.getElementsAtEventForMode(event, "index", {
    intersect: true
  }, false);
}
var Chart2 = defineComponent({
  props: Props,
  setup(props, param) {
    let { expose, slots } = param;
    const canvasRef = ref(null);
    const chartRef = shallowRef(null);
    expose({
      chart: chartRef
    });
    const renderChart = () => {
      if (!canvasRef.value) return;
      const { type, data, options, plugins, datasetIdKey } = props;
      const clonedData = cloneData(data, datasetIdKey);
      const proxiedData = cloneProxy(clonedData, data);
      chartRef.value = new Chart(canvasRef.value, {
        type,
        data: proxiedData,
        options: {
          ...options
        },
        plugins
      });
    };
    const destroyChart = () => {
      const chart = toRaw(chartRef.value);
      if (chart) {
        if (props.destroyDelay > 0) {
          setTimeout(() => {
            chart.destroy();
            chartRef.value = null;
          }, props.destroyDelay);
        } else {
          chart.destroy();
          chartRef.value = null;
        }
      }
    };
    const update = (chart) => {
      chart.update(props.updateMode);
    };
    onMounted(renderChart);
    onUnmounted(destroyChart);
    watch([
      () => props.options,
      () => props.data
    ], (param2, param1) => {
      let [nextOptionsProxy, nextDataProxy] = param2, [prevOptionsProxy, prevDataProxy] = param1;
      const chart = toRaw(chartRef.value);
      if (!chart) {
        return;
      }
      let shouldUpdate = false;
      if (nextOptionsProxy) {
        const nextOptions = toRawIfProxy(nextOptionsProxy);
        const prevOptions = toRawIfProxy(prevOptionsProxy);
        if (nextOptions && nextOptions !== prevOptions) {
          setOptions(chart, nextOptions);
          shouldUpdate = true;
        }
      }
      if (nextDataProxy) {
        const nextLabels = toRawIfProxy(nextDataProxy.labels);
        const prevLabels = toRawIfProxy(prevDataProxy.labels);
        const nextDatasets = toRawIfProxy(nextDataProxy.datasets);
        const prevDatasets = toRawIfProxy(prevDataProxy.datasets);
        if (nextLabels !== prevLabels) {
          setLabels(chart.config.data, nextLabels);
          shouldUpdate = true;
        }
        if (nextDatasets && nextDatasets !== prevDatasets) {
          setDatasets(chart.config.data, nextDatasets, props.datasetIdKey);
          shouldUpdate = true;
        }
      }
      if (shouldUpdate) {
        nextTick(() => {
          update(chart);
        });
      }
    }, {
      deep: true
    });
    return () => {
      return h("canvas", {
        role: "img",
        ariaLabel: props.ariaLabel,
        ariaDescribedby: props.ariaDescribedby,
        ref: canvasRef
      }, [
        h("p", {}, [
          slots.default ? slots.default() : ""
        ])
      ]);
    };
  }
});
function createTypedChart(type, registerables) {
  Chart.register(registerables);
  return defineComponent({
    props: CommonProps,
    setup(props, param) {
      let { expose } = param;
      const ref2 = shallowRef(null);
      const reforwardRef = (chartRef) => {
        ref2.value = chartRef == null ? void 0 : chartRef.chart;
      };
      expose({
        chart: ref2
      });
      return () => {
        return h(Chart2, compatProps({
          ref: reforwardRef
        }, {
          type,
          ...props
        }));
      };
    }
  });
}
var Bar = createTypedChart("bar", BarController);
var Doughnut = createTypedChart("doughnut", DoughnutController);
var Line = createTypedChart("line", LineController);
var Pie = createTypedChart("pie", PieController);
var PolarArea = createTypedChart("polarArea", PolarAreaController);
var Radar = createTypedChart("radar", RadarController);
var Bubble = createTypedChart("bubble", BubbleController);
var Scatter = createTypedChart("scatter", ScatterController);
export {
  Bar,
  Bubble,
  Chart2 as Chart,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Scatter,
  createTypedChart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent
};
//# sourceMappingURL=vue-chartjs.js.map
