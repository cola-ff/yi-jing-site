// ============================================================
// 首页逻辑：渲染64卦网格
// ============================================================

(function() {
    'use strict';

    /**
     * 生成小卦画 HTML（用于卡片）
     * yaoLines: ["阳","阴",...] 从下往上6爻
     */
    function renderMiniYao(yaoLines) {
        let html = '<div class="mini-yao">';
        // 从下往上排列，CSS用 column-reverse
        yaoLines.forEach(function(yao) {
            if (yao === '阳') {
                html += '<div class="yao-line yang"></div>';
            } else {
                html += '<div class="yao-line yin"></div>';
            }
        });
        html += '</div>';
        return html;
    }

    /**
     * 生成单张卦卡片 HTML
     */
    function renderGuaCard(gua) {
        var href = 'gua.html?id=' + gua.id;
        var html = '<a href="' + href + '" class="gua-card">';
        html += '<div class="gua-num">第' + gua.id + '卦</div>';
        html += '<div class="gua-name">' + gua.name + '</div>';
        html += '<div class="gua-symbol">' + gua.symbol + '</div>';
        html += renderMiniYao(gua.yaoLines);
        html += '<div class="gua-fullname">' + gua.fullName + '</div>';
        html += '</a>';
        return html;
    }

    /**
     * 渲染网格
     */
    function renderGrid() {
        if (typeof GUA64_DATA === 'undefined') {
            document.getElementById('shang-jing-grid').innerHTML = '<div class="error-msg">数据加载失败</div>';
            document.getElementById('xia-jing-grid').innerHTML = '<div class="error-msg">数据加载失败</div>';
            return;
        }

        var shangJingHtml = '';
        var xiaJingHtml = '';

        GUA64_DATA.forEach(function(gua) {
            if (gua.id <= 30) {
                shangJingHtml += renderGuaCard(gua);
            } else {
                xiaJingHtml += renderGuaCard(gua);
            }
        });

        document.getElementById('shang-jing-grid').innerHTML = shangJingHtml;
        document.getElementById('xia-jing-grid').innerHTML = xiaJingHtml;
    }

    // DOM 加载完成后渲染
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderGrid);
    } else {
        renderGrid();
    }
})();
