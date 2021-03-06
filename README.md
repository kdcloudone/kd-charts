---
order: 0
title: 介绍
---

# KDesign Charts

KDesign Charts 是基于金蝶的企业级设计系统 KDesign 实现的 echarts 皮肤，简单易用。

## 特性

- 提供开箱即用的 丰富的图表类型。
- 基于 ECharts 开发，强劲的渲染引擎。
- 优雅专业的可视化设计。
- 全面的主题化定制。

## 兼容环境

- 现代浏览器和 IE11,移动端

## 安装

### 使用 npm 或 yarn 安装

```bash
$ npm install @kdcloudjs/kd-charts  -S
# 或者
$ yarn add @kdcloudjs/kd-charts -S
```

## 示例

```js
import React from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import defaultTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-default.js';
const DefaultOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
    name: '单据消息订阅',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      name: '生活费',
    },
  ],
};

function kcharts() {
  echarts.registerTheme('defaultTheme', defaultTheme);
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

export default kcharts;
```

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件。

使用：

```html
<script src="echarts.js"></script>
<!-- 引入 vintage 主题 -->
<script src="https://unpkg.com/@kdcloudjs/kd-charts@1.1.0/dist/echarts-theme-default.js"></script>
<script>
  // 第二个参数可以指定前面引入的主题
  var chart = echarts.init(document.getElementById('main'), 'vintage');
  chart.setOption({
      ...
  });
</script>
```

## License

KDesign Charts 使用了 Apache License, Version 2.0. 详细 license 请查看 [LICENSE](https://github.com/kdcloudone/kd-charts/blob/master/LICENSE)
