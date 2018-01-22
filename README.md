# vue-checkin

> A Vue.js project for checkin

> 基于vue2.x的日历签到插件

> 日历的代码基于[Arguiwu的日历](https://github.com/Arguiwu/calendar)修改

## Build Setup

``` bash
npm install vue-checkin --save-dev

```

```javascript

// main.js

import Vuecheckin from 'vue-checkin'

Vue.use(Vuecheckin)

```

```vue
//***.vue
<vue-checkin :checkin="checkInData" @checkIn="checkIn" @setMonth="getCheckInData"></vue-checkin>
```

#### props

需要传入已经签到的数据，数据大概如:

```javascript
checkInData:[
    {
        "time": "2017-09-05 08:46",  //日期
        "amount": 4 //所得金币
    },
    {
        "time": "2017-09-04 09:51",
        "amount": 3
    },
]
```
