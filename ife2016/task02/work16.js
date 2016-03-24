/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput = document.getElementById("aqi-city-input");
var aqiInput = document.getElementById("aqi-value-input");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
   var city =cityInput.value.trim();
   var aqi =aqiInput.value.trim();

   // 验证城市名称是否合法
    var cityReg = /^[a-zA-z\u0391-\uFFE5]+$/ig;
    if(!cityReg.test(city)) {
        alert("输入的城市名称必须是中英文字符！");
        return false;
    }

    // 验证空气质量指数是否合法
    var valueReg = /^[0-9]+$/g;
    if(!valueReg.test(aqi)) {
        alert("输入的空气质量指数不能必须为大于0的整数！");
        return false;
    }

    aqiData[city] = aqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var str = "<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>";

    for(var city in aqiData) {
        str += "<tr><td>" + city + "</td><td>" + aqiData[city] + "</td><td>" + "<button class='del'>删除</button>" + "</td></tr>";
    }

    table.innerHTML = str;

    // 点击删除按钮的处理逻辑
    var delBtns = document.getElementsByClassName('del');
    var keys = Object.keys(aqiData);

    for(var i=0; i<keys.length; i++) {

        (function(i) {

            delBtns[i].onclick = function() {

                delete aqiData[keys[i]];
                renderAqiList();

            }

        })(i);

    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    addBtn.onclick = addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
