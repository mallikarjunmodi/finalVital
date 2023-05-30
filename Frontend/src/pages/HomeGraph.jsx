import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const HomeGraph = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handlePrevDate = () => {
    const prevDate = new Date(startDate);
    prevDate.setDate(startDate.getDate() - 5);
    setStartDate(prevDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(startDate);
    nextDate.setDate(startDate.getDate() + 5);
    setStartDate(nextDate);
  };

  const generateData = () => {
    const data = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < 5; i++) {
      const formattedDate = currentDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
      });
    // RANDOM VALUE
      const randomValue = Math.floor(Math.random() * 4);
      const dotColor = getDotColor(randomValue);
      data.push({ date: formattedDate, value:randomValue, dotColor });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
  };

  const getDotColor = (value) => {
    if (value >= 2) {
      return '#008500'; // Green
    } else if (value >= 1) {
      return '#D8AD8A'; // Orange
    } else {
      return '#EB0000'; // Red
    }
  };

  const data = generateData();

  return (
    <div className="containerrr">
      <div className="graph-container">
      <div className="chart-wrapper">
        <ResponsiveContainer width="82%" height={160}>
          <LineChart data={data} padding={10}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis 
              dataKey="date" 
              tick={{ fill: '#666666' }}
              tickSize={0}
              allowDataOverflow={true}
              stroke="#ECECEC"
              dy={20}
            />
            <YAxis
              domain={[0, 3]}
              tick={{ fill: '#666666' }}
              ticks={[0, 1, 2, 3]}
              tickCount={4}
              allowDataOverflow={true}
              axisLine={false}
              tickSize={0}
              dx={-20}
            />
            <Tooltip />
            {/* <Legend /> */}
            {/* <Line
              type="linear"
              dataKey="value"
              stroke="#666666"
              dot={{ fill: '#666666', width: '8px', height: '8px' }}
            /> */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ECECEC"
              dot={(props) => (
                <svg>
                  <circle
                    cx={props.cx}
                    cy={props.cy}
                    r={4}
                    fill={props.payload.dotColor}
                  />
                </svg>
              )}
            />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
      <div className="date-controls">
        <button className="arrow-button" onClick={handlePrevDate}>
          &lt;
        </button>
        {/* <div className="current-date">
          {data[0].date} - {data[data.length - 1].date}
        </div> */}
        <button className="arrow-button" onClick={handleNextDate}>
          &gt;
        </button>
      </div>
      <style jsx>{`
        .containerrr {
          width: 100%;
          max-width: 400px;
          margin-top: 40px;
          margin-left: -18px;
        }

        .graph-container {
          width: 100%;
          font-size: 12px;
          color: #808080;
        }

        .arrow-button {
          background: transparent;
          border: none;
          cursor: pointer;
          margin-right: 12px;
          color: #004575;
          font-weight: bold;
          margin-top: -42px;
          font-size: 20px;
        }

        .date-controls {
          display: flex;
          float: right;
          align-items: center;
          margin-top: 10px;
        }

        .current-date {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default HomeGraph;
