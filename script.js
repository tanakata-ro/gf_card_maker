const KAZE = '4';
const NETSUBYOU = '1';
const KIRI = '2';
const SENKOU = '5';
const YUME = '3';
const ANUN = '6';
const TREASURE = '8';
const SPRING = '7';
const JIKIARASHI = '9';
const NISSYOKU = '10';

window.addEventListener('beforeunload', function (event) {
    event.preventDefault()
});

jQuery(document).ready(function () {
    const card_elem = document.getElementById('card_base0');
    const set_elem = document.getElementById('print_none0');
    const g = document.getElementById('g_cards');
    for (let i = 1; i < 16; i++) {
        // card の複製
        let card = card_elem.cloneNode(true);
        //ui
        let ui = $(card).find('#ui0');
        ui.attr('id', 'ui' + i).attr('onchange', 'preview(this, ' + i + ')');
        //pi
        let pi = $(card).find('#pi0');
        pi.attr('id', 'pi' + i).attr('onclick', 'upload_image(' + i + ')');
        //na
        let na = $(card).find('#na0');
        na.attr('id', 'na' + i);
        //ai
        let ai = $(card).find('#ai0');
        ai.attr('id', 'ai' + i);
        //pls
        let pls = $(card).find('#pls0');
        pls.attr('id', 'pls' + i);
        //status
        let status = $(card).find('#status0');
        status.attr('id', 'status' + i);
        //aif
        let aif = $(card).find('#aif0');
        aif.attr('id', 'aif' + i);
        //ais
        let ais = $(card).find('#ais0');
        ais.attr('id', 'ais' + i);
        //money-c
        let money_c = $(card).find('#money-c0');
        money_c.attr('id', 'money-c' + i);
        //money
        let money = $(card).find('#money0');
        money.attr('id', 'money' + i);
        //mp-box
        let mp_box = $(card).find('#mp-box0');
        mp_box.attr('id', 'mp-box' + i);
        //con-mp
        let con_mp = $(card).find('#con-mp0');
        con_mp.attr('id', 'con-mp' + i);

        g.appendChild(card);

        //settingの複製
        let setting = set_elem.cloneNode(true);
        //type
        let type = $(setting).find('[for=type0]');
        type.attr('for', 'type' + i);
        //t
        let t = $(setting).find('#t0');
        t.attr('id', 't' + i).attr('onchange', 'select_change(' + i + ')').attr('name', 'type' + i);
        //attribute
        let attribute = $(setting).find('[for=attribute0]');
        attribute.attr('for', 'attribute' + i).attr('class', 'hi' + i + '0');
        //a
        let a = $(setting).find('#a0');
        a.attr('id', 'a' + i).attr('class', 'hi' + i + '0').attr('onchange', 'attr_change(' + i + ')').attr('name', 'attribute' + i);
        //name
        let name = $(setting).find('[for=name0]');
        name.attr('for', 'name' + i);
        //iname
        let iname = $(setting).find('#name0');
        iname.attr('id', 'name' + i).attr('onchange', 'name_change(' + i + ')').attr('name', 'name' + i);
        //odds
        let odds = $(setting).find('[for=odds0]');
        odds.attr('for', 'odds' + i).attr('class', 'hi' + i + '1');
        //iodds
        let iodds = $(setting).find('#o0');
        iodds.attr('id', 'o' + i).attr('class', 'hi' + i + '1').attr('onchange', 'change_odds(' + i + ')').attr('name', 'odds' + i);
        //hiij
        for (let j = 2; j < 13; j++) {
            let hi = $(setting).find('.hi0' + j);
            hi.attr('class', 'hi' + i + j + ' inf');

            // 一般的な入力
            hi.children().each(function (_, elem) {
                if ($(elem).attr('for')) {
                    let f = $(elem).attr('for');
                    f = f.replace('0', i);
                    console.log(f);
                    $(elem).attr('for', f);
                }
                if ($(elem).attr('name')) {
                    let f = $(elem).attr('name');
                    f = f.replace('0', i);
                    console.log(f);
                    $(elem).attr('name', f);
                }
                if ($(elem).attr('id')) {
                    let f = $(elem).attr('id');
                    f = f.replace('0', i);
                    console.log(f);
                    $(elem).attr('id', f);
                }
                if ($(elem).attr('onchange')) {
                    let f = $(elem).attr('onchange');
                    f = f.replace('0', i);
                    console.log(f);
                    $(elem).attr('onchange', f);
                }

            });
        }


        g.appendChild(setting);
    }
});


function upload_image(id) {
    console.log(id);
    $('#ui' + id).click();
    return false;
}

function preview(obj, id) {
    console.log(obj);
    let fileReader = new FileReader();
    fileReader.onload = (function () {
        document.getElementById('pi' + id).src = fileReader.result;
    });
    fileReader.readAsDataURL(obj.files[0]);
}

function select_change(id) { //typeの切り替えによるもの
    let v = document.getElementById('t' + id).value
    switch (v) {
        case '0': //武器
            hide_config(parseInt('0001111110011', 2), id);
            break;
        case '1': //防具
            hide_config(parseInt('0110111110011', 2), id);
            break;
        case '2': //取引
            hide_config(parseInt('1111111100011', 2), id);
            break;
        case '3': //雑貨(HP)
            hide_config(parseInt('1111101110011', 2), id);
            break;
        case '4': //雑貨(MP)
            hide_config(parseInt('1111110110011', 2), id);
            break;
        case '5': //雑貨(その他)
            hide_config(parseInt('1111111100011', 2), id);
            break;
        case '6': //奇跡(攻撃)
            hide_config(parseInt('0001111110101', 2), id);
            break;
        case '7': //奇跡(異常)
            hide_config(parseInt('1111011110101', 2), id);
            break;
        case '8': //奇跡(HP)
            hide_config(parseInt('1111101110100', 2), id);
            break;
        case '9': //奇跡(MP)
            hide_config(parseInt('1111110110100', 2), id);
            break;
        case '10': //奇跡(¥)
            hide_config(parseInt('1111111010100', 2), id);
            break;
        case '11': //奇跡(その他)
            hide_config(parseInt('1111111100100', 2), id);
            break;
        case '12': //守護神
            hide_config(parseInt('1111111100110', 2), id);
            break;
        case '13': //超常現象(攻撃)
            hide_config(parseInt('0001111110110', 2), id);
            break;
        case '14': //超常現象(異常)
            hide_config(parseInt('1111011110110', 2), id);
            break;
        case '15': //超常現象(HP)
            hide_config(parseInt('1111101110110', 2), id);
            break;
        case '16': //超常現象(MP)
            hide_config(parseInt('1111110110110', 2), id);
            break;
        case '17': //超常現象(¥)
            hide_config(parseInt('1111111010110', 2), id);
            break;
        case '18': //超常現象(その他)
            hide_config(parseInt('1111111100110', 2), id);
            break;
    }

    reset_color(id);
    name_change(id);

    console.log(v);
}

function hide_config(num, id) {
    // 11000のように指定することで設定を固定できる [属性, 確率, 攻撃力, 防御力, 効果, HP回復, MP回復, 金回復, 説明, 説明(2行目), 料金, 消費MP, 色]
    b = num.toString(2).padStart(13, '0').split('');
    console.log(b);
    for (let i = 0; i < b.length; i++) {
        if (b[i] == 0) {
            Array.from(document.getElementsByClassName('hi' + id + i)).forEach((e) => {
                e.style.display = '';
            });
            continue;
        }
        Array.from(document.getElementsByClassName('hi' + id + i)).forEach((e) => {
            console.log(e)
            e.style.display = 'none';
        });
    }

    //説明の有無
    if (b[8] == 1) {
        // 説明がない場合 => imgを出す and 太字にする
        document.getElementById('ai' + id).style.display = '';
        document.getElementById('aif' + id).style.fontWeight = 700;
        document.getElementById('aif' + id).style.fontSize = 'larger';
        document.getElementById('aif' + id).style.margin = '0';
        if (b[4] == 0) {
            document.getElementById('aif' + id).innerHTML = '';
        } else {
            document.getElementById('aif' + id).innerHTML = '1';
        }
    } else {
        document.getElementById('ai' + id).style.display = 'none';
        document.getElementById('aif' + id).style.fontWeight = 400;
        document.getElementById('aif' + id).style.fontSize = 'medium';
        document.getElementById('aif' + id).style.margin = '0 0 0 1mm';
        document.getElementById('aif' + id).innerHTML = '';
    }

    //statusの表示
    if (b[2] == 0) {
        //攻撃の場合
        document.getElementById('status' + id).innerHTML = '攻';
    } else if (b[3] == 0) {
        //防御の場合
        document.getElementById('status' + id).innerHTML = '守';
    } else if (b[5] == 0) {
        //HP回復
        document.getElementById('status' + id).innerHTML = '+HP';
    } else if (b[6] == 0) {
        //MP回復
        document.getElementById('status' + id).innerHTML = '+MP';
    } else if (b[7] == 0) {
        //お金回復
        document.getElementById('status' + id).innerHTML = '+¥';
    } else {
        //何もない時
        document.getElementById('status' + id).innerHTML = '';
    }

    //料金, 消費MP表示切替
    if (b[10] == 0) {
        document.getElementById('money-c' + id).style.display = '';
        document.getElementById('mp-box' + id).style.display = 'none';
    } else if (b[11] == 0) {
        document.getElementById('money-c' + id).style.display = 'none';
        document.getElementById('mp-box' + id).style.display = '';
    } else {
        document.getElementById('money-c' + id).style.display = 'none';
        document.getElementById('mp-box' + id).style.display = 'none';
    }

}

function reset_color(id) {
    document.getElementById('na' + id).style.color = '#4f4f4f'; //名前の色
    document.getElementById('a' + id).options[0].selected = true; //属性を無に変更
    document.getElementById('e' + id).options[0].selected = true; //効果のリセット
    document.getElementById('c' + id).options[0].selected = true; //テキストカラーのリセット
    document.getElementById('ai' + id).src = './images/empty.png';
    document.getElementById('aif' + id).style.color = '#4f4f4f'; //1行目の説明
    document.getElementById('ais' + id).style.color = '#4f4f4f'; //2行目
    document.getElementById('sdescribe' + id).value = ''; //説明2行目のリセット
    document.getElementById('ais' + id).innerHTML = ''; //上に同じ
    document.getElementById('addp' + id).checked = false; //+のチェック外す
    document.getElementById('addd' + id).checked = false; //+のチェック外す
    document.getElementById('o' + id).options[0].selected = true; //確率100%に
    document.getElementById('power' + id).value = 1; //攻撃力を1
    document.getElementById('defence' + id).value = 1; //防御力を1
    document.getElementById('ahp' + id).value = 1; //HP回復量を1
    document.getElementById('amp' + id).value = 1; //MP回復量を1
    document.getElementById('am' + id).value = 1; //金回復量を1
    document.getElementById('price' + id).value = 1; //金額を1
    document.getElementById('mp' + id).value = 1; //消費MPを1
    document.getElementById('fdescribe' + id).value = ''; //説明1行目のリセット
    document.getElementById('pls' + id).innerHTML = '';
    document.getElementById('pls' + id).style.color = '#4f4f4f';
    document.getElementById('status' + id).style.color = '#4f4f4f';
}

function select_change_tc(id) { //テキストカラー変更によるもの
    let v = document.getElementById('c' + id).value;
    let cb = document.getElementById('cl' + id);
    if (v == '-1') {
        cb.style.display = '';
        color_change(id, v, cb.value);
    } else {
        cb.style.display = 'none';
        color_change(id, v);
    }
}

function name_change(id) {
    let name = document.getElementById('na' + id);
    let text = document.getElementById('name' + id).value;

    //typeが奇跡 (6-11) かどうか判定
    let v = document.getElementById('t' + id).value;
    if (parseInt(v) <= 11 && parseInt(v) >= 6) {
        text = '＜' + text + '＞'
    }

    name.innerHTML = text;
}

function attr_change(id) {
    let icon = 'empty';

    let attr = document.getElementById('a' + id).value; //属性
    let img = document.getElementById('ai' + id); //アイコン

    color_change(id, attr);

    switch (attr) {
        case '1': //火
            icon = "fire";
            break;
        case '2': //水
            icon = "water";
            break;
        case '3': //木
            icon = "wood";
            break;
        case '4': //土
            icon = "stone";
            break;
        case '5': //光
            icon = "light";
            break;
        case '6': //闇
            icon = "darkness";
            break;
    }

    img.src = './images/' + icon + '.png'

}

function color_change(id, num, clr = '') {

    let name = document.getElementById('na' + id); //名前テキスト
    let exf = document.getElementById('aif' + id); //1行目の説明
    let pls = document.getElementById('pls' + id);
    let sts = document.getElementById('status' + id);
    let exs = document.getElementById('ais' + id); //2行目の説明

    let color = '#4f4f4f';

    switch (num) {
        case '1': //火
            color = "#ff6666";
            break;
        case '2': //水
            color = "#6666ff";
            break;
        case '3': //木
            color = "#ff9900";
            break;
        case '4': //土
            color = "#6688aa";
            break;
        case '5': //光
            color = "#c5c500";
            break;
        case '6': //闇
            color = "#aa55cc";
            break;
        case SPRING:
            color = "#00aaee";
            break;
        case TREASURE:
            color = "#008800";
            break;
        case JIKIARASHI:
            color = "#eeaaaa";
            break;
        case NISSYOKU:
            color = "#bbbb77";
            break;
        case '-1':
            color = clr;
            break;
    }

    name.style.color = color;
    exf.style.color = color;
    exs.style.color = color;
    pls.style.color = color;
    sts.style.color = color;

}

function exs_change(id) {
    let text = document.getElementById('sdescribe' + id).value;
    let elem = document.getElementById('ais' + id);
    elem.innerHTML = text;
}

function change_amount(id, elem_id) {
    let aif = document.getElementById('aif' + id);
    aif.innerHTML = document.getElementById(elem_id + id).value;
}

function change_pls(id) {
    let pls = document.getElementById('pls' + id);
    let odds = document.getElementById('o' + id);
    if (document.getElementById('addp' + id).checked || document.getElementById('addd' + id).checked) {
        pls.innerHTML = '+'
        odds.options[0].selected = true;
    } else {
        pls.innerHTML = ''
    }
}

function change_odds(id) {
    let pls = document.getElementById('pls' + id);
    let odd = document.getElementById('o' + id).value;
    if (odd == '100') {
        change_pls(id);
    } else {
        pls.innerHTML = odd + '%'
    }
}

function mon_change(id) {
    let mon = document.getElementById('price' + id).value;
    let e_mon = document.getElementById('money' + id);
    e_mon.innerHTML = '¥' + mon;
}

function mp_change(id) {
    let mp = document.getElementById('mp' + id).value;
    let e_mp = document.getElementById('con-mp' + id);
    e_mp.innerHTML = 'MP' + mp;
}

function effect_change(id) {
    let ect = document.getElementById('e' + id).value;
    let aif = document.getElementById('aif' + id);
    switch (ect) {
        case '-1':
            aif.innerHTML = '';
            color_change(id, 0);
            break;
        case '0':
            aif.innerHTML = '風邪';
            color_change(id, KAZE);
            console.log('風邪')
            break;
        case '1':
            aif.innerHTML = '熱病';
            color_change(id, NETSUBYOU);
            break;
        case '2':
            aif.innerHTML = '地獄病';
            color_change(id, 0);
            break;
        case '3':
            aif.innerHTML = '天国病';
            color_change(id, 0);
            break;
        case '4':
            aif.innerHTML = '霧';
            color_change(id, KIRI);
            break;
        case '5':
            aif.innerHTML = '閃光';
            color_change(id, SENKOU);
            break;
        case '6':
            aif.innerHTML = '夢';
            color_change(id, YUME);
            break;
        case '7':
            aif.innerHTML = '暗雲';
            color_change(id, ANUN);
            break;
    }
}