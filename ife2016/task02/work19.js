(function() {
    /*
     * getElementById简写
     */

    function $(id, doc) {
        doc = doc || document;
        return (id.charAt(0) === '#' ? doc.getElementById(id.substr(1)) : doc.getElementsByTagName(id));
    };
    documen.getElementById()
    /*
     * 原形扩展的方式去除字符串两头空格及中间空白
     */
    String.prototype.trim = function() {
        return this.replace(/[(^\s+)(\s+$)]/g, "")
    };
    /*
     * 缓存dom
     */
    var dom = {
        input: $('#api-input'), //输入框
        leftin: $('#left-in'), //左侧入
        rightin: $('#right-in'), //右侧入
        leftout: $('#left-out'), //左侧出
        rightout: $('#right-out'), //右侧出
        rows: $('#spanWrap') //显示框
    };
    /*
     * 左侧入
     */
    dom.leftin.addEventListener('click', function() {
        insert('unshift')
    });
    /*
     * 右侧入
     */
    dom.rightin.addEventListener('click', function() {
        insert('push')
    });
    /*
     * 左侧出
     */
    dom.leftout.addEventListener('click', function() {
        sequence.shift()
    });
    /*
     * 右侧出
     */
    dom.rightout.addEventListener('click', function() {
        sequence.pop()
    });
    /*
     * 插入
     */
    function insert(type) {
        var val = dom.input.value.trim();
        if (/^\d+$/.test(val)) {
            dom.input.value = '';
            dom.input.focus();
            switch (type) {
                case 'unshift':
                    sequence.unshift(val);
                    break;
                case 'push':
                    sequence.push(val);
                    break;
                default:
                    alert('未知操作!');
                    break
            }
        } else {
            alert('请输入整数!');
            dom.input.focus()
        }
    };
    //序列
    var sequence = {
        //数据
        data: [],
        //右侧入
        push: function(number) {
            sequence.data.push(number);
            sequence.render();
        },
        //左侧入
        unshift: function(number) {
            sequence.data.unshift(number);
            sequence.render()
        },
        //左侧出
        shift: function() {
            if (sequence.data.length > 0) {
                alert(sequence.data.shift());
                sequence.render()
            }
        },
        //右侧出
        pop: function() {
            if (sequence.data.length > 0) {
                alert(sequence.data.pop());
                sequence.render()
            }
        },
        //删除
        remove: function(index) {
            sequence.data.splice(index, 1);
            sequence.render()
        },
        //渲染
        render: function() {
            var html = [];
            var len = sequence.data.length;
            for (var i = 0; i < len; i++) {
                html.push('<span>' + sequence.data[i] + '</span>');
            };
            dom.rows.innerHTML = html.join('');
            sequence.bindEvent()
        },
        //绑定事件
        bindEvent: function() {
            var objs = $('span', dom.rows);
            var len = objs.length;
            for (var i = 0; i < len; i++) {
                (function(m) {
                    objs[m].addEventListener('click', function() {
                        sequence.remove(m)
                    })
                })(i)
            }
        }
    };
})()



/*
 * 点击"左侧入"，将input中输入的数字从左侧插入队列中；
 * *//*

function leftAdd(obj,apiInput){
    var oSpan= document.createElement('span');
    var reg=/\d/gi;

    if (!apiInput.value){
        alert("请输入内容");
        return;
    }
    reg(apiInput);
    oSpan.innerHTML = apiInput.value;
    apiInput.value = '';
    if (obj.children[0]) {
        obj.insertBefore(oSpan, obj.children[0]);
    } else {
        obj.appendChild(oSpan);
    };
    selfRemove(obj)
}
*/
/*
 *点击"右侧入"，将input中输入的数字从右侧插入队列中；
 * *//*

function rightAdd(obj,apiInput){
    var oSpan= document.createElement('span');

    if (!apiInput.value){
        alert("请输入内容");
        return;
    }
    oSpan.innerHTML = apiInput.value;
    apiInput.value = '';
    obj.appendChild(oSpan);
    selfRemove(obj);
}
*/
/*
 *点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
 * *//*

function leftRremove(obj){
    if(obj.children.length===0){
        alert("没有可删除数字");
        return ;
    }
    alert('您正在删除数字'+obj.firstChild.innerHTML);
    obj.removeChild(obj.firstChild);
    selfRemove(obj);

}
*/
/*
 *点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
 * *//*

function rightRemove(obj){
    if(obj.children.length===0){
        alert("没有可删除数字");
        return ;
    }
    alert('您正在删除数字'+obj.lastChild.innerHTML);
    obj.removeChild(obj.lastChild);
    selfRemove(obj)

}
*/
/*
 *点击队列中任何一个元素，则该元素会被从队列中删除
 * *//*

function selfRemove(obj){
    for (var i = 0; i < obj.children.length; i++) {
        obj.children[i].onclick=function(){
            obj.removeChild(this);
        }

    };
}


function init(){
    var apiInput=document.getElementById('api-input');
    var leftIn=document.getElementById('left-in');
    var rightIn=document.getElementById('right-in');
    var leftOut=document.getElementById('left-out');
    var rightOut=document.getElementById('right-out');
    var spanWrap=document.getElementById('spanWrap');

    leftIn.onclick=function(){
        leftAdd(spanWrap,apiInput);
    };
    rightIn.onclick=function(){
        rightAdd(spanWrap,apiInput);
    };
    leftOut.onclick=function(){
        leftRremove(spanWrap);
    }
    rightOut.onclick=function(){
        rightRemove(spanWrap);
    }


}
init();*/
