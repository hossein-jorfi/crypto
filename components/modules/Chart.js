// import { createChart } from 'lightweight-charts';
// import { useEffect, useRef } from 'react';
// import { CrosshairMode } from 'lightweight-charts';

// const Chart = ({ OHLC_Data }) => {
//      const chartContainerRef = useRef(null);
//      const chartInstanceRef = useRef(null);

//      useEffect(() => {
//           const chart = createChart(chartContainerRef.current, {
//                height: 300,
//                timeScale: {
//                     timeVisible: true,
//                     secondsVisible: false,
//                     fixLeftEdge: true,
//                     fixRightEdge: true,
//                },
//                crosshair: {
//                     mode: CrosshairMode.Normal,
//                },
//                layout: {
//                     textColor: 'rgba(0, 0, 0, 0.5)'
//                },
//                priceScale: {
//                     borderColor: 'rgba(0, 0, 0, 0.1)', // Set the border color with opacity
//                     textColor: 'rgba(0, 0, 0, 0.5)', // Set the text color with opacity
//                },
//           });

//           const areaSeries = chart.addAreaSeries({
//                lineWidth: 2,
//                lineColor: '#01bc8d',
//                topColor: 'rgba(41, 98, 255, 0)',
//                bottomColor: 'rgba(41, 98, 255, 0)',
//           });

//           areaSeries.setData(OHLC_Data);

//           chart.timeScale().fitContent();

//           chartInstanceRef.current = chart;

//           const resizeObserver = new ResizeObserver(() => {
//                chartInstanceRef.current.applyOptions({
//                     width: chartContainerRef.current.clientWidth,
//                });
//           });

//           resizeObserver.observe(chartContainerRef.current);

//           return () => {
//                if (chartInstanceRef.current) {
//                     resizeObserver.unobserve(chartContainerRef.current);
//                     chartInstanceRef.current.remove();
//                }
//           };
//      }, [OHLC_Data]);

//      return <div ref={chartContainerRef} className='chart' />;
// };

// export default Chart;
// ------------------------------


// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function Chart({ coinName }) {
     const container = useRef();

     useEffect(() => {
          const script = document.createElement("script");
          script.src ="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
          script.type = "text/javascript";
          script.async = true;
          script.innerHTML = `
      {
        "symbols": [
          [
            "${coinName}USD|1M"
          ]
        ],
        "chartOnly": true,
        "width": "100%",
        "height": 300,
        "locale": "en",
        "colorTheme": "light",
        "autosize": false,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }`;

          container.current.appendChild(script);

          return () => {
               // Clean up the script when the component unmounts
               container.current.innerHTML = '';
          };
     }, []);

     return (
          <div className="tradingview-widget-container">
               <div className="tradingview-widget-container__widget" ref={container}></div>
          </div>
     );
}

export default memo(Chart);
