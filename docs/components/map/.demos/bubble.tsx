import React from 'react';
import { DefaultOption } from './data/bubble';
import * as echarts from 'echarts';
import defaultTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-default.js';
import ReactECharts from 'echarts-for-react';
import chinaJson from '../../../../src/theme/src/common/map/json/china.json';
function index() {
  echarts.registerTheme('defaultTheme', defaultTheme);
  echarts.registerMap('china', chinaJson); //将地图数据注册到echart对象上
  return (
    <div>
      <ReactECharts
        option={DefaultOption}
        theme={'defaultTheme'}
        style={{ height: 320 * 2 + 'px' }}
      />
    </div>
  );
}

export default index;
