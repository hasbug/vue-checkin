<template>
    <div class="content-page uk-body">
        <div class="calendar">
            <button class="month-less" @click="prevMonth"> < </button>
            <h4>{{year}}年{{month}}月</h4>
            <button class="month-add" @click="nextMonth"> > </button>
            <table class="sign_tab" border="0px" cellpadding="0px" cellspacing="0px">
                <thead>
                <tr>
                    <th>日</th>
                    <th>一</th>
                    <th>二</th>
                    <th>三</th>
                    <th>四</th>
                    <th>五</th>
                    <th>六</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in dateArr" v-if="contains(item)">
                    <template  v-for="data in item">
                        <td :class="{'disa':monthClass(data.month), 'cur_day': doCheck(data.date),'check_day': isCheck(data.date) }" v-if="isCheck(data.date)">
                            <!--<span :class="{'ui-state-up': true }">已签到</span>-->
                            <template v-if="doCheck(data.date)">
                                今天
                            </template>
                            <template v-else>
                            {{data.date | getCD}}
                            </template>
                            <span :class="{'ui-state-down': true }">金币+{{getGold(data.date)}}</span>
                        </td>

                        <template v-if="(!isCheck(data.date) && (doCheck(data.date) && !hasCheckin))">
                            <td v-if="!monthClass(data.month)"  @click="checkNow" :class="{'disa':monthClass(data.month), 'over':data.date == '', 'cur_day': doCheck(data.date) }">
                                今天
                                <span :class="{'ui-state-default': true }">点击签到</span>
                            </td>

                            <td v-else :class="{'disa':monthClass(data.month), 'over':data.date == '', 'cur_day': doCheck(data.date) }">
                                {{data.date | getCD}}
                            </td>
                        </template>
                        <td v-if="!isCheck(data.date) && (!doCheck(data.date)) "  :class="{'disa':monthClass(data.month), 'over':data.date == '', 'cur_day': doCheck(data.date) }">
                            {{data.date | getCD}}
                        </td>
                    </template>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        name:'vueCheckin',
        data() {
            return {
                today : new Date(),
                year : '',
                month : '',
                day : '',
                date : '',
                startTime:'',
                endTime:'',
                dateArr: [],
                hasCheckin:false,
            };
        },
        props:['checkin'],
        created() {
            this.year = this.today.getFullYear();
            this.month = this.today.getMonth() + 1;
            this.day = this.today.getDay();
            this.date = this.today.getDate();

            this.getCalendar();

            console.log(this.checkin)
        },
        filters: {
            getCD (val){
                return val.split('/')[2]
            }
        },


        watch: {
            dateArr: {
                deep: true,
                handler: function (val, oldVal) {

                    console.log(val)

                    this.startTime = val[0][0].date;
                    this.endTime = val[5][6].date;
                    this.setMonth(this.year+'/'+this.month,[this.startTime, this.endTime]);
                }
            }
        },
        methods: {
            //签到
            checkNow() {
                this.$emit('checkIn')
            },

            setMonth (date,){
                this.$emit('setMonth',date,[this.startTime, this.endTime])
            },

            monthClass(type) {
                if(type!='cur'){
                    return true
                }else{
                    return false

                }
            },

            getGold (thisDay) {
                for(let i in this.checkin) {
                    var d=new Date(this.checkin[i].time);
                    var _ymd = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();

                    if(new Date(thisDay).getTime() == new Date(_ymd).getTime()) {
                        return this.checkin[i].amount;
                    }
                }
            },

            isLeap() {
                const year = this.year;
                if(year % 4 == 0 && year % 100 > 0) {
                    return true;
                }else if(year % 400 == 0 && year % 3200 > 0) {
                    return true;
                }else {
                    return false;
                }
            },
            getLen(m) {
                const month = m || this.month;
                if(month == 2) {
                    if(this.isLeap) {
                        return 29;
                    }else {
                        return 28;
                    }
                }else {
                    if(month < 8) {
                        if(month % 2 > 0) {
                            return 31;
                        }else {
                            return 30;
                        }
                    }else {
                        if(month % 2 > 0) {
                            return 30;
                        }else {
                            return 31;
                        }
                    }
                }
            },
            getCalendarTime() {
                return this.year + '-' + this.month + '-' + this.date;
            },
            getCalendar() {
                var len = this.getLen();
                var d = new Date(this.year, this.month - 1, 1);
                var dfw = d.getDay();
                var arr = new Array();
                var tem = 0;
                var nextTem=1;
                var pre=dfw-1


                var _lastLen=this.getLen(this.month-1)




                for (var i = 0; i < 6; i++) {
                    arr[i] = new Array();
                    for (var j = 0; j < 7; j++) {
                        tem++;
                        if (tem - dfw > 0 && tem - dfw <= len) {
                            arr[i][j] = {date:this.year+'/'+(this.month)+'/'+(tem - dfw),month:'cur'};
                        } else {
                            if(tem <= dfw){
                                arr[i][j] = {date:this.year+'/'+(this.month-1)+'/'+(_lastLen-pre), month:'pre'};
                                pre--;

                            }else{
                                arr[i][j] ={date:  this.year+'/'+(this.month+1)+'/'+(nextTem), month: 'next'};
                                nextTem++

                            }
                        }
                    }
                }
                this.dateArr = arr;
                // console.log(this.dateArr);

            },
            nextMonth() {
                if(this.month == 12) {
                    this.year ++;
                    this.month = 1;
                }else {
                    this.month ++;
                };
                this.getCalendar();
            },
            prevMonth() {
                if(this.month == 1) {
                    this.year --;
                    this.month = 12;
                }else {
                    this.month --;
                }
                this.getCalendar();
            },
            contains(arr) {
                if((arr[0] == '') && (arr[1] == '') && (arr[2] == '') && (arr[3] == '') && (arr[4] == '') && (arr[5] == '') && (arr[6] == '')) {
                    return false;
                }else {
                    return true;
                }
            },
            isCheck(index) {
                for(let i in this.checkin) {
                    var todayDate=new Date();
                    var today = todayDate.getFullYear()+'/'+(todayDate.getMonth()+1)+'/'+todayDate.getDate();
                    var d=new Date(this.checkin[i].time);
                    var _ymd = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
                    if(new Date(today).getTime()==new Date(_ymd).getTime()){
                        //今日已经签到
                        this.hasCheckin = true;
                    }

                    if(new Date(index.replace(/-/g, "/")).getTime() == new Date(_ymd).getTime()) {
                        // console.log('已经签到')
                        return true;
                    }
                }
                return false;
            },

            doCheck (d){
                var dString= new Date().getFullYear()+'/'+(new Date().getMonth()+1)+'/'+new Date().getDate();
                if(new Date(d.replace(/-/g, "/")).getTime() == new Date(dString).getTime()){
                    return true;
                }
                return false;
            }
        }
    };
</script>
<style  rel="stylesheet/scss" lang="scss">
    .calendar{width:100%;margin:0px 0px 20px 0px;color:#555;position: relative;}
    .calendar h4 {
        line-height: 40px;
        background-color: #fff;
        text-align: center;
        color: #333;
        box-shadow: 0 0 4px #bbb;
        -webkit-box-shadow: 0 0 4px #bbb;
    }
    .calendar button {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 5px;
        color:#777;
        background: #f3f3f3;
        border: none;
    }
    .calendar button:focus { border: none;outline: none; }
    .calendar button.month-less {left: 10px;}
    .calendar button.month-add {right: 10px;}
    .calendar .sign_tab{width: 100%;border-collapse: collapse;border: 1px solid #e8e8e8;border-top: 0;table-layout: fixed;}
    .calendar .sign_tab th{text-align: center;height: 14.28571428571429vw;font-weight: 700;}
    .calendar .sign_tab td{position: relative; border: 1px solid #eee;padding: 15px 0;text-align: center;font-size: 14px;font-family: arial;}
    .calendar .sign_tab td.over{background-color: #fff;border-left: 0;border-right: 0;}
    .calendar .sign_tab td.disa{
        color:#ccc !important;
        background: none !important;
        *{
            color:#ccc !important;

        }
    }
    .calendar .sign_tab td.check_day{
        background-color: #f8f8f8;
        color: #58ce7a;
        position: relative;
    }
    .calendar{
        .ui-state-down,
        .ui-state-default{
            font-size:10px;
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 3px;
            left: 0;
        }
        .ui-state-down{
            color: #f60;
        }
    }

    .calendar  .ui-state-up{
        font-size:10px;
        width: 100%;
        text-align: center;
        position: absolute;
        top: 3px;
        left: 0;

    }
    .calendar .sign_tab td.cur_day{background-color: #FFD2D2;color: #FFF;}
    .checkin-btn{
        display: block;
        width:90%;
        margin:0 auto;
        text-align: center;
        font-size: 10px;
    }
</style>
