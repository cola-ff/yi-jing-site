// ============================================================
// 卦详情页逻辑：渲染卦头 + 天纪/地纪/人纪 Tab
// ============================================================

(function() {
    'use strict';

    var currentGua = null;

    /**
     * 获取 URL 参数中的卦 ID
     */
    function getGuaId() {
        var params = new URLSearchParams(window.location.search);
        var id = parseInt(params.get('id'), 10);
        if (isNaN(id) || id < 1 || id > 64) {
            return 1; // 默认显示第一卦
        }
        return id;
    }

    /**
     * 根据 ID 查找卦数据
     */
    function findGua(id) {
        for (var i = 0; i < GUA64_DATA.length; i++) {
            if (GUA64_DATA[i].id === id) {
                return GUA64_DATA[i];
            }
        }
        return null;
    }

    /**
     * 生成大卦画 SVG（六爻图，左侧标爻名）
     * yaoLines: ["阳","阴",...] 从下往上6爻
     * yaoNames: ["初九","九二",...] 从下往上6爻名
     */
    function renderBigYaoSVG(yaoLines, yaoNames) {
        var lineH = 18;      // 每爻高度
        var gap = 6;        // 爻间距
        var yangW = 80;     // 阳爻宽度
        var yinGap = 10;     // 阴爻中间间隙
        var yinHalfW = (yangW - yinGap) / 2; // 阴爻半宽
        var labelW = 36;     // 左侧爻名区宽度
        var totalH = lineH * 6 + gap * 5;
        var svgW = labelW + yangW + 20;
        var svgH = totalH + 10;

        var svg = '<svg class="big-yao-svg" viewBox="0 0 ' + svgW + ' ' + svgH + '" xmlns="http://www.w3.org/2000/svg">';
        svg += '<style>.yao-rect{fill:#1a1a1a;}.yao-label{font-family:Noto Serif SC,serif;font-size:10px;fill:#6b6356;}</style>';

        // 从上往下绘制（第6爻在上，第1爻在下）
        for (var i = 5; i >= 0; i--) {
            var y = (5 - i) * (lineH + gap) + 5;
            var labelX = labelW - 8;
            var rectX = labelW;

            // 爻名
            svg += '<text class="yao-label" x="' + labelX + '" y="' + (y + lineH / 2 + 5) + '" text-anchor="end">' + (yaoNames ? yaoNames[i] : '') + '</text>';

            if (yaoLines[i] === '阳') {
                // 阳爻：实线
                svg += '<rect class="yao-rect" x="' + rectX + '" y="' + y + '" width="' + yangW + '" height="' + lineH + '" rx="2"/>';
            } else {
                // 阴爻：断线（两段）
                svg += '<rect class="yao-rect" x="' + rectX + '" y="' + y + '" width="' + yinHalfW + '" height="' + lineH + '" rx="2"/>';
                svg += '<rect class="yao-rect" x="' + (rectX + yinHalfW + yinGap) + '" y="' + y + '" width="' + yinHalfW + '" height="' + lineH + '" rx="2"/>';
            }
        }

        svg += '</svg>';
        return svg;
    }

    /**
     * 渲染卦头信息
     */
    function renderGuaHeader(gua) {
        var yaoNames = gua.renJi.yaoCi.map(function(y) { return y.yao; });
        var html = '<div class="container">';
        html += '<div class="gua-header-inner">';
        html += '<div class="gua-symbol-large">' + gua.symbol + '</div>';
        html += '<div class="gua-title-block">';
        html += '<div class="gua-num-label">第 ' + gua.id + ' 卦</div>';
        html += '<h1 class="gua-fullname-large">' + gua.fullName + '</h1>';
        html += '<div class="gua-composition">' + gua.upperGua + '上' + gua.lowerGua + '下 · ' + gua.name + '卦</div>';
        html += '</div>';
        html += '<div class="gua-yao-diagram">' + renderBigYaoSVG(gua.yaoLines, yaoNames) + '</div>';
        html += '</div>';
        html += '</div>';
        document.getElementById('gua-header').innerHTML = html;
    }

    /**
     * 渲染天纪内容
     */
    function renderTianJi(gua) {
        var t = gua.tianJi;
        var html = '<div class="section-intro">';
        html += '<p>天纪者，天道也，自然规律之纪。观卦象之自然取象、卦德、象辞、天时、五行、天文，以明天道运行之理。</p>';
        html += '</div>';
        html += '<div class="field-grid">';

        html += renderField('卦象', gua.upperGua + '上' + gua.lowerGua + '下', true);
        html += renderField('自然取象', t.nature, true);
        html += renderField('卦德', t.virtue, true);
        html += renderField('五行属性', t.wuXing, true);
        html += renderField('天时', t.season);
        html += renderField('天文对应', t.astro);

        html += '</div>';

        // 象辞单独突出显示
        html += '<div class="classic-text-block">';
        html += '<div class="classic-label">象 曰</div>';
        html += '<div class="classic-text">' + t.xiangCi + '</div>';
        html += '</div>';

        document.getElementById('tab-tianji').innerHTML = html;
    }

    /**
     * 渲染地纪内容
     */
    function renderDiJi(gua) {
        var d = gua.diJi;
        var html = '<div class="section-intro">';
        html += '<p>地纪者，地道也，方位环境之纪。观卦之方位、地理取象、河图洛书数、纳甲、地域、风水启示，以明地理环境之道。</p>';
        html += '</div>';

        // 方位（特殊布局）
        html += '<div class="direction-row">';
        html += '<div class="direction-item"><div class="dir-label">先天方位</div><div class="dir-value">' + d.direction.xianTian + '</div></div>';
        html += '<div class="direction-item"><div class="dir-label">后天方位</div><div class="dir-value">' + d.direction.houTian + '</div></div>';
        html += '<div class="direction-item"><div class="dir-label">先天河洛数</div><div class="dir-value">' + d.heLuoNumber.xianTian + '</div></div>';
        html += '<div class="direction-item"><div class="dir-label">后天河洛数</div><div class="dir-value">' + d.heLuoNumber.houTian + '</div></div>';
        html += '</div>';

        html += '<div class="field-grid">';
        html += renderField('地理取象', d.geography);
        html += renderField('纳甲', d.naJia);
        html += renderField('地域对应', d.region);
        html += '</div>';

        // 风水启示
        html += '<div class="classic-text-block">';
        html += '<div class="classic-label">风水启示</div>';
        html += '<div class="classic-text">' + d.fengShui + '</div>';
        html += '</div>';

        // 倪海厦·地脉道
        if (d.niHaiSha) {
            html += '<h3 class="subsection-title">倪海厦 · 地脉道</h3>';
            html += '<div class="classic-text-block">';
            var diJiText = d.niHaiSha.replace(/\n/g, '<br>');
            html += '<div class="classic-text" style="line-height:2">' + diJiText + '</div>';
            html += '</div>';
        }

        document.getElementById('tab-diji').innerHTML = html;
    }

    /**
     * 渲染人纪内容
     */
    function renderRenJi(gua) {
        var r = gua.renJi;
        var html = '<div class="section-intro">';
        html += '<p>人纪者，人道也，人事应用之纪。观卦辞、爻辞、彖辞，参以人事、事业、婚姻、健康、修身之启示，以明为人处世之道。</p>';
        html += '</div>';

        // 卦辞
        html += '<div class="classic-text-block">';
        html += '<div class="classic-label">卦 辞</div>';
        html += '<div class="classic-text">' + r.guaCi + '</div>';
        html += '</div>';

        // 彖辞
        html += '<div class="classic-text-block">';
        html += '<div class="classic-label">彖 曰</div>';
        html += '<div class="classic-text">' + r.tuanCi + '</div>';
        html += '</div>';

        // 爻辞
        html += '<h3 class="subsection-title">六爻爻辞</h3>';
        html += '<div class="yao-list">';
        r.yaoCi.forEach(function(yao, idx) {
            html += '<div class="yao-item">';
            html += '<div class="yao-item-header">';
            html += '<span class="yao-name">' + yao.yao + '</span>';
            html += '<span class="yao-line-type">' + gua.yaoLines[idx] + '爻</span>';
            html += '</div>';
            html += '<div class="yao-text">' + yao.text + '</div>';
            html += '<div class="yao-interpret"><span class="interpret-label">解读：</span>' + yao.interpret + '</div>';
            html += '</div>';
        });
        html += '</div>';

        // 人事应用
        html += '<h3 class="subsection-title">人事应用</h3>';
        html += '<div class="field-grid">';
        html += renderField('人事启示', r.affairs);
        html += renderField('事业', r.career);
        html += renderField('婚姻', r.marriage);
        html += renderField('健康', r.health);
        html += '</div>';

        // 修身
        html += '<div class="classic-text-block">';
        html += '<div class="classic-label">修身</div>';
        html += '<div class="classic-text">' + r.cultivation + '</div>';
        html += '</div>';

        // 倪海厦·人间道
        if (r.niHaiSha) {
            html += '<h3 class="subsection-title">倪海厦 · 人间道</h3>';
            html += '<div class="classic-text-block">';
            var renJiText = r.niHaiSha.replace(/\n/g, '<br>');
            html += '<div class="classic-text" style="line-height:2">' + renJiText + '</div>';
            html += '</div>';
        }

        document.getElementById('tab-renji').innerHTML = html;
    }

    /**
     * 渲染单个字段
     */
    function renderField(label, value, highlight) {
        var cls = 'field-item' + (highlight ? ' highlight' : '');
        return '<div class="' + cls + '">' +
            '<div class="field-label">' + label + '</div>' +
            '<div class="field-value">' + value + '</div>' +
            '</div>';
    }

    /**
     * 设置上一卦/下一卦链接
     */
    function setupNav(id) {
        var prevId = id > 1 ? id - 1 : 64;
        var nextId = id < 64 ? id + 1 : 1;
        document.getElementById('prev-gua').href = 'gua.html?id=' + prevId;
        document.getElementById('next-gua').href = 'gua.html?id=' + nextId;
    }

    /**
     * 设置页面标题
     */
    function setPageTitle(gua) {
        document.title = '第' + gua.id + '卦 · ' + gua.fullName + ' | 易经六十四卦';
    }

    /**
     * Tab 切换
     */
    function setupTabs() {
        var tabBtns = document.querySelectorAll('.tab-btn');
        var tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var tabName = btn.getAttribute('data-tab');

                // 切换按钮状态
                tabBtns.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');

                // 切换内容显示
                tabContents.forEach(function(c) { c.classList.remove('active'); });
                document.getElementById('tab-' + tabName).classList.add('active');

                // 滚动到顶部
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    /**
     * 主渲染函数
     */
    function render() {
        if (typeof GUA64_DATA === 'undefined') {
            document.getElementById('gua-header').innerHTML = '<div class="error-msg">数据加载失败，请刷新页面重试</div>';
            return;
        }

        var id = getGuaId();
        var gua = findGua(id);

        if (!gua) {
            document.getElementById('gua-header').innerHTML = '<div class="error-msg">未找到第' + id + '卦数据</div>';
            return;
        }

        currentGua = gua;
        setPageTitle(gua);
        renderGuaHeader(gua);
        renderTianJi(gua);
        renderDiJi(gua);
        renderRenJi(gua);
        setupNav(id);
        setupTabs();
    }

    // DOM 加载完成后渲染
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }
})();
