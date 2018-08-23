# vue-checkin

> A Vue.js project for checkin

> 基于vue2.x的日历签到插件

> 日历的代码基于[Arguiwu的日历](https://github.com/Arguiwu/calendar)修改

## 安装

``` bash
npm install vue-checkin --save

```
## 使用
```javascript

// main.js

import Vuecheckin from 'vue-checkin'

Vue.use(Vuecheckin)

```

```vue
<!-- ***.vue -->
<vue-checkin :checkin="checkInData" @checkIn="checkIn" @setMonth="getCheckInData"></vue-checkin>
```

#### Attributes

需要传入已经签到的数据，数据如（数组）:

```javascript
checkInData:[
    {
        "time": "2018-01-12 08:52",  //日期可以直接用2018/01/12 08:52这种正规格式，避免ios解析【-】分割的出问题
        "amount": 3 //所得金币
    },
    {
        "time": "2018-01-07 08:52",
        "amount": 10 
    },
    {
        "time": "2018-01-06 08:46", 
        "amount": 6
    },
    {
        "time": "2018-01-05 09:51",
        "amount": 3
    },
]
```

#### Event

getCheckInData(date,time)  //返回当前日历年月（date,字符串,例如:2018/01）和日历上现实的开始时间和结束时间(time,数组,['2017/12/31', '2018/02/02'])

checkIn   //你的点击签到方法回调

