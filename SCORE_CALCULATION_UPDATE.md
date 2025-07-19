# 分数计算功能更新

## 功能概述

在"钱包地址2被交易量总金额"后面添加了分数显示功能，根据交易量自动计算对应的分数。

## 分数对照表

| 交易量 | 分数 | 交易量 | 分数 |
|--------|------|--------|------|
| 2 | 1 | 1024 | 10 |
| 4 | 2 | 2048 | 11 |
| 8 | 3 | 4096 | 12 |
| 16 | 4 | 8192 | 13 |
| 32 | 5 | 16384 | 14 |
| 64 | 6 | 32768 | 15 |
| 128 | 7 | 65536 | 16 |
| 256 | 8 | 131072 | 17 |
| 512 | 9 | 262144 | 18 |
| 1024 | 10 | 524288 | 19 |
| 2048 | 11 | 1048576 | 20 |
| 4096 | 12 | 2097152 | 21 |
| 8192 | 13 | 4194304 | 22 |
| 16384 | 14 | 8388608 | 23 |
| 32768 | 15 | 16777216 | 24 |
| 65536 | 16 | 33554432 | 25 |

## 计算规则

1. **精确匹配**：如果交易量正好等于表中的某个值，直接返回对应分数
2. **最小值**：如果交易量小于2，返回分数0
3. **向下取整**：如果交易量大于2但不等于表中的值，返回小于等于该交易量的最大分数

### 示例
- 交易量1000 → 分数9（对应512）
- 交易量3000 → 分数11（对应2048）
- 交易量10000 → 分数13（对应8192）

## 技术实现

### 1. 分数计算函数
```javascript
function calculateScore(amount) {
    const scoreMap = {
        2: 1, 4: 2, 8: 3, 16: 4, 32: 5, 64: 6, 128: 7, 256: 8, 512: 9, 1024: 10,
        2048: 11, 4096: 12, 8192: 13, 16384: 14, 32768: 15, 65536: 16, 131072: 17,
        262144: 18, 524288: 19, 1048576: 20, 2097152: 21, 4194304: 22, 8388608: 23,
        16777216: 24, 33554432: 25
    };
    
    // 精确匹配
    if (scoreMap[amount] !== undefined) {
        return scoreMap[amount];
    }
    
    // 小于2返回0
    if (amount < 2) {
        return 0;
    }
    
    // 向下取整
    const amounts = Object.keys(scoreMap).map(Number).sort((a, b) => a - b);
    let closestScore = 0;
    
    for (let i = 0; i < amounts.length; i++) {
        if (amount >= amounts[i]) {
            closestScore = scoreMap[amounts[i]];
        } else {
            break;
        }
    }
    
    return closestScore;
}
```

### 2. HTML显示
```html
<div class="form-group">
    <div id="">
        <span data-translate="walletAddressAssociatedSum">钱包地址2被交易量总金额</span>: 
        <span id="walletAddressAssociatedSumValue" style="color: red;">0.0000</span>
        <span id="walletAddressAssociatedScore" style="color: #2196f3; font-weight: bold; margin-left: 8px;">
            (<span data-translate="score">分数</span>: 0)
        </span>
    </div>
</div>
```

### 3. JavaScript更新
```javascript
// 计算分数
const score = calculateScore(grandTotalDoubledExpenses);

// 更新显示
document.getElementById('walletAddressAssociatedSumValue').innerHTML = `${formattedGrandTotalDoubledExpenses}`;
document.getElementById('walletAddressAssociatedScore').innerHTML = `(${languageManager.getText('score')}: ${score})`;
```

## 多语言支持

### 中文
- 分数: "分数"

### 英文
- Score: "Score"

### 阿拉伯语
- النتيجة: "النتيجة"

## 显示效果

- **位置**：在总金额后面显示
- **颜色**：蓝色 (#2196f3)
- **格式**：(分数: X)
- **样式**：粗体，左边距8px

## 测试页面

创建了 `test_score_calculation.html` 测试页面，包含：
- 完整的分数对照表
- 交互式分数计算器
- 测试用例验证
- 计算规则说明

## 文件修改

1. **`js/app.js`**：
   - 添加了 `calculateScore()` 函数
   - 在显示总金额时计算并显示分数
   - 添加了多语言翻译支持
   - 在语言切换时更新分数显示

2. **`index.html`**：
   - 在总金额后面添加了分数显示元素
   - 添加了多语言翻译标签

3. **`test_score_calculation.html`**：
   - 新增测试页面

4. **`SCORE_CALCULATION_UPDATE.md`**：
   - 本文档

## 使用说明

1. 分析钱包交易后，系统会自动计算2倍交易量总金额
2. 根据总金额自动计算对应的分数
3. 分数显示在总金额后面，格式为"(分数: X)"
4. 支持多语言切换，分数标签会相应更新

## 注意事项

- 分数计算基于2倍交易量总金额（grandTotalDoubledExpenses）
- 分数范围：0-25
- 计算规则采用向下取整方式
- 支持小数点金额，但会转换为整数进行计算

## 后续优化

- 考虑添加分数等级显示（如：青铜、白银、黄金等）
- 添加分数历史记录功能
- 优化分数计算性能
- 添加更多分数区间 