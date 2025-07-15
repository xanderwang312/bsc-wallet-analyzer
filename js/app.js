/**
 * BSC钱包交易分析工具
 * 
 * @author Lethe (https://x.com/lethe640604)
 * @copyright Copyright (c) 2024 Lethe
 * @license MIT License
 * 
 * 本工具用于分析币安智能链上的钱包交易数据，
 * 支持多钱包分析、代币统计、交易对分析等功能。
 * 
 * 保留所有权利。未经许可，禁止商业用途。
 * 个人使用和学习目的可免费使用。
 */

// 多语言数据结构
const translations = {
    cn: {
        title: "Alpha BSC钱包交易分析工具",
        subtitle: "分析币安智能链上钱包的交易数据",
        apiSettings: "API设置",
        bscScanApiKey: "BscScan API密钥:",
        bscScanApiKeyPlaceholder: "输入您的BscScan API密钥",
        apiKeyHelp: "在 bscscan.com/myapikey 获取密钥",
        apiKeyTip1: "免费API有请求限制(5次/秒)，请自行获取API密钥",
        apiKeyTip2: "首次保存后将自动存储在本地，无需重复输入",
        timeRange: "时间范围 (UTC+8 中国时区)",
        startTime: "开始时间:",
        endTime: "结束时间:",
        dateNote: "注意: 结束时间不能超过当前时间，时间精确到秒 (UTC+8 北京时间)",
        defaultTimeNote: "默认时间范围: 如果当前时间在8:00AM之后，则选择今天8:00AM到现在；否则选择前一天8:00AM到现在",
        walletAddress: "钱包地址",
        walletAddressAssociatedSum: "钱包地址2被交易量总金额",
        aliasPlaceholder: "别名",
        walletAddressPlaceholder: "钱包地址0x...",
        add: "添加",
        inputWalletAddresses: "输入钱包地址(每行一个):",
        walletAddressExample: "0x8894e0a0c962cb723c1976a4421c95949be2d4e3",
        tokenAddress: "代币地址",
        inputTokenAddresses: "输入代币合约地址(每行一个):",
        tokenAddressExample: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        tokenAddressNote: "留空则分析所有代币",
        analyzeWallet: "分析钱包",
        viewLatestTransactions: "查看最新交易",
        tokenStats: "代币交易统计",
        selectWalletAddress: "选择钱包地址:",
        allWallets: "所有钱包合并统计",
        statsType: "统计类型:",
        pairStats: "交易对统计",
        tokenStatsBtn: "代币统计",
        errorInfo: "错误信息",
        solutionTips: "常见问题解决方案:",
        tip1: "确保您的API密钥正确且有效",
        tip2: "检查钱包地址格式是否正确",
        tip3: "确保所选时间不在未来",
        tip4: "如遇到API限制错误，请稍后再试",
        analysisResults: "分析结果",
        analyzing: "正在分析钱包数据...",
        resultsPlaceholder: "分析结果将显示在这里",
        footerTitle: "Alpha BSC钱包交易分析工具",
        tip: "提示",
        startQuery: "开始查询，请稍候...",
        quickWalletAliasRequired: "请输入钱包别名",
        quickWalletAddressRequired: "请输入钱包地址",
        quickWalletAddressInvalid: "钱包地址格式无效",
        quickWalletAliasExists: "该别名已存在",
        quickWalletAddressExists: "该钱包地址已存在",
        quickWalletAddSuccess: "快捷钱包添加成功！点击标签可选择地址",
        noQuickWallets: "暂无快捷钱包",
        deleteWalletConfirm: "确定要删除快捷钱包",
        walletAddress: "地址",
        walletDeleted: "已删除快捷钱包",
        walletDeletedAndRemoved: "已删除快捷钱包并从选择中移除",
        walletsSelected: "已选择",
        walletsSelectedCount: "个钱包地址",
        walletsCleared: "已清空钱包地址选择",
        clickToSelect: "点击选择钱包地址",
        clickToUnselect: "点击取消选择钱包地址",
        delete: "删除",
        selectTokensToCalculate: "选择要统计的代币:",
        calculateSelectedTokenStats: "计算所选代币统计",
        selectAll: "全选",
        unselectAll: "取消全选",
        selectPairsToCalculate: "选择要统计的代币兑换对:",
        calculateSelectedPairStats: "计算选定的兑换统计",
        pleaseSelectContent: "请先选择要统计的内容并点击计算按钮",
        selectAtLeastOneToken: "请至少选择一个代币进行统计",
        selectAtLeastOnePair: "请至少选择一个交易对进行统计",
        analyzeWalletFirst: "请先分析钱包交易",
        calculatingPairStats: "正在计算交易对统计...",
        calculationError: "计算统计时出错",
        token: "代币",
        income: "收入",
        expense: "支出",
        netChange: "净变化",
        transactionCount: "交易次数",
        tradingPair: "交易对",
        date: "日期",
        price: "价格",
        transactionHash: "交易哈希",
        expenseUsdt: "支出 (USDT)",
        dateSort: "日期排序",
        copyExpenseData: "复制支出数据",
        copyUsdtExpenseData: "复制支出(USDT)数据",
        tokenTransactionStats: "代币交易统计",
        pairTransactionStats: "交易对统计",
        allWalletTokenStats: "所有钱包代币交易统计",
        allWalletPairStats: "所有钱包交易对统计",
        pairSummaryInfo: "交易对汇总信息",
        totalTradingPairs: "总计交易对",
        totalTransactions: "总交易次数",
        transactionCountLabel: "交易次数",
        exchange: "兑",
        exchangeFilter: "兑换币种",
        exchangedFilter: "被兑换币种",
        selectPairsPrompt: "请勾选您想要统计的代币兑换对（可多选）",
        expenditureValue: "支出价值"
    },
    en: {
        title: "Alpha BSC Wallet Transaction Analysis Tool",
        subtitle: "Analyze wallet transaction data on Binance Smart Chain",
        apiSettings: "API Settings",
        bscScanApiKey: "BscScan API Key:",
        bscScanApiKeyPlaceholder: "Enter your BscScan API key",
        apiKeyHelp: "Get your key at bscscan.com/myapikey",
        apiKeyTip1: "Free API has rate limits (5 requests/sec), please get your own API key",
        apiKeyTip2: "Will be automatically stored locally after first save, no need to re-enter",
        timeRange: "Time Range (UTC+8 China Time Zone)",
        startTime: "Start Time:",
        endTime: "End Time:",
        dateNote: "Note: End time cannot exceed current time, time accurate to seconds (UTC+8 Beijing Time)",
        defaultTimeNote: "Default time range: If current time is after 8:00AM, select today 8:00AM to now; otherwise select previous day 8:00AM to now",
        walletAddress: "Wallet Address",
        walletAddressAssociatedSum: "Wallet Address 2x Transaction Total Amount",
        aliasPlaceholder: "Alias",
        walletAddressPlaceholder: "Wallet Address 0x...",
        add: "Add",
        inputWalletAddresses: "Enter wallet addresses (one per line):",
        walletAddressExample: "0x8894e0a0c962cb723c1976a4421c95949be2d4e3",
        tokenAddress: "Token Address",
        inputTokenAddresses: "Enter token contract addresses (one per line):",
        tokenAddressExample: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        tokenAddressNote: "Leave empty to analyze all tokens",
        analyzeWallet: "Analyze Wallet",
        viewLatestTransactions: "View Latest Transactions",
        tokenStats: "Token Transaction Statistics",
        selectWalletAddress: "Select Wallet Address:",
        allWallets: "All Wallets Combined Statistics",
        statsType: "Statistics Type:",
        pairStats: "Trading Pair Statistics",
        tokenStatsBtn: "Token Statistics",
        errorInfo: "Error Information",
        solutionTips: "Common Problem Solutions:",
        tip1: "Ensure your API key is correct and valid",
        tip2: "Check wallet address format is correct",
        tip3: "Ensure selected time is not in the future",
        tip4: "If you encounter API rate limit errors, please try again later",
        analysisResults: "Analysis Results",
        analyzing: "Analyzing wallet data...",
        resultsPlaceholder: "Analysis results will be displayed here",
        footerTitle: "Alpha BSC Wallet Transaction Analysis Tool",
        tip: "Tip",
        startQuery: "Starting query, please wait...",
        quickWalletAliasRequired: "Please enter wallet alias",
        quickWalletAddressRequired: "Please enter wallet address",
        quickWalletAddressInvalid: "Invalid wallet address format",
        quickWalletAliasExists: "This alias already exists",
        quickWalletAddressExists: "This wallet address already exists",
        quickWalletAddSuccess: "Quick wallet added successfully! Click tags to select addresses",
        noQuickWallets: "No quick wallets",
        deleteWalletConfirm: "Are you sure you want to delete quick wallet",
        walletAddress: "Address",
        walletDeleted: "Deleted quick wallet",
        walletDeletedAndRemoved: "Deleted quick wallet and removed from selection",
        walletsSelected: "Selected",
        walletsSelectedCount: "wallet addresses",
        walletsCleared: "Cleared wallet address selection",
        clickToSelect: "Click to select wallet address",
        clickToUnselect: "Click to unselect wallet address",
        delete: "Delete",
        selectTokensToCalculate: "Select tokens to calculate:",
        calculateSelectedTokenStats: "Calculate Selected Token Statistics",
        selectAll: "Select All",
        unselectAll: "Unselect All",
        selectPairsToCalculate: "Select trading pairs to calculate:",
        calculateSelectedPairStats: "Calculate Selected Pair Statistics",
        pleaseSelectContent: "Please select content to calculate and click the calculate button",
        selectAtLeastOneToken: "Please select at least one token for statistics",
        selectAtLeastOnePair: "Please select at least one trading pair for statistics",
        analyzeWalletFirst: "Please analyze wallet transactions first",
        calculatingPairStats: "Calculating trading pair statistics...",
        calculationError: "Error calculating statistics",
        token: "Token",
        income: "Income",
        expense: "Expense",
        netChange: "Net Change",
        transactionCount: "Transaction Count",
        tradingPair: "Trading Pair",
        date: "Date",
        price: "Price",
        transactionHash: "Transaction Hash",
        expenseUsdt: "Expense (USDT)",
        dateSort: "Date Sort",
        copyExpenseData: "Copy Expense Data",
        copyUsdtExpenseData: "Copy USDT Expense Data",
        tokenTransactionStats: "Token Transaction Statistics",
        pairTransactionStats: "Trading Pair Statistics",
        allWalletTokenStats: "All Wallet Token Statistics",
        allWalletPairStats: "All Wallet Trading Pair Statistics",
        pairSummaryInfo: "Trading Pair Summary Information",
        totalTradingPairs: "Total Trading Pairs",
        totalTransactions: "Total Transactions",
        transactionCountLabel: "Transaction Count",
        exchange: "to",
        exchangeFilter: "Exchange Currency",
        exchangedFilter: "Exchanged Currency",
        selectPairsPrompt: "Please select the trading pairs you want to calculate (multiple selection allowed)",
        expenditureValue: "Expenditure Value"
    },
    ar: {
        title: "أداة تحليل معاملات محفظة BSC الأساسية",
        subtitle: "تحليل بيانات معاملات المحفظة على بينانس الذكية",
        apiSettings: "إعدادات API",
        bscScanApiKey: "مفتاح BscScan API:",
        bscScanApiKeyPlaceholder: "أدخل مفتاح BscScan API الخاص بك",
        apiKeyHelp: "احصل على مفتاحك من bscscan.com/myapikey",
        apiKeyTip1: "واجهة برمجة التطبيقات المجانية لديها حدود للطلبات (5 طلبات/ثانية)، يرجى الحصول على مفتاح API الخاص بك",
        apiKeyTip2: "سيتم تخزينه تلقائياً محلياً بعد الحفظ الأول، لا حاجة لإعادة الإدخال",
        timeRange: "النطاق الزمني (UTC+8 المنطقة الزمنية الصينية)",
        startTime: "وقت البداية:",
        endTime: "وقت النهاية:",
        dateNote: "ملاحظة: وقت النهاية لا يمكن أن يتجاوز الوقت الحالي، الوقت دقيق إلى الثواني (UTC+8 توقيت بكين)",
        defaultTimeNote: "النطاق الزمني الافتراضي: إذا كان الوقت الحالي بعد الساعة 8:00 صباحاً، اختر اليوم 8:00 صباحاً إلى الآن؛ وإلا اختر اليوم السابق 8:00 صباحاً إلى الآن",
        walletAddress: "عنوان المحفظة",
        walletAddressAssociatedSum: "المبلغ الإجمالي لمعاملات عنوان المحفظة 2x",
        aliasPlaceholder: "الاسم المستعار",
        walletAddressPlaceholder: "عنوان المحفظة 0x...",
        add: "إضافة",
        inputWalletAddresses: "أدخل عناوين المحافظ (واحد في كل سطر):",
        walletAddressExample: "0x8894e0a0c962cb723c1976a4421c95949be2d4e3",
        tokenAddress: "عنوان الرمز المميز",
        inputTokenAddresses: "أدخل عناوين عقود الرموز المميزة (واحد في كل سطر):",
        tokenAddressExample: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        tokenAddressNote: "اتركه فارغاً لتحليل جميع الرموز المميزة",
        analyzeWallet: "تحليل المحفظة",
        viewLatestTransactions: "عرض أحدث المعاملات",
        tokenStats: "إحصائيات معاملات الرمز المميز",
        selectWalletAddress: "اختر عنوان المحفظة:",
        allWallets: "إحصائيات مجمعة لجميع المحافظ",
        statsType: "نوع الإحصائيات:",
        pairStats: "إحصائيات أزواج التداول",
        tokenStatsBtn: "إحصائيات الرمز المميز",
        errorInfo: "معلومات الخطأ",
        solutionTips: "حلول المشاكل الشائعة:",
        tip1: "تأكد من أن مفتاح API الخاص بك صحيح وصالح",
        tip2: "تحقق من صحة تنسيق عنوان المحفظة",
        tip3: "تأكد من أن الوقت المحدد ليس في المستقبل",
        tip4: "إذا واجهت أخطاء حد معدل API، يرجى المحاولة مرة أخرى لاحقاً",
        analysisResults: "نتائج التحليل",
        analyzing: "جارٍ تحليل بيانات المحفظة...",
        resultsPlaceholder: "ستظهر نتائج التحليل هنا",
        footerTitle: "أداة تحليل معاملات محفظة BSC الأساسية",
        tip: "نصيحة",
        startQuery: "بدء الاستعلام، يرجى الانتظار...",
        quickWalletAliasRequired: "يرجى إدخال اسم مستعار للمحفظة",
        quickWalletAddressRequired: "يرجى إدخال عنوان المحفظة",
        quickWalletAddressInvalid: "تنسيق عنوان المحفظة غير صحيح",
        quickWalletAliasExists: "هذا الاسم المستعار موجود بالفعل",
        quickWalletAddressExists: "عنوان المحفظة هذا موجود بالفعل",
        quickWalletAddSuccess: "تمت إضافة المحفظة السريعة بنجاح! انقر على العلامات لتحديد العناوين",
        noQuickWallets: "لا توجد محافظ سريعة",
        deleteWalletConfirm: "هل أنت متأكد أنك تريد حذف المحفظة السريعة",
        walletAddress: "العنوان",
        walletDeleted: "تم حذف المحفظة السريعة",
        walletDeletedAndRemoved: "تم حذف المحفظة السريعة وإزالتها من التحديد",
        walletsSelected: "تم تحديد",
        walletsSelectedCount: "عناوين محافظ",
        walletsCleared: "تم مسح تحديد عناوين المحافظ",
        clickToSelect: "انقر لتحديد عنوان المحفظة",
        clickToUnselect: "انقر لإلغاء تحديد عنوان المحفظة",
        delete: "حذف",
        selectTokensToCalculate: "اختر الرموز المميزة للحساب:",
        calculateSelectedTokenStats: "حساب إحصائيات الرموز المميزة المحددة",
        selectAll: "تحديد الكل",
        unselectAll: "إلغاء تحديد الكل",
        selectPairsToCalculate: "اختر أزواج التداول للحساب:",
        calculateSelectedPairStats: "حساب إحصائيات الأزواج المحددة",
        pleaseSelectContent: "يرجى اختيار المحتوى للحساب والنقر على زر الحساب",
        selectAtLeastOneToken: "يرجى اختيار رمز مميز واحد على الأقل للإحصائيات",
        selectAtLeastOnePair: "يرجى اختيار زوج تداول واحد على الأقل للإحصائيات",
        analyzeWalletFirst: "يرجى تحليل معاملات المحفظة أولاً",
        calculatingPairStats: "جارٍ حساب إحصائيات أزواج التداول...",
        calculationError: "خطأ في حساب الإحصائيات",
        token: "الرمز المميز",
        income: "الدخل",
        expense: "المصروف",
        netChange: "التغيير الصافي",
        transactionCount: "عدد المعاملات",
        tradingPair: "زوج التداول",
        date: "التاريخ",
        price: "السعر",
        transactionHash: "رمز المعاملة",
        expenseUsdt: "المصروف (USDT)",
        dateSort: "ترتيب التاريخ",
        copyExpenseData: "نسخ بيانات المصروف",
        copyUsdtExpenseData: "نسخ بيانات مصروف USDT",
        tokenTransactionStats: "إحصائيات معاملات الرمز المميز",
        pairTransactionStats: "إحصائيات أزواج التداول",
        allWalletTokenStats: "إحصائيات رموز جميع المحافظ",
        allWalletPairStats: "إحصائيات أزواج تداول جميع المحافظ",
        pairSummaryInfo: "معلومات ملخص أزواج التداول",
        totalTradingPairs: "إجمالي أزواج التداول",
        totalTransactions: "إجمالي المعاملات",
        transactionCountLabel: "عدد المعاملات",
        exchange: "إلى",
        exchangeFilter: "عملة التبادل",
        exchangedFilter: "العملة المتبادلة",
        selectPairsPrompt: "يرجى اختيار أزواج التداول التي تريد حسابها (يُسمح بالاختيار المتعدد)",
        expenditureValue: "قيمة المصروف"
    }
};

// 多语言管理类
class LanguageManager {
    constructor() {
        this.currentLanguage = this.loadLanguage();
        this.init();
    }

    loadLanguage() {
        const savedLang = localStorage.getItem('selectedLanguage');
        return savedLang || 'cn';
    }

    saveLanguage(lang) {
        localStorage.setItem('selectedLanguage', lang);
    }

    init() {
        // 初始化语言按钮事件
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });

        // 应用当前语言
        this.applyLanguage(this.currentLanguage);
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        this.saveLanguage(lang);
        this.applyLanguage(lang);
    }

    applyLanguage(lang) {
        // 更新按钮状态
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // 设置页面方向（阿拉伯语为RTL）
        if (lang === 'ar') {
            document.documentElement.classList.add('rtl');
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.classList.remove('rtl');
            document.documentElement.dir = 'ltr';
        }

        // 翻译所有文本
        const langData = translations[lang];
        
        // 处理基本翻译
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langData[key]) {
                element.textContent = langData[key];
            }
        });

        // 处理占位符翻译
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (langData[key]) {
                element.setAttribute('placeholder', langData[key]);
            }
        });

        // 处理标题翻译
        document.querySelectorAll('[data-translate-title]').forEach(element => {
            const key = element.getAttribute('data-translate-title');
            if (langData[key]) {
                element.setAttribute('title', langData[key]);
            }
        });

        // 更新文档标题
        document.title = langData.title;

        // 更新按钮内容
        const analyzeButton = document.getElementById('analyzeButton');
        const latestButton = document.getElementById('latestButton');
        
        if (analyzeButton) {
            analyzeButton.innerHTML = `<i class="fas fa-search"></i> <span data-translate="analyzeWallet">${langData.analyzeWallet}</span>`;
        }
        
        if (latestButton) {
            latestButton.innerHTML = `<i class="fas fa-clock"></i> <span data-translate="viewLatestTransactions">${langData.viewLatestTransactions}</span>`;
        }

        // 更新快捷钱包显示
        if (window.quickWalletManager) {
            window.quickWalletManager.renderWallets();
        }
    }

    // 获取当前语言的翻译文本
    getText(key) {
        return translations[this.currentLanguage][key] || key;
    }
}

// 在文件顶部添加千分位格式化函数
/**
 * 对数字添加千分位分隔符
 * @param {string|number} num - 要格式化的数字
 * @returns {string} 格式化后的数字字符串
 */
function formatNumberWithCommas(num) {
    // 确保传入的是字符串
    const numStr = typeof num === 'string' ? num : num.toString();
    
    // 分离整数部分和小数部分
    const parts = numStr.split('.');
    
    // 对整数部分添加千分位
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // 重新组合整数和小数部分
    return parts.join('.');
}

// 全局语言管理器实例
let languageManager;

document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言管理器
    languageManager = new LanguageManager();
    
    // DOM elements
    const bscScanApiKeyInput = document.getElementById('bscScanApiKey');
    const walletAddressesTextarea = document.getElementById('walletAddresses');
    const tokenAddressesTextarea = document.getElementById('tokenAddresses');
    const startDateTimeInput = document.getElementById('startDateTime');
    const endDateTimeInput = document.getElementById('endDateTime');
    const analyzeButton = document.getElementById('analyzeButton');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const resultsContainer = document.getElementById('resultsContainer');
    const tokenExamples = document.querySelectorAll('.token-example');
    const errorContainer = document.getElementById('errorContainer');
    const errorMessage = document.getElementById('errorMessage');
    
    // 模态弹窗元素
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    // 快捷钱包管理元素
    const quickWalletAlias = document.getElementById('quickWalletAlias');
    const quickWalletAddress = document.getElementById('quickWalletAddress');
    const addQuickWalletBtn = document.getElementById('addQuickWalletBtn');
    const quickWalletChipsRow = document.getElementById('quickWalletChipsRow');
    const applyQuickWallets = document.getElementById('applyQuickWallets');
    
    // 折叠功能元素
    const apiSettingsHeader = document.getElementById('apiSettingsHeader');
    const apiSettingsCollapseBtn = document.getElementById('apiSettingsCollapseBtn');
    const apiSettingsContent = document.getElementById('apiSettingsContent');
    
    // 时间范围折叠功能元素
    const timeRangeHeader = document.getElementById('timeRangeHeader');
    const timeRangeCollapseBtn = document.getElementById('timeRangeCollapseBtn');
    const timeRangeContent = document.getElementById('timeRangeContent');
    
    // 创建按钮容器，确保按钮并排显示
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '10px';
    buttonContainer.style.marginBottom = '10px';
    
    // 将原按钮移动到容器中
    analyzeButton.parentNode.insertBefore(buttonContainer, analyzeButton);
    buttonContainer.appendChild(analyzeButton);
    
    // 添加新的查看最新交易按钮
    const latestButton = document.createElement('button');
    latestButton.id = 'latestButton';
    latestButton.className = 'btn btn-primary'; // 使用与原按钮相同的样式
    latestButton.innerHTML = `<i class="fas fa-clock"></i> <span data-translate="viewLatestTransactions">${languageManager.getText('viewLatestTransactions')}</span>`;
    buttonContainer.appendChild(latestButton);
    
    // 添加按钮说明文本
    const buttonInfo = document.createElement('div');
    buttonInfo.className = 'button-info';
    buttonInfo.innerHTML = `
        <div class="button-info-item">
            <span class="button-name">查看交易记录：</span>
            <span class="button-desc">查询输入框时间范围数据，结束时间不会自动填入当前时间</span>
        </div>
        <div class="button-info-item">
            <span class="button-name">查看最新交易：</span>
            <span class="button-desc">自动更新结束时间为当前时间，以避免想查询最新数据需要手动选择结束时间</span>
        </div>
    `;
    
    // 将说明文本添加到按钮容器后面
    buttonContainer.insertAdjacentElement('afterend', buttonInfo);
    
    // 添加样式
    const buttonInfoStyle = document.createElement('style');
    buttonInfoStyle.textContent = `
        .button-info {
            margin-top: 10px;
            font-size: 12px;
            color: #666;
            background-color: #f8f9fa;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #e0e0e0;
        }
        .button-info-item {
            margin-bottom: 5px;
        }
        .button-info-item:last-child {
            margin-bottom: 0;
        }
        .button-name {
            font-weight: bold;
            color: #333;
        }
        .button-desc {
            color: #666;
        }
    `;
    document.head.appendChild(buttonInfoStyle);
    
    // 显示模态弹窗
    function showModal(title, content) {
        if (modalTitle) modalTitle.textContent = title || languageManager.getText('tip');
        if (content && modalContent) {
            modalContent.innerHTML = content;
        }
        if (modalOverlay) {
            modalOverlay.style.display = 'flex';
            document.body.classList.add('modal-open');
        }
    }
    
    // 隐藏模态弹窗
    function hideModal() {
        if (modalOverlay) {
            modalOverlay.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    }
    
    // 绑定模态弹窗关闭事件
    if (modalClose) {
        modalClose.addEventListener('click', hideModal);
    }
    
    // 点击模态弹窗外部区域关闭
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                hideModal();
            }
        });
    }
    
    // 添加作者信息和项目信息区域 - 移动到页面顶部
    const mainContainer = document.querySelector('.container');
    if (mainContainer) {
        // 创建作者信息卡片
        const authorInfoDiv = document.createElement('div');
        authorInfoDiv.className = 'author-info-card';
        authorInfoDiv.innerHTML = `
            <div class="author-header">
                <h3>💎 BSC钱包分析工具</h3>
            </div>
            <div class="author-content">
                <div class="author-row">
                    <div class="github-info">
                        <i class="fas fa-code-branch"></i>
                        <a href="https://github.com/xanderwang312/bsc-wallet-analyzer" target="_blank">
                            GitHub 仓库
                        </a>
                    </div>
                    <div class="author-follow">
                        <i class="fab fa-twitter"></i>
                        <a href="https://x.com/lethe640604" target="_blank">
                            关注推特
                        </a>
                    </div>
                    <div class="donation-info">
                        <i class="fas fa-donate"></i>
                        <span class="donation-text">支持作者</span>
                        <div class="donation-qr-wrapper">
                            <div class="donation-qr" id="donationQR">
                                <div class="evm-address">EVM地址：<br>0xc183b9dc1abd48beb518712821157520ea8d0033</div>
                                <div class="qr-code-container">
                                    <img src="./images/evm.png" alt="EVM地址二维码" class="qr-code">
                                </div>
                                <div class="donation-message">支持EVM网络所有网络代币打赏，感谢大家的支持！！！</div>
                                <div class="close-qr">×</div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        `;
        
        // 添加作者信息区域的样式
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .author-info-card {
                background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
                color: white;
                border-radius: 8px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                margin: 0 0 20px 0;
                overflow: hidden;
                border: none;
                position: relative;
            }
            
            .author-header {
                background-color: rgba(0, 0, 0, 0.1);
                padding: 15px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                text-align: center;
            }
            
            .author-header h3 {
                margin: 0;
                font-size: 18px;
                color: white;
                font-weight: 600;
            }
            
            .author-content {
                padding: 15px;
            }
            
            .author-row {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                gap: 10px;
            }
            
            .github-info, .author-follow, .donation-info {
                display: flex;
                align-items: center;
                padding: 8px 15px;
                border-radius: 20px;
                background-color: rgba(255, 255, 255, 0.2);
                transition: all 0.3s ease;
            }
            
            .github-info:hover, .author-follow:hover, .donation-info:hover {
                background-color: rgba(255, 255, 255, 0.3);
                transform: translateY(-2px);
            }
            
            .github-info i, .author-follow i, .donation-info i {
                margin-right: 10px;
                font-size: 16px;
                color: white;
                width: 20px;
                text-align: center;
            }
            
            .github-info a, .author-follow a {
                color: white;
                text-decoration: none;
                font-weight: 500;
            }
            
            .github-info a:hover, .author-follow a:hover {
                text-decoration: underline;
            }
            
            .donation-text {
                color: white;
                cursor: pointer;
                font-weight: 500;
            }
            
            .donation-qr-wrapper {
                position: relative;
                display: inline-block;
                margin-left: 5px;
            }
            
            .donation-qr {
                position: fixed; /* 改为固定定位，确保始终在屏幕上可见 */
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 20px;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
                z-index: 9999999; /* 增加z-index值 */
                display: none; /* Initially hidden */
                text-align: center;
                min-width: 280px;
                max-width: 90vw; /* 限制最大宽度 */
                max-height: 90vh; /* 限制最大高度 */
                overflow: auto; /* 添加滚动条以防内容过多 */
                border: 2px solid #2196f3;
            }
            
            /* 添加背景遮罩 */
            .qr-backdrop {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 9999998;
                display: none;
            }
            
            .evm-address {
                font-size: 13px;
                color: #333;
                padding: 12px;
                word-break: break-all;
                margin: 10px 0;
                border: 1px dashed #2196f3;
                border-radius: 5px;
                background: #f0f8ff;
                font-weight: 500;
            }
            
            .qr-code-container {
                margin: 15px auto;
                text-align: center;
            }
            
            .qr-code {
                width: 200px;
                height: 200px;
                border-radius: 8px;
                border: 1px solid #eee;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            
            .donation-message {
                font-size: 14px;
                color: #e91e63;
                font-weight: bold;
                margin: 15px 0 10px 0;
                padding: 10px;
                border-top: 1px solid #eee;
            }
            
            .close-qr {
                position: absolute;
                top: 10px;
                right: 15px;
                font-size: 24px;
                cursor: pointer;
                color: #666;
                font-weight: bold;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                border-radius: 50%;
                background: #f5f5f5;
            }
            
            .close-qr:hover {
                color: #333;
                background: #e0e0e0;
            }
            
            @media (max-width: 768px) {
                .author-row {
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                .github-info, .author-follow, .donation-info {
                    width: 100%;
                }
            }
        `;
        document.head.appendChild(styleElement);
        
        // 在容器的最开始插入作者信息
        mainContainer.prepend(authorInfoDiv);
        
        // 直接添加打赏点击事件到元素上
        const donationElement = authorInfoDiv.querySelector('.donation-info');
        const donationQR = authorInfoDiv.querySelector('#donationQR');
        const closeQRBtn = authorInfoDiv.querySelector('.close-qr');
        
        // 创建背景遮罩
        const qrBackdrop = document.createElement('div');
        qrBackdrop.className = 'qr-backdrop';
        document.body.appendChild(qrBackdrop);
        
        // 点击打赏文本显示二维码和背景
        donationElement.addEventListener('click', function(e) {
            // 确保二维码在最顶层显示
            document.body.appendChild(donationQR);
            donationQR.style.display = 'block';
            qrBackdrop.style.display = 'block';
            console.log('显示二维码'); // 添加调试信息
            e.stopPropagation();
        });
        
        // 点击关闭按钮或背景隐藏二维码
        closeQRBtn.addEventListener('click', function(e) {
            donationQR.style.display = 'none';
            qrBackdrop.style.display = 'none';
            console.log('关闭二维码'); // 添加调试信息
            e.stopPropagation();
            e.preventDefault(); // 防止链接默认行为
        });
        
        // 点击背景隐藏二维码
        qrBackdrop.addEventListener('click', function() {
            donationQR.style.display = 'none';
            qrBackdrop.style.display = 'none';
        });
        
        // 添加ESC键关闭二维码
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && donationQR.style.display === 'block') {
                donationQR.style.display = 'none';
                qrBackdrop.style.display = 'none';
            }
        });

        // 点击其他地方隐藏二维码
        document.addEventListener('click', function(e) {
            if (donationQR.style.display === 'block' && !donationQR.contains(e.target) && !donationElement.contains(e.target)) {
                donationQR.style.display = 'none';
                qrBackdrop.style.display = 'none';
            }
        });
    }
    
    // 代币统计DOM元素
    const tokenStatsCard = document.getElementById('tokenStatsCard');
    const tokenStatsSelectionContainer = document.getElementById('tokenStatsSelectionContainer');
    const pairStatsSelectionContainer = document.getElementById('pairStatsSelectionContainer');
    const tokenStatsResultContainer = document.getElementById('tokenStatsResultContainer');
    const calculateTokenStatsBtn = document.getElementById('calculateTokenStatsBtn');
    const calculatePairStatsBtn = document.getElementById('calculatePairStatsBtn');
    const selectAllTokensBtn = document.getElementById('selectAllTokensBtn');
    const unselectAllTokensBtn = document.getElementById('unselectAllTokensBtn');
    const selectAllPairsBtn = document.getElementById('selectAllPairsBtn');
    const unselectAllPairsBtn = document.getElementById('unselectAllPairsBtn');
    const walletSelector = document.getElementById('walletSelector');
    const tokenStatsBtn = document.getElementById('tokenStatsBtn');
    const pairStatsBtn = document.getElementById('pairStatsBtn');
    const tokenStatsSection = document.getElementById('tokenStatsSection');
    const pairStatsSection = document.getElementById('pairStatsSection');
    
    // API请求速率限制 - BscScan限制为每秒5个请求
    const apiRateLimiter = {
        queue: [],
        maxRequestsPerSecond: 4, // 留一点余量，设为4
        processing: false,
        
        // 添加请求到队列
        addRequest(requestFn) {
            return new Promise((resolve, reject) => {
                this.queue.push({
                    requestFn,
                    resolve,
                    reject
                });
                
                if (!this.processing) {
                    this.processQueue();
                }
            });
        },
        
        // 处理队列
        async processQueue() {
            if (this.queue.length === 0) {
                this.processing = false;
                return;
            }
            
            this.processing = true;
            
            // 处理一批请求（最多maxRequestsPerSecond个）
            const batch = this.queue.splice(0, this.maxRequestsPerSecond);
            const batchPromises = [];
            
            for (const request of batch) {
                try {
                    const result = await request.requestFn();
                    request.resolve(result);
                } catch (error) {
                    request.reject(error);
                }
            }
            
            // 等待1秒后处理下一批
            setTimeout(() => {
                this.processQueue();
            }, 1000);
        }
    };
    
    // 用于保存所有找到的币种，用于筛选
    let allTokens = [];
    let allTradingPairs = []; // 保存所有交易对
    let currentResults = [];
    let walletAddresses = []; // 保存所有钱包地址
    let tokenFullNames = {}; // 保存代币全名映射
    
    // 中国时区偏移量 (UTC+8，单位：分钟)
    const CHINA_TIMEZONE_OFFSET = 8 * 60;
    
    /**
     * 将UTC日期转换为中国时区的日期 (UTC+8)
     * @param {Date} date - UTC日期对象
     * @returns {Date} 中国时区的日期对象
     */
    function convertToChineseTimezone(date) {
        // 创建一个新的日期对象，避免修改原始对象
        const chinaDate = new Date(date);
        // 获取本地时区偏移量（分钟）
        const localOffset = date.getTimezoneOffset();
        // 调整日期到中国时区 (UTC+8)
        chinaDate.setMinutes(chinaDate.getMinutes() + localOffset + CHINA_TIMEZONE_OFFSET);
        return chinaDate;
    }
    
    /**
     * 将中国时区的日期转换为UTC日期
     * @param {Date} chinaDate - 中国时区的日期对象
     * @returns {Date} UTC日期对象
     */
    function convertFromChineseTimezone(chinaDate) {
        // 创建一个新的日期对象，避免修改原始对象
        const utcDate = new Date(chinaDate);
        // 获取本地时区偏移量（分钟）
        const localOffset = chinaDate.getTimezoneOffset();
        // 调整日期到UTC时区
        utcDate.setMinutes(utcDate.getMinutes() - localOffset - CHINA_TIMEZONE_OFFSET);
        return utcDate;
    }
    
    /**
     * Format date and time for datetime-local input (YYYY-MM-DDThh:mm:ss)
     * @param {Date} date - Date object
     * @returns {string} Formatted datetime string
     */
    function formatDateTimeForInput(date) {
        // 转换为中国时区
        const chinaDate = convertToChineseTimezone(date);
        
        const year = chinaDate.getFullYear();
        const month = String(chinaDate.getMonth() + 1).padStart(2, '0');
        const day = String(chinaDate.getDate()).padStart(2, '0');
        const hours = String(chinaDate.getHours()).padStart(2, '0');
        const minutes = String(chinaDate.getMinutes()).padStart(2, '0');
        const seconds = String(chinaDate.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    }

    // 设置默认时间范围
    const now = new Date();
    let startDate = new Date(now);
    
    // 获取当前中国时区时间
    const chinaTime = convertToChineseTimezone(now);
    const currentHour = chinaTime.getHours();
    
    // 判断当前时间是否在8:00之后
    if (currentHour >= 8) {
        // 如果当前时间是8:00之后，选择今天早上8:00到现在
        startDate.setHours(8, 0, 0, 0);
    } else {
        // 如果当前时间是8:00之前，选择前一天早上8:00到现在
        startDate.setDate(startDate.getDate() - 1);
        startDate.setHours(8, 0, 0, 0);
    }
    
    // 计算默认的时间范围（过去24小时）
    const endDate = new Date(now);
    
    // Format dates for datetime-local inputs (YYYY-MM-DDThh:mm:ss)
    startDateTimeInput.value = formatDateTimeForInput(startDate);
    endDateTimeInput.value = formatDateTimeForInput(endDate);
    
    // Set max datetime to now
    const maxDateTime = formatDateTimeForInput(now);
    startDateTimeInput.max = maxDateTime;
    endDateTimeInput.max = maxDateTime;

    // Check for stored API key
    const storedApiKey = localStorage.getItem('bscScanApiKey');
    if (storedApiKey) {
        bscScanApiKeyInput.value = storedApiKey;
    }

    // Event listeners
    analyzeButton.addEventListener('click', function() {
        // 显示模态弹窗
        showModal('提示', `
            <div class="modal-message">
                <i class="fas fa-spinner fa-spin"></i>
                <p>开始查询，请稍候...</p>
            </div>
        `);
        
        // 延迟执行分析以确保弹窗已显示
        setTimeout(() => {
            handleAnalyze();
        }, 100);
    });
    
    // 为"查看最新交易"按钮添加事件监听器
    latestButton.addEventListener('click', function() {
        // 更新结束时间为当前时间
        const now = new Date();
        endDateTimeInput.value = formatDateTimeForInput(now);
        
        // 显示模态弹窗
        showModal('提示', `
            <div class="modal-message">
                <i class="fas fa-spinner fa-spin"></i>
                <p>开始查询最新交易，请稍候...</p>
            </div>
        `);
        
        // 延迟执行分析以确保弹窗已显示
        setTimeout(() => {
            handleAnalyze();
        }, 100);
    });
    
    // Event listener to ensure start time is not after end time
    startDateTimeInput.addEventListener('change', () => {
        const startValue = startDateTimeInput.value;
        const endValue = endDateTimeInput.value;
        
        // 确保选择的日期不是未来时间
        if (startValue > maxDateTime) {
            startDateTimeInput.value = maxDateTime;
            showError('开始时间不能超过当前时间');
            return;
        }
        
        if (startValue > endValue) {
            endDateTimeInput.value = startValue;
        }
        hideError();
    });
    
    // Event listener to ensure end time is not before start time
    endDateTimeInput.addEventListener('change', () => {
        const startValue = startDateTimeInput.value;
        const endValue = endDateTimeInput.value;
        
        // 确保选择的日期不是未来时间
        if (endValue > maxDateTime) {
            endDateTimeInput.value = maxDateTime;
            showError('结束时间不能超过当前时间');
            return;
        }
        
        if (endValue < startValue) {
            startDateTimeInput.value = endValue;
        }
        hideError();
    });
    
    // Hide error when inputs change
    bscScanApiKeyInput.addEventListener('input', hideError);
    walletAddressesTextarea.addEventListener('input', hideError);
    
    // 更新UI，隐藏代币地址输入框
    if (tokenAddressesTextarea && tokenAddressesTextarea.parentNode) {
        const tokenCard = tokenAddressesTextarea.closest('.card');
        if (tokenCard) {
            tokenCard.style.display = 'none';
        }
    }
    
    // 更新钱包地址标签
    const walletLabel = document.querySelector('label[for="walletAddresses"]');
    if (walletLabel) {
        walletLabel.textContent = '钱包地址 (每行一个)';
    }
    
    // 更新分析按钮文本
    if (analyzeButton) {
        analyzeButton.innerHTML = `<i class="fas fa-search"></i> <span data-translate="analyzeWallet">${languageManager.getText('analyzeWallet')}</span>`;
    }
    
    // 创建币种筛选区域
    const formContainer = document.querySelector('.form-container');
    if (formContainer) {
        const filterDiv = document.createElement('div');
        filterDiv.id = 'tokenFilters';
        filterDiv.className = 'token-filters hidden';
        filterDiv.innerHTML = `
            <div class="filters-header">
                <h3>筛选交易</h3>
            </div>
            <div class="filter-groups">
                <div class="filter-group">
                    <div class="filter-title">${languageManager.getText('exchangeFilter')}</div>
                    <div id="fromTokens" class="token-checkboxes"></div>
                </div>
                <div class="filter-group">
                    <div class="filter-title">${languageManager.getText('exchangedFilter')}</div>
                    <div id="toTokens" class="token-checkboxes"></div>
                </div>
            </div>
            <div class="filter-actions">
                <button id="applyFilters" class="btn btn-primary">应用筛选</button>
                <button id="clearFilters" class="btn btn-secondary">清除筛选</button>
            </div>
        `;
        formContainer.appendChild(filterDiv);
        
        // 添加筛选事件监听器
        document.getElementById('applyFilters').addEventListener('click', applyTokenFilters);
        document.getElementById('clearFilters').addEventListener('click', clearTokenFilters);
    }
    
    /**
     * 更新代币筛选界面
     * @param {Array} tokens - 代币列表
     */
    function updateTokenFilters(tokens) {
        const fromTokensContainer = document.getElementById('fromTokens');
        const toTokensContainer = document.getElementById('toTokens');
        
        if (!fromTokensContainer || !toTokensContainer) return;
        
        // 清空现有选项
        fromTokensContainer.innerHTML = '';
        toTokensContainer.innerHTML = '';
        
        // 添加所有币种选项
        tokens.forEach(token => {
            // 添加到"兑换币种"
            const fromCheckbox = document.createElement('div');
            fromCheckbox.className = 'token-checkbox';
            fromCheckbox.innerHTML = `
                <input type="checkbox" id="from-${token}" name="from-token" value="${token}">
                <label for="from-${token}">${token}</label>
            `;
            fromTokensContainer.appendChild(fromCheckbox);
            
            // 添加到"被兑换币种"
            const toCheckbox = document.createElement('div');
            toCheckbox.className = 'token-checkbox';
            toCheckbox.innerHTML = `
                <input type="checkbox" id="to-${token}" name="to-token" value="${token}">
                <label for="to-${token}">${token}</label>
            `;
            toTokensContainer.appendChild(toCheckbox);
        });
        
        // 显示筛选区域
        document.getElementById('tokenFilters').classList.remove('hidden');
    }
    
    /**
     * 应用全局代币筛选
     */
    function applyTokenFilters() {
        const fromTokens = Array.from(document.querySelectorAll('input[name="from-token"]:checked')).map(cb => cb.value);
        const toTokens = Array.from(document.querySelectorAll('input[name="to-token"]:checked')).map(cb => cb.value);
        
        // 应用筛选
        if (currentResults.length > 0) {
            // 如果没有选择任何筛选条件，显示所有结果
            if (fromTokens.length === 0 && toTokens.length === 0) {
                displayResults(currentResults);
                return;
            }
            
            // 为每个钱包创建筛选后的交易组
            const filteredResults = currentResults.map(result => {
                // 复制原始结果结构
                const filteredResult = {...result};
                
                // 获取原始交易详情HTML中的所有交易元素
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = result.transactionDetailsHtml;
                const txItems = tempDiv.querySelectorAll('.tx-item');
                
                // 筛选交易元素
                const filteredTxItems = Array.from(txItems).filter(item => {
                    const txData = item.dataset;
                    
                    // 检查是否满足筛选条件
                    if (txData.txType === 'swap') {
                        const fromMatch = fromTokens.length === 0 || fromTokens.includes(txData.fromToken);
                        const toMatch = toTokens.length === 0 || toTokens.includes(txData.toToken);
                        return fromMatch && toMatch;
                    }
                    
                    // 非兑换交易，如果没有筛选条件则显示
                    return fromTokens.length === 0 && toTokens.length === 0;
                });
                
                // 创建新的交易列表HTML
                if (filteredTxItems.length > 0) {
                    const listDiv = document.createElement('div');
                    listDiv.className = 'transaction-list';
                    filteredTxItems.forEach(item => listDiv.appendChild(item.cloneNode(true)));
                    
                    // 更新结果的交易详情HTML
                    filteredResult.transactionDetailsHtml = listDiv.outerHTML;
                } else {
                    filteredResult.transactionDetailsHtml = '<p class="no-transactions">没有符合筛选条件的交易记录</p>';
                }
                
                return filteredResult;
            });
            
            // 显示筛选后的结果
            displayResults(filteredResults, false);
        }
    }
    
    /**
     * 清除全局代币筛选
     */
    function clearTokenFilters() {
        // 取消选中所有复选框
        document.querySelectorAll('input[name="from-token"], input[name="to-token"]').forEach(cb => {
            cb.checked = false;
        });
        
        // 显示原始结果
        if (currentResults.length > 0) {
            displayResults(currentResults);
        }
    }
    
    // 移除代币示例部分
    const tokenExamplesContainer = document.querySelector('.token-examples');
    if (tokenExamplesContainer) {
        tokenExamplesContainer.style.display = 'none';
    }

    /**
     * Format date to YYYY-MM-DD
     * @param {Date} date - Date object
     * @returns {string} Formatted date string
     */
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    /**
     * Format datetime for display
     * @param {string} dateTimeString - ISO datetime string
     * @returns {string} Formatted datetime string for display
     */
    function formatDateTimeForDisplay(dateTimeString) {
        const date = new Date(dateTimeString);
        // 确保日期有效
        if (isNaN(date.getTime())) {
            return "日期格式无效";
        }
        
        // 转换为中国时区
        const chinaDate = convertToChineseTimezone(date);
        
        const year = chinaDate.getFullYear();
        const month = String(chinaDate.getMonth() + 1).padStart(2, '0');
        const day = String(chinaDate.getDate()).padStart(2, '0');
        const hours = String(chinaDate.getHours()).padStart(2, '0');
        const minutes = String(chinaDate.getMinutes()).padStart(2, '0');
        const seconds = String(chinaDate.getSeconds()).padStart(2, '0');
        
        // 返回易读的格式
        return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds} (UTC+8)`;
    }

    /**
     * Show error message in error container
     * @param {string} message - Error message to display
     */
    function showError(message) {
        errorMessage.textContent = message;
        errorContainer.classList.remove('hidden');
    }

    /**
     * Hide error container
     */
    function hideError() {
        errorContainer.classList.add('hidden');
    }

    /**
     * Validate wallet address format
     * @param {string} address - Wallet address to validate
     * @returns {boolean} True if valid, false otherwise
     */
    function isValidAddress(address) {
        return /^0x[a-fA-F0-9]{40}$/.test(address);
    }

    /**
     * Add token address to textarea if not already present
     * @param {string} address - Token contract address
     */
    function addTokenToTextarea(address) {
        const currentAddresses = tokenAddressesTextarea.value
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);
        
        if (!currentAddresses.includes(address)) {
            if (currentAddresses.length > 0 && currentAddresses[currentAddresses.length - 1] !== '') {
                tokenAddressesTextarea.value += '\n';
            }
            tokenAddressesTextarea.value += address;
        }
        
        hideError();
    }

    /**
     * Handle analyze button click
     */
    async function handleAnalyze() {
        // Hide any previous errors
        hideError();
        
        const apiKey = bscScanApiKeyInput.value.trim();
        if (!apiKey) {
            hideModal(); // 隐藏弹窗
            showError('请输入您的BscScan API密钥');
            bscScanApiKeyInput.focus();
            return;
        }

        // Save API key to localStorage
        localStorage.setItem('bscScanApiKey', apiKey);

        const walletAddresses = walletAddressesTextarea.value
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0 && !line.startsWith('#'));

        if (walletAddresses.length === 0) {
            hideModal(); // 隐藏弹窗
            showError('请输入至少一个钱包地址');
            walletAddressesTextarea.focus();
            return;
        }
        
        // Validate wallet addresses
        const invalidAddresses = walletAddresses.filter(addr => !isValidAddress(addr));
        if (invalidAddresses.length > 0) {
            hideModal(); // 隐藏弹窗
            showError(`以下钱包地址格式无效: ${invalidAddresses.join(', ')}`);
            walletAddressesTextarea.focus();
            return;
        }

        const tokenAddresses = tokenAddressesTextarea.value
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0 && !line.startsWith('#'));
            
        // Validate token addresses if any
        if (tokenAddresses.length > 0) {
            const invalidTokens = tokenAddresses.filter(addr => !isValidAddress(addr));
            if (invalidTokens.length > 0) {
                hideModal(); // 隐藏弹窗
                showError(`以下代币地址格式无效: ${invalidTokens.join(', ')}`);
                tokenAddressesTextarea.focus();
                return;
            }
        }

        const startDateTime = startDateTimeInput.value;
        const endDateTime = endDateTimeInput.value;

        if (!startDateTime || !endDateTime) {
            hideModal(); // 隐藏弹窗
            showError('请选择开始和结束时间');
            return;
        }

        // 确保输入的日期是有效的
        const startDate = new Date(startDateTime);
        const endDate = new Date(endDateTime);
        
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            hideModal(); // 隐藏弹窗
            showError('请输入有效的日期时间格式');
            return;
        }

        // 确保开始时间不晚于结束时间
        if (startDate > endDate) {
            hideModal(); // 隐藏弹窗
            showError('开始时间不能晚于结束时间');
            return;
        }

        // 获取当前时间（中国时区）
        const currentDateTime = new Date();
        const currentDateTimeChina = convertToChineseTimezone(currentDateTime);
        
        // 确保结束时间不是未来时间
        if (endDate > currentDateTimeChina) {
            hideModal(); // 隐藏弹窗
            showError('结束时间不能是未来时间');
            // 自动修正结束时间为当前时间
            endDateTimeInput.value = formatDateTimeForInput(currentDateTime);
            return;
        }
        
        // 检查时间范围是否太长（超过60天）
        const daysDiff = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
        if (daysDiff > 60) {
            hideModal(); // 隐藏弹窗
            showError('时间范围太长，请选择不超过60天的时间范围');
            return;
        }

        // Hide the modal as we're now showing the loading indicator
        hideModal();
        
        // Show loading indicator
        loadingIndicator.classList.remove('hidden');
        resultsContainer.innerHTML = '';

        // Clear previous statistics data
        if (tokenStatsResultContainer) {
            tokenStatsResultContainer.innerHTML = '';
        }
        if (tokenStatsSelectionContainer) {
            tokenStatsSelectionContainer.innerHTML = '';
        }
        if (pairStatsSelectionContainer) {
            pairStatsSelectionContainer.innerHTML = '';
        }

        // Reset token and pair selections
        allTokens = [];
        allTradingPairs = [];
        currentResults = [];
        tokenFullNames = {};

        try {
            // 显示提示信息
            resultsContainer.innerHTML = `
                <div class="progress-message">
                    <p>正在分析钱包，请耐心等待...</p>
                    <p class="small">注意：BscScan 免费API有速率限制（5次/秒），分析多个钱包可能需要一些时间</p>
                    <div class="progress-bar">
                        <div class="progress-bar-inner"></div>
                    </div>
                    <div class="progress-status">准备中...</div>
                </div>
            `;
            
            // 逐个分析钱包，而不是并行分析
            const results = [];
            const progressBar = document.querySelector('.progress-bar-inner');
            const progressStatus = document.querySelector('.progress-status');
            
            for (let i = 0; i < walletAddresses.length; i++) {
                const address = walletAddresses[i];
                progressStatus.textContent = `正在分析钱包 ${i + 1}/${walletAddresses.length}: ${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
                
                // 更新进度条
                const progress = (i / walletAddresses.length) * 100;
                progressBar.style.width = `${progress}%`;
                
                try {
                    const result = await analyzeWallet(apiKey, address, startDateTime, endDateTime);
                    results.push(result);
                } catch (error) {
                    // 记录错误但继续处理其他钱包
                    console.error(`钱包 ${address} 分析失败:`, error);
                    results.push({
                        walletAddress: address,
                        startDateTime,
                        endDateTime,
                        error: error.message,
                        statistics: { totalTransactions: 0, totalTokenTransfers: 0, tokenActivity: {} },
                        transactionDetailsHtml: `<p class="error-message">分析失败: ${error.message}</p>`
                    });
                }
                
                // 添加一点延迟，让UI有时间刷新
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            
            // 完成进度条
            progressBar.style.width = '100%';
            progressStatus.textContent = '分析完成!';
            
            // 再等一小段时间后显示结果
            setTimeout(() => {
                // Display results
                displayResults(results);
            }, 500);
        } catch (error) {
            console.error('Analysis error:', error);
            showError(error.message);
            resultsContainer.innerHTML = `
                <div class="error-message">
                    <p>分析钱包时出错: ${error.message}</p>
                </div>
            `;
        } finally {
            // Hide loading indicator
            loadingIndicator.classList.add('hidden');
        }
    }

    /**
     * Analyze a single wallet
     * @param {string} apiKey - BscScan API key
     * @param {string} walletAddress - Wallet address to analyze
     * @param {string} startDateTime - Start datetime (YYYY-MM-DDThh:mm:ss)
     * @param {string} endDateTime - End datetime (YYYY-MM-DDThh:mm:ss)
     * @returns {Promise<Object>} Analysis results
     */
    async function analyzeWallet(apiKey, walletAddress, startDateTime, endDateTime) {
        try {
            // 从中国时区转换回UTC，然后计算时间戳
            const utcStartDate = convertFromChineseTimezone(new Date(startDateTime));
            const utcEndDate = convertFromChineseTimezone(new Date(endDateTime));
            
            // Convert dates to timestamps (in seconds)
            const startTimestamp = Math.floor(utcStartDate.getTime() / 1000);
            
            // 为了避免"timestamp too far in the future"错误，我们使用当前时间作为上限
            const currentTimestamp = Math.floor(Date.now() / 1000);
            
            // 计算结束时间的时间戳，但确保不超过当前时间
            let endTimestamp = Math.floor(utcEndDate.getTime() / 1000);
            endTimestamp = Math.min(endTimestamp, currentTimestamp);

            // 添加更多日志以便调试时间转换问题
            console.log('输入时间 (中国时区):', startDateTime, '至', endDateTime);
            console.log('转换后UTC日期:', utcStartDate.toISOString(), '至', utcEndDate.toISOString());
            console.log('时间戳:', startTimestamp, '至', endTimestamp);
            console.log('当前时间戳:', currentTimestamp);
            console.log(`分析时间范围: ${new Date(startTimestamp * 1000).toISOString()} 至 ${new Date(endTimestamp * 1000).toISOString()}`);
            console.log(`中国时区时间: ${formatDateTimeForDisplay(startDateTime)} 至 ${formatDateTimeForDisplay(endDateTime)}`);
            
            // 确保时间戳不为负数或过大
            if (startTimestamp <= 0 || startTimestamp > currentTimestamp) {
                console.error('无效的开始时间戳:', startTimestamp);
                throw new Error('时间戳转换错误: 开始时间无效');
            }
            
            if (endTimestamp <= 0 || endTimestamp > currentTimestamp) {
                console.error('无效的结束时间戳:', endTimestamp);
                endTimestamp = currentTimestamp;
                console.warn('使用当前时间作为结束时间');
            }
            
            // Get block numbers for the timestamps
            const startBlock = await getBlockByTimestamp(apiKey, startTimestamp);
            const endBlock = await getBlockByTimestamp(apiKey, endTimestamp);

            console.log(`区块范围: ${startBlock} 至 ${endBlock}`);
            
            // 只获取代币转账数据，不再获取普通交易
            const tokenTransfers = await getTokenTransfers(apiKey, walletAddress, startBlock, endBlock);
            
            // 获取BNB价格（用于USDT换算）
            const bnbPrice = await getBnbPriceInUsdt();

            // 使用空数组替代交易数据
            const emptyTransactions = [];
            
            // Calculate statistics - 现在只依赖tokenTransfers数据
            const stats = calculateStats(walletAddress, emptyTransactions, tokenTransfers);
            
            // 生成交易详情HTML - 现在只基于tokenTransfers数据
            const transactionDetailsHtml = await generateTransactionDetails(
                walletAddress, 
                emptyTransactions, 
                tokenTransfers,
                bnbPrice
            );

            return {
                walletAddress,
                startDateTime,
                endDateTime,
                statistics: stats,
                transactionDetailsHtml: transactionDetailsHtml,
                bnbPrice: bnbPrice
            };
        } catch (error) {
            console.error(`Error analyzing wallet ${walletAddress}:`, error);
            throw new Error(`分析钱包 ${walletAddress} 失败: ${error.message}`);
        }
    }

    /**
     * Get block number by timestamp
     * @param {string} apiKey - BscScan API key
     * @param {number} timestamp - Timestamp in seconds
     * @returns {Promise<number>} Block number
     */
    async function getBlockByTimestamp(apiKey, timestamp) {
        // 确保时间戳不是未来的时间
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (timestamp > currentTimestamp) {
            console.warn(`时间戳 ${timestamp} 已超过当前时间 ${currentTimestamp}，使用当前时间替代`);
            timestamp = currentTimestamp;
        }
        
        // 添加时间戳检查日志，便于调试
        console.log(`请求区块时间戳: ${timestamp}, 对应时间: ${new Date(timestamp * 1000).toLocaleString()}`);
        
        const url = `https://api.bscscan.com/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=${apiKey}`;
        
        try {
            // 通过速率限制器发送请求
            const response = await apiRateLimiter.addRequest(() => fetch(url));
            
            // 检查网络响应
            if (!response.ok) {
                throw new Error(`网络错误 (${response.status}): ${response.statusText}`);
            }
            
            const data = await response.json();
            
            // 记录完整响应用于调试
            console.log(`BSCScan API响应:`, data);
            
            // 检查BscScan API响应
            if (data.status !== '1') {
                throw new Error(`BscScan API错误: ${data.message || '未知错误'} - ${data.result || ''}`);
            }
            
            return parseInt(data.result);
        } catch (error) {
            console.error("获取区块时出错:", error);
            throw error;
        }
    }

    /**
     * Get transactions for a wallet
     * @param {string} apiKey - BscScan API key
     * @param {string} address - Wallet address
     * @param {number} startBlock - Start block number
     * @param {number} endBlock - End block number
     * @returns {Promise<Array<Object>>} Transactions
     */
    async function getTransactions(apiKey, address, startBlock, endBlock) {
        const url = `https://api.bscscan.com/api?module=account&action=txlist&address=${address}&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=${apiKey}`;
        
        try {
            // 通过速率限制器发送请求
            const response = await apiRateLimiter.addRequest(() => fetch(url));
            
            // 检查网络响应
            if (!response.ok) {
                throw new Error(`网络错误 (${response.status}): ${response.statusText}`);
            }
            
            const data = await response.json();
            
            if (data.status === '0' && data.message === 'No transactions found') {
                return [];
            }
            
            if (data.status !== '1') {
                throw new Error(`BscScan API错误: ${data.message || '未知错误'}`);
            }
            
            // 确保只返回与指定钱包相关的交易（作为发送方或接收方）
            const addressLower = address.toLowerCase();
            return data.result.filter(tx => 
                tx.from.toLowerCase() === addressLower || 
                tx.to.toLowerCase() === addressLower
            ).map(tx => {
                // 添加交易类型识别
                if (tx.input && tx.input.startsWith('0x095ea7b3')) {
                    // 标记为授权交易
                    tx.isApproval = true;
                } else if (tx.input && tx.input.startsWith('0xa9059cbb')) {
                    // 标记为ERC20转账
                    tx.isERC20Transfer = true;
                } else if (tx.input && tx.input.startsWith('0x')) {
                    // 可能是合约交互
                    tx.isContractInteraction = true;
                }
                return tx;
            });
        } catch (error) {
            console.error("获取交易时出错:", error);
            throw error;
        }
    }

    /**
     * Get token transfers for a wallet
     * @param {string} apiKey - BscScan API key
     * @param {string} address - Wallet address
     * @param {number} startBlock - Start block number
     * @param {number} endBlock - End block number
     * @returns {Promise<Array<Object>>} Token transfers
     */
    async function getTokenTransfers(apiKey, address, startBlock, endBlock) {
        const url = `https://api.bscscan.com/api?module=account&action=tokentx&address=${address}&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=${apiKey}`;
        
        try {
            // 通过速率限制器发送请求
            const response = await apiRateLimiter.addRequest(() => fetch(url));
            
            // 检查网络响应
            if (!response.ok) {
                throw new Error(`网络错误 (${response.status}): ${response.statusText}`);
            }
            
            const data = await response.json();
            
            if (data.status === '0' && data.message === 'No transactions found') {
                return [];
            }
            
            if (data.status !== '1') {
                throw new Error(`BscScan API错误: ${data.message || '未知错误'}`);
            }
            
            // 确保只返回与指定钱包相关的代币转账（作为发送方或接收方）
            const addressLower = address.toLowerCase();
            return data.result.filter(transfer => 
                transfer.from.toLowerCase() === addressLower || 
                transfer.to.toLowerCase() === addressLower
            ).map(transfer => {
                // 确保所有字段都有定义
                return {
                    ...transfer,
                    tokenName: transfer.tokenName || 'Unknown',
                    tokenSymbol: transfer.tokenSymbol || 'Unknown',
                    tokenDecimal: transfer.tokenDecimal || '18',
                    // 计算USD值（如果是稳定币）
                    isStableCoin: ['USDT', 'USDC', 'BUSD', 'DAI'].includes(transfer.tokenSymbol),
                    transferType: transfer.from.toLowerCase() === addressLower ? 'out' : 'in'
                };
            });
        } catch (error) {
            console.error("获取代币交易时出错:", error);
            throw error;
        }
    }

    /**
     * Calculate transaction statistics
     * @param {string} walletAddress - Wallet address
     * @param {Array<Object>} transactions - Normal transactions
     * @param {Array<Object>} tokenTransfers - Token transfers
     * @returns {Object} Statistics
     */
    function calculateStats(walletAddress, transactions, tokenTransfers) {
        const stats = {
            totalTransactions: 0,
            totalTokenTransfers: tokenTransfers.length,
            bnbBought: 0,
            bnbSold: 0,
            tokenActivity: {},
            exchangeStats: {} // 代币兑换统计
        };
        
        // 添加调试信息
        console.log(`计算统计信息: 钱包=${walletAddress}, 代币转账数=${tokenTransfers.length}`);
        
        const walletAddressLower = walletAddress.toLowerCase();
        
        // 将交易按哈希分组，相同hash的数据视为一次交易
        const txGroups = {};
        
        // 处理所有代币转账
        tokenTransfers.forEach(transfer => {
            const transferHash = transfer.hash.toLowerCase();
            
            const tokenName = transfer.tokenName || 'Unknown';
            const tokenSymbol = transfer.tokenSymbol || 'UNKNOWN';
            const decimals = parseInt(transfer.tokenDecimal || 18);
            const value = parseFloat(transfer.value) / Math.pow(10, decimals);
            const fromAddress = transfer.from.toLowerCase();
            const toAddress = transfer.to.toLowerCase();
            
            // 添加到交易组
            if (!txGroups[transferHash]) {
                txGroups[transferHash] = [];
                // 每个不同的哈希值计为一次交易
                stats.totalTransactions++;
            }
            
            txGroups[transferHash].push({
                tokenSymbol,
                tokenName,
                decimals,
                value,
                fromAddress,
                toAddress,
                contractAddress: transfer.contractAddress,
                timestamp: parseInt(transfer.timeStamp)
            });
            
            // 记录代币活动
            const tokenKey = `${tokenSymbol} (${tokenName})`;
            
            if (!stats.tokenActivity[tokenKey]) {
                stats.tokenActivity[tokenKey] = {
                    contractAddress: transfer.contractAddress,
                    decimals: decimals,
                    bought: 0,
                    sold: 0,
                    usdtSpent: 0,
                    usdtReceived: 0
                };
            }
            
            // 根据转入转出方向更新代币活动统计
            if (fromAddress === walletAddressLower) {
                stats.tokenActivity[tokenKey].sold += value;
            }
            
            if (toAddress === walletAddressLower) {
                stats.tokenActivity[tokenKey].bought += value;
            }
        });
        
        console.log(`共处理 ${Object.keys(txGroups).length} 笔交易，包含 ${tokenTransfers.length} 个代币转账`);
        
        // 分析交易组，识别兑换交易
        Object.entries(txGroups).forEach(([hash, transfers]) => {
            if (transfers.length < 2) return; // 跳过非兑换交易（单币种转账不算兑换）
            
            // 找出钱包的输入和输出转账
            const outTransfers = transfers.filter(t => t.fromAddress === walletAddressLower);
            const inTransfers = transfers.filter(t => t.toAddress === walletAddressLower);
            
            console.log(`交易 ${hash} 分析: 转出=${outTransfers.length}, 转入=${inTransfers.length}`);
            
            // 同一个交易中，既有转入又有转出，才可能是兑换
            if (outTransfers.length > 0 && inTransfers.length > 0) {
                // 找出稳定币转账（USDT/USDC/BUSD/DAI）
                const stableCoins = ['USDT', 'USDC', 'BUSD', 'DAI'];
                const stableOutTransfers = outTransfers.filter(t => 
                    stableCoins.includes(t.tokenSymbol)
                );
                
                const stableInTransfers = inTransfers.filter(t => 
                    stableCoins.includes(t.tokenSymbol)
                );
                
                // 找出其他代币转账
                const tokenOutTransfers = outTransfers.filter(t => 
                    !stableCoins.includes(t.tokenSymbol) && t.tokenSymbol !== 'BNB'
                );
                
                const tokenInTransfers = inTransfers.filter(t => 
                    !stableCoins.includes(t.tokenSymbol) && t.tokenSymbol !== 'BNB'
                );
                
                console.log(`交易 ${hash} 转账明细: 稳定币转出=${stableOutTransfers.length}, 代币转入=${tokenInTransfers.length}, 代币转出=${tokenOutTransfers.length}, 稳定币转入=${stableInTransfers.length}`);
                
                // 稳定币兑换非稳定币 (买入代币)
                if (stableOutTransfers.length > 0 && tokenInTransfers.length > 0) {
                    stableOutTransfers.forEach(stableTransfer => {
                        tokenInTransfers.forEach(tokenTransfer => {
                            const key = `${stableTransfer.tokenSymbol}兑${tokenTransfer.tokenSymbol}`;
                            if (!stats.exchangeStats[key]) {
                                stats.exchangeStats[key] = 0;
                            }
                            stats.exchangeStats[key] += stableTransfer.value;
                            
                            console.log(`找到兑换: ${key}, 金额=${stableTransfer.value}`);
                            
                            // 同时更新该代币的USDT支出
                            const tokenKey = `${tokenTransfer.tokenSymbol} (${tokenTransfer.tokenName})`;
                            if (stats.tokenActivity[tokenKey]) {
                                stats.tokenActivity[tokenKey].usdtSpent += stableTransfer.value;
                            }
                        });
                    });
                }
                
                // 非稳定币兑换稳定币 (卖出代币)
                if (tokenOutTransfers.length > 0 && stableInTransfers.length > 0) {
                    tokenOutTransfers.forEach(tokenTransfer => {
                        stableInTransfers.forEach(stableTransfer => {
                            const key = `${tokenTransfer.tokenSymbol}兑${stableTransfer.tokenSymbol}`;
                            if (!stats.exchangeStats[key]) {
                                stats.exchangeStats[key] = 0;
                            }
                            stats.exchangeStats[key] += stableTransfer.value;
                            
                            console.log(`找到兑换: ${key}, 金额=${stableTransfer.value}`);
                            
                            // 同时更新该代币的USDT收入
                            const tokenKey = `${tokenTransfer.tokenSymbol} (${tokenTransfer.tokenName})`;
                            if (stats.tokenActivity[tokenKey]) {
                                stats.tokenActivity[tokenKey].usdtReceived += stableTransfer.value;
                            }
                        });
                    });
                }
            }
        });
        
        console.log('兑换统计结果:', stats.exchangeStats);
        
        return stats;
    }

    /**
     * Display analysis results
     * @param {Array<Object>} results - Analysis results for all wallets
     * @param {boolean} updateTokenList - 是否更新币种列表，默认为true
     */
    function displayResults(results, updateTokenList = true) {
        if (results.length === 0) {
            resultsContainer.innerHTML = '<p class="initial-message">未找到结果</p>';
            // 隐藏代币统计卡片
            if (tokenStatsCard) {
                tokenStatsCard.style.display = 'none';
            }
            return;
        }
        
        // 保存当前结果以供筛选使用
        if (updateTokenList) {
            currentResults = results;
            
            // 收集所有币种和钱包地址用于筛选
            allTokens = [];
            walletAddresses = [];
            tokenFullNames = {}; // 重置代币全名映射
            
            results.forEach(result => {
                // 收集钱包地址
                if (!walletAddresses.includes(result.walletAddress)) {
                    walletAddresses.push(result.walletAddress);
                }
                
                // 收集代币和全名
                Object.keys(result.statistics.tokenActivity).forEach(tokenKey => {
                    const parts = tokenKey.split(' ');
                    const token = parts[0]; // 获取代币符号
                    
                    if (!allTokens.includes(token) && token !== '未知') {
                        allTokens.push(token);
                        
                        // 保存代币全名 - 提取括号里的名称
                        if (parts.length > 1) {
                            const fullNameMatch = tokenKey.match(/\((.*?)\)/);
                            if (fullNameMatch && fullNameMatch[1]) {
                                tokenFullNames[token] = fullNameMatch[1];
                            } else {
                                tokenFullNames[token] = token; // 如果没有括号，使用符号作为全名
                            }
                        } else {
                            tokenFullNames[token] = token;
                        }
                    }
                });
            });
            
            // 更新钱包选择器
            if (walletSelector) {
                // 保存当前选择
                const currentValue = walletSelector.value;
                
                // 清空选择器（保留"all"选项）
                while (walletSelector.options.length > 1) {
                    walletSelector.remove(1);
                }
                
                // 添加每个钱包地址
                walletAddresses.forEach(address => {
                    const option = document.createElement('option');
                    option.value = address;
                    option.textContent = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
                    walletSelector.appendChild(option);
                });
                
                // 恢复选择（如果可能）
                if ([...walletSelector.options].some(opt => opt.value === currentValue)) {
                    walletSelector.value = currentValue;
                }
            }
            
            // 收集所有交易对
            allTradingPairs = extractTradingPairsFromTransactions();
            
            // 更新过滤界面
            updateTokenFilters(allTokens);
            
            // 更新代币和交易对选择
            updateTokenAndPairSelections();
            
            // 显示统计卡片
            if (tokenStatsCard) {
                tokenStatsCard.style.display = 'block';
            }
        }
        
        // 创建标签页导航和内容
        let tabNav = '<div class="wallet-tabs-nav">';
        let tabContent = '<div class="wallet-tabs-content">';
        
        results.forEach((result, index) => {
            const stats = result.statistics;
            const isActive = index === 0 ? 'active' : '';
            
            // 格式化钱包地址显示 (简短版)
            const shortWalletAddress = `${result.walletAddress.substring(0, 6)}...${result.walletAddress.substring(result.walletAddress.length - 4)}`;
            
            // 标签页导航项
            tabNav += `
                <div class="wallet-tab ${isActive}" data-tab="${index}">
                    ${shortWalletAddress}
                </div>
            `;
            
            // 格式化日期时间显示
            const startTimeDisplay = formatDateTimeForDisplay(result.startDateTime);
            const endTimeDisplay = formatDateTimeForDisplay(result.endDateTime);
            
            // 代币统计已被移除
            
            // 标签页内容
            tabContent += `
                <div class="wallet-tab-pane ${isActive}" data-tab-pane="${index}">
                    <div class="wallet-details">
                        <div class="wallet-header">
                            <h3 class="wallet-address">${result.walletAddress}</h3>
                            <div class="time-range">
                                ${startTimeDisplay} 至 ${endTimeDisplay}
                            </div>
                        </div>
                        
                        <div class="stats-summary">
                            <div class="stat-card">
                                <div class="stat-value">${stats.totalTransactions + stats.totalTokenTransfers}</div>
                                <div class="stat-label">总交易</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-value">${Object.keys(stats.tokenActivity).length}</div>
                                <div class="stat-label">代币种类</div>
                            </div>
                        </div>
                    
                        <!-- 交易历史记录 -->
                        <div class="transactions-container">
                            <div class="transactions-header">
                                <h3 class="section-title">交易历史记录</h3>
                            </div>
                            <div class="transactions-scrollable">
                                ${result.transactionDetailsHtml}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        tabNav += '</div>';
        tabContent += '</div>';
        
        // 组合成完整的标签页布局
        let html = `
            <div class="wallet-tabs-container">
                ${tabNav}
                ${tabContent}
            </div>
        `;
        
        // 添加全局样式
        html += `
        <style>
            .wallet-tabs-container {
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                margin-bottom: 30px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border: 1px solid #e0e0e0;
                display: flex;
                flex-direction: column;
            }
            
            .wallet-tabs-nav {
                display: flex;
                background-color: #f1f3f5;
                border-bottom: 1px solid #e0e0e0;
                overflow-x: auto;
                scrollbar-width: thin;
            }
            
            .wallet-tabs-nav::-webkit-scrollbar {
                height: 4px;
            }
            
            .wallet-tabs-nav::-webkit-scrollbar-track {
                background: #f1f1f1;
            }
            
            .wallet-tabs-nav::-webkit-scrollbar-thumb {
                background: #c1c1c1;
                border-radius: 4px;
            }
            
            .wallet-tab {
                padding: 15px 20px;
                font-size: 14px;
                font-weight: 500;
                color: #666;
                cursor: pointer;
                white-space: nowrap;
                border-bottom: 3px solid transparent;
                transition: all 0.2s ease;
            }
            
            .wallet-tab:hover {
                background-color: #e9ecef;
                color: #333;
            }
            
            .wallet-tab.active {
                border-bottom-color: #2196f3;
                color: #2196f3;
                background-color: #e8f4fd;
            }
            
            .wallet-tabs-content {
                flex-grow: 1;
            }
            
            .wallet-tab-pane {
                display: none;
            }
            
            .wallet-tab-pane.active {
                display: block;
            }
            
            .wallet-details {
                width: 100%;
                box-sizing: border-box;
            }
            
            .wallet-header {
                padding: 20px;
                background-color: #f8f9fa;
                border-bottom: 1px solid #e0e0e0;
                position: relative;
            }
            
            .wallet-address {
                font-size: 16px;
                margin: 0 0 8px 0;
                font-weight: 500;
                word-break: break-all;
                color: #333;
            }
            
            .time-range {
                font-size: 13px;
                color: #666;
            }
            
            .stats-summary {
                display: flex;
                padding: 15px;
                background-color: #f1f3f5;
                border-bottom: 1px solid #e0e0e0;
            }
            
            .stat-card {
                flex: 1;
                text-align: center;
                padding: 10px;
            }
            
            .stat-value {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 4px;
                color: #2196f3;
            }
            
            .stat-label {
                font-size: 13px;
                color: #666;
            }
            
            .section-title {
                padding: 15px 20px;
                margin: 0;
                font-size: 16px;
                font-weight: 500;
                color: #333;
                background-color: #f8f9fa;
                border-bottom: 1px solid #e0e0e0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .initial-message {
                padding: 40px;
                text-align: center;
                color: #666;
                background-color: #f8f9fa;
                border-radius: 8px;
                margin-top: 20px;
                border: 1px solid #e0e0e0;
            }
            
            /* 进度显示样式 */
            .progress-message {
                padding: 25px;
                background-color: #f1f7ff;
                border-radius: 8px;
                margin: 20px 0;
                border: 1px solid #c9e2ff;
                text-align: center;
            }
            
            .progress-message p {
                margin: 0 0 15px 0;
                color: #333;
            }
            
            .progress-message .small {
                font-size: 13px;
                color: #666;
                margin-bottom: 20px;
            }
            
            .progress-bar {
                height: 10px;
                background-color: #e0e0e0;
                border-radius: 5px;
                overflow: hidden;
                margin-bottom: 10px;
            }
            
            .progress-bar-inner {
                height: 100%;
                background-color: #2196f3;
                width: 0%;
                transition: width 0.3s ease;
            }
            
            .progress-status {
                font-size: 14px;
                color: #555;
                font-style: italic;
            }
            
            .transactions-container {
                display: flex;
                flex-direction: column;
            }
            
            .transactions-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 20px;
                background-color: #f8f9fa;
                border-bottom: 1px solid #e0e0e0;
            }
            
            .transactions-header h3 {
                margin: 0;
                font-size: 16px;
                font-weight: 500;
            }
            
            .transaction-filters {
                display: flex;
                align-items: center;
            }
            
            .token-filter-select {
                padding: 6px 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                background-color: white;
                font-size: 14px;
                color: #555;
                cursor: pointer;
            }
            
            .transactions-scrollable {
                max-height: 600px; /* 增加高度 */
                overflow-y: auto;
                border-top: none;
                background-color: white;
            }
            
            .error-message {
                padding: 20px;
                background-color: rgba(244, 67, 54, 0.1);
                color: #f44336;
                border-radius: 8px;
                margin-top: 20px;
                border: 1px solid rgba(244, 67, 54, 0.3);
            }
            
            .no-transactions {
                padding: 20px;
                text-align: center;
                color: #666;
                background-color: #f8f9fa;
            }
            
            .no-stats {
                color: #888;
                text-align: center;
                padding: 15px 0;
                font-style: italic;
            }
            
            /* 自定义滚动条样式 */
            .transactions-scrollable::-webkit-scrollbar {
                width: 8px;
            }
            
            .transactions-scrollable::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 4px;
            }
            
            .transactions-scrollable::-webkit-scrollbar-thumb {
                background: #c1c1c1;
                border-radius: 4px;
            }
            
            .transactions-scrollable::-webkit-scrollbar-thumb:hover {
                background: #a8a8a8;
            }
            
            /* 隐藏特定代币的交易 */
            .tx-filtered {
                display: none !important;
            }
        </style>
        `;
        
        resultsContainer.innerHTML = html;
        
        // 为标签页添加切换事件
        document.querySelectorAll('.wallet-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const tabIndex = this.getAttribute('data-tab');
                
                // 移除所有活动标签和内容
                document.querySelectorAll('.wallet-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.wallet-tab-pane').forEach(p => p.classList.remove('active'));
                
                // 激活当前选中的标签和内容
                this.classList.add('active');
                document.querySelector(`.wallet-tab-pane[data-tab-pane="${tabIndex}"]`).classList.add('active');
            });
        });
        
        // 为每个交易项添加点击事件，显示详情
        document.querySelectorAll('.tx-item').forEach(item => {
            item.addEventListener('click', function() {
                const hash = this.getAttribute('data-hash');
                window.open(`https://bscscan.com/tx/${hash}`, '_blank');
            });
        });
        
        // 添加代币筛选功能
        document.querySelectorAll('.token-filter-select').forEach(select => {
            select.addEventListener('change', function() {
                const selectedToken = this.value;
                const tabPane = this.closest('.wallet-tab-pane');
                const transactionItems = tabPane.querySelectorAll('.tx-item');
                
                transactionItems.forEach(item => {
                    // 移除之前的过滤效果
                    item.classList.remove('tx-filtered');
                    
                    // 获取交易涉及的代币
                    const fromToken = item.getAttribute('data-from-token');
                    const toToken = item.getAttribute('data-to-token');
                    const allTokens = item.getAttribute('data-tokens') ? item.getAttribute('data-tokens').split(',') : [];
                    
                    // 如果选择了特定代币，只显示相关交易
                    if (selectedToken !== 'all') {
                        // 检查是否在任何相关代币中包含所选代币
                        if (!allTokens.includes(selectedToken) && fromToken !== selectedToken && toToken !== selectedToken) {
                            item.classList.add('tx-filtered');
                        }
                    }
                });
            });
        });
    }

    // 代币统计相关函数已移除

    /**
     * 获取USDT价格（简化版，实际项目中应该使用更准确的价格数据源）
     * @returns {Promise<number>} BNB的USDT价格
     */
    async function getBnbPriceInUsdt() {
        // 使用默认价格作为备选
        const defaultBnbPrice = 350;
        
        try {
            // 添加超时处理，避免长时间等待
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000); // 5秒超时
            
            // 尝试从多个API获取价格
            try {
                // 尝试第一个API来源：Binance API
                const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT', {
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                
                if (response.ok) {
                    const data = await response.json();
                    return parseFloat(data.price);
                }
                throw new Error('Binance API 响应错误');
            } catch (err) {
                console.warn('Binance API 调用失败，尝试备选API:', err);
                
                // 尝试备选API：CoinGecko（不需要API Key的公共API）
                const geckoResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd', {
                    headers: { 'Accept': 'application/json' }
                });
                
                if (geckoResponse.ok) {
                    const geckoData = await geckoResponse.json();
                    if (geckoData.binancecoin && geckoData.binancecoin.usd) {
                        console.log('使用CoinGecko API 获取BNB价格:', geckoData.binancecoin.usd);
                        return geckoData.binancecoin.usd;
                    }
                }
                
                throw new Error('所有API来源都失败');
            }
        } catch (error) {
            console.error('获取BNB价格失败:', error);
            
            // 如果所有API都失败，返回一个合理的默认值
            console.log('使用默认BNB价格:', defaultBnbPrice);
            return defaultBnbPrice;
        }
    }

    const tokenPriceCache = new Map();

    async function getTokenPriceInUsdt(tokenAddress) {
        if (tokenPriceCache.has(tokenAddress)) {
            return tokenPriceCache.get(tokenAddress);
        }

        // 默认价格
        const defaultPrice = 0;

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000); // 5秒超时
            
            const url = `https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=${tokenAddress}&vs_currencies=usd`;
            
            const response = await fetch(url, {
                signal: controller.signal,
                headers: { 'Accept': 'application/json' }
            });
            clearTimeout(timeoutId);

            if (response.ok) {
                const data = await response.json();
                if (data[tokenAddress.toLowerCase()] && data[tokenAddress.toLowerCase()].usd) {
                    const price = data[tokenAddress.toLowerCase()].usd;
                    tokenPriceCache.set(tokenAddress, price);
                    return price;
                }
            }
            
            throw new Error(`无法从CoinGecko获取 ${tokenAddress} 的价格`);

        } catch (error) {
            console.error(`获取 ${tokenAddress} 价格失败:`, error);
            tokenPriceCache.set(tokenAddress, defaultPrice); // 缓存失败结果，避免重试
            return defaultPrice;
        }
    }

    /**
     * 显示交易详情
     * @param {string} walletAddress - 钱包地址
     * @param {Array} transactions - 交易数组 (不再使用)
     * @param {Array} tokenTransfers - 代币转账数组
     * @param {number} bnbPrice - BNB价格（USDT）
     * @returns {string} HTML字符串
     */
    async function generateTransactionDetails(walletAddress, transactions, tokenTransfers, bnbPrice) {
        const walletAddressLower = walletAddress.toLowerCase();
        
        // 使用哈希值作为键来合并相关交易
        const txGroups = {};
        
        // 只处理代币转账
        tokenTransfers.forEach(transfer => {
            // 确认该代币转账与指定钱包相关
            if (transfer.from.toLowerCase() !== walletAddressLower && transfer.to.toLowerCase() !== walletAddressLower) {
                return; // 跳过不相关的代币转账
            }
            
            const decimals = parseInt(transfer.tokenDecimal);
            const amount = parseFloat(transfer.value) / Math.pow(10, decimals);
            
            let type = '';
            let valueDisplay = '';
            let direction = '';
            // USDT价值部分 - 对于USDT代币本身，直接使用其金额
            let usdtValue = 0;
            
            if (transfer.from.toLowerCase() === walletAddressLower) {
                type = `${transfer.tokenSymbol}转出`;
                direction = 'out';
                valueDisplay = `<span class="tx-out">-${amount.toFixed(4)} ${transfer.tokenSymbol}</span>`;
                
                // 如果是USDT或类似稳定币
                if (['USDT', 'BUSD', 'USDC', 'DAI'].includes(transfer.tokenSymbol)) {
                    usdtValue = amount;
                    valueDisplay += `<span class="tx-out usdt-value">≈ -${usdtValue.toFixed(2)} USDT</span>`;
                }
            } else {
                type = `${transfer.tokenSymbol}转入`;
                direction = 'in';
                valueDisplay = `<span class="tx-in">+${amount.toFixed(4)} ${transfer.tokenSymbol}</span>`;
                
                // 如果是USDT或类似稳定币
                if (['USDT', 'BUSD', 'USDC', 'DAI'].includes(transfer.tokenSymbol)) {
                    usdtValue = amount;
                    valueDisplay += `<span class="tx-in usdt-value">≈ +${usdtValue.toFixed(2)} USDT</span>`;
                }
            }
            
            // 创建或更新交易组
            if (!txGroups[transfer.hash]) {
                txGroups[transfer.hash] = {
                    timestamp: parseInt(transfer.timeStamp),
                    date: new Date(parseInt(transfer.timeStamp) * 1000),
                    hash: transfer.hash,
                    status: 'success',
                    activities: [],
                    tokens: new Set() // 用于追踪这个交易涉及的所有代币
                };
            }
            
            // 添加代币到交易组的代币集合
            txGroups[transfer.hash].tokens.add(transfer.tokenSymbol);
            
            // 添加代币交易
            txGroups[transfer.hash].activities.push({
                type: type,
                token: transfer.tokenSymbol,
                amount: amount,
                valueDisplay: valueDisplay,
                contract: transfer.contractAddress,
                from: transfer.from,
                to: transfer.to,
                direction: direction,
                tokenName: transfer.tokenName || transfer.tokenSymbol
            });
        });
        
        // 转换哈希组为数组并按时间排序（从新到旧）
        const sortedTxGroups = Object.values(txGroups).sort((a, b) => b.timestamp - a.timestamp);
        
        // 生成HTML
        if (sortedTxGroups.length === 0) {
            return '<p class="no-transactions">该时间段内无交易记录</p>';
        }
        
        let html = '<div class="transaction-list">';
        
        // 为每个交易组生成HTML
        for (const txGroup of sortedTxGroups) {
            // 检查该交易组是否包含至少一个与钱包相关的活动
            const hasRelevantActivity = txGroup.activities.some(activity => 
                activity.from.toLowerCase() === walletAddressLower || 
                activity.to.toLowerCase() === walletAddressLower
            );
            
            if (!hasRelevantActivity) {
                continue; // 跳过不相关的交易组
            }
            
            const timestamp = new Date(txGroup.timestamp * 1000);
            // 转换为中国时区
            const chinaDate = convertToChineseTimezone(timestamp);
            
            // 格式化中国时区的日期和时间（增加秒级显示）
            const dateStr = `${chinaDate.getFullYear()}-${String(chinaDate.getMonth() + 1).padStart(2, '0')}-${String(chinaDate.getDate()).padStart(2, '0')}`;
            const timeStr = `${String(chinaDate.getHours()).padStart(2, '0')}:${String(chinaDate.getMinutes()).padStart(2, '0')}:${String(chinaDate.getSeconds()).padStart(2, '0')}`;
            
            // 确定交易类型和方向
            let txType = '交易';
            let txDirection = '';
            let mainValue = '';
            let secondaryValue = '';
            let mainToken = '';
            let fromToken = '';
            let toToken = '';
            let tokenPairDisplay = '';
            
            let expenditureUsdtValueHtml = '';
            const walletOutActivitiesForValue = txGroup.activities.filter(a => a.from.toLowerCase() === walletAddressLower);
            if (walletOutActivitiesForValue.length > 0) {
                // 对于兑换，支出是其中一个代币；对于发送，支出就是那个代币
                const outActivity = walletOutActivitiesForValue[0];
                const expenditureTokenAddress = outActivity.contract;
                const expenditureAmount = outActivity.amount;

                if (expenditureTokenAddress) {
                    const price = await getTokenPriceInUsdt(expenditureTokenAddress);
                    if (price > 0) {
                        const usdtValue = expenditureAmount * price;
                        expenditureUsdtValueHtml = `<div class="tx-expenditure-value" style="color: red; font-size: 12px;">${languageManager.getText('expenditureValue')}: ≈ ${usdtValue.toFixed(2)} USDT</div>`;
                    }
                }
            }

            // 检查是否是交易所风格的交易类型
            if (txGroup.activities.length === 1) {
                // 单一活动，直接使用其方向和值
                const activity = txGroup.activities[0];
                txDirection = activity.direction;
                mainToken = activity.token;
                
                if (activity.direction === 'in') {
                    txType = '接收';
                    mainValue = `+${activity.amount.toFixed(4)} ${activity.token}`;
                    toToken = activity.token;
                } else {
                    txType = '发送';
                    mainValue = `-${activity.amount.toFixed(4)} ${activity.token}`;
                    fromToken = activity.token;
                }
                
                // 如果是稳定币，不需要二级显示
                if (!['USDT', 'BUSD', 'USDC', 'DAI'].includes(activity.token) && activity.token !== 'BNB') {
                    secondaryValue = activity.tokenName || '';
                } else if (activity.token === 'BNB') {
                    // 对于BNB，显示USDT价值
                    const usdtValue = activity.amount * bnbPrice;
                    secondaryValue = `≈ ${activity.direction === 'in' ? '+' : '-'}${usdtValue.toFixed(2)} USDT`;
                }
            } else if (txGroup.activities.length > 1) {
                // 过滤出与当前钱包相关的活动
                const relevantActivities = txGroup.activities.filter(activity => 
                    activity.from.toLowerCase() === walletAddressLower || 
                    activity.to.toLowerCase() === walletAddressLower
                );
                
                // 划分出当前钱包的输入和输出活动
                const walletInActivities = relevantActivities.filter(a => a.to.toLowerCase() === walletAddressLower);
                const walletOutActivities = relevantActivities.filter(a => a.from.toLowerCase() === walletAddressLower);
                
                // 多活动，检查是否是兑换
                const usdtOutActivity = walletOutActivities.find(a => 
                    (a.token === 'USDT' || a.token === 'BUSD' || a.token === 'USDC' || a.token === 'DAI')
                );
                
                const otherTokenInActivity = walletInActivities.find(a => 
                    !(['USDT', 'BUSD', 'USDC', 'DAI'].includes(a.token))
                );
                
                if (usdtOutActivity && otherTokenInActivity) {
                    txType = '兑换';
                    txDirection = 'swap';
                    fromToken = usdtOutActivity.token;
                    toToken = otherTokenInActivity.token;
                    mainToken = otherTokenInActivity.token;
                    mainValue = `${usdtOutActivity.token} → ${otherTokenInActivity.token}`;
                    secondaryValue = `-${usdtOutActivity.amount.toFixed(2)} ${usdtOutActivity.token} / +${otherTokenInActivity.amount.toFixed(4)} ${otherTokenInActivity.token}`;
                    
                    // 改进代币对显示
                    tokenPairDisplay = `
                        <div class="token-pair" data-from-contract="${usdtOutActivity.contract}" data-to-contract="${otherTokenInActivity.contract}">
                            <div class="token-exchange">
                                <span class="token-out">-${usdtOutActivity.amount.toFixed(2)} ${fromToken}</span>
                                <span class="exchange-arrow"><i class="fas fa-arrow-right"></i></span>
                                <span class="token-in">+${otherTokenInActivity.amount.toFixed(4)} ${toToken}</span>
                            </div>
                        </div>
                    `;
                } else {
                    const tokenOutActivity = walletOutActivities.find(a => 
                        !(['USDT', 'BUSD', 'USDC', 'DAI', 'BNB'].includes(a.token))
                    );
                    
                    const usdtInActivity = walletInActivities.find(a => 
                        (a.token === 'USDT' || a.token === 'BUSD' || a.token === 'USDC' || a.token === 'DAI')
                    );
                    
                    if (tokenOutActivity && usdtInActivity) {
                        txType = '兑换';
                        txDirection = 'swap';
                        fromToken = tokenOutActivity.token;
                        toToken = usdtInActivity.token;
                        mainToken = tokenOutActivity.token;
                        mainValue = `${tokenOutActivity.token} → ${usdtInActivity.token}`;
                        secondaryValue = `-${tokenOutActivity.amount.toFixed(4)} ${tokenOutActivity.token} / +${usdtInActivity.amount.toFixed(2)} ${usdtInActivity.token}`;
                        
                        // 改进代币对显示
                        tokenPairDisplay = `
                            <div class="token-pair" data-from-contract="${tokenOutActivity.contract}" data-to-contract="${usdtInActivity.contract}">
                                <div class="token-exchange">
                                    <span class="token-out">-${tokenOutActivity.amount.toFixed(4)} ${fromToken}</span>
                                    <span class="exchange-arrow"><i class="fas fa-arrow-right"></i></span>
                                    <span class="token-in">+${usdtInActivity.amount.toFixed(2)} ${toToken}</span>
                                </div>
                            </div>
                        `;
                    } else {
                        // 尝试检测其他类型的兑换，如代币到代币
                        if (walletInActivities.length > 0 && walletOutActivities.length > 0) {
                            // 有输入和输出，可能是代币兑换
                            const inActivity = walletInActivities[0];
                            const outActivity = walletOutActivities[0];
                            
                            // 如果输入和输出是不同的代币，则认为是兑换
                            if (inActivity.token !== outActivity.token) {
                                txType = '兑换';
                                txDirection = 'swap';
                                fromToken = outActivity.token;
                                toToken = inActivity.token;
                                mainToken = inActivity.token; // 以收到的代币为主
                                
                                // 显示主要信息
                                mainValue = `${outActivity.token} → ${inActivity.token}`;
                                secondaryValue = ``;
                                
                                // 改进代币对显示
                                tokenPairDisplay = `
                                    <div class="token-pair" data-from-contract="${outActivity.contract}" data-to-contract="${inActivity.contract}">
                                        <div class="token-exchange">
                                            <span class="token-out">-${outActivity.amount.toFixed(4)} ${fromToken}</span>
                                            <span class="exchange-arrow"><i class="fas fa-arrow-right"></i></span>
                                            <span class="token-in">+${inActivity.amount.toFixed(4)} ${toToken}</span>
                                        </div>
                                    </div>
                                `;
                            } else {
                                // 普通交易处理逻辑 - 如下所示
                                txType = '交易';
                                
                                if (walletInActivities.length > walletOutActivities.length) {
                                    txDirection = 'in';
                                    if (walletInActivities.length > 0) {
                                        const mainActivity = walletInActivities[0];
                                        mainToken = mainActivity.token;
                                        toToken = mainActivity.token;
                                        mainValue = `+${mainActivity.amount.toFixed(4)} ${mainActivity.token}`;
                                        if (walletInActivities.length > 1) {
                                            secondaryValue = `+${walletInActivities.length - 1} 个其他代币`;
                                        }
                                    }
                                } else {
                                    txDirection = 'out';
                                    if (walletOutActivities.length > 0) {
                                        const mainActivity = walletOutActivities[0];
                                        mainToken = mainActivity.token;
                                        fromToken = mainActivity.token;
                                        mainValue = `-${mainActivity.amount.toFixed(4)} ${mainActivity.token}`;
                                        if (walletOutActivities.length > 1) {
                                            secondaryValue = `-${walletOutActivities.length - 1} 个其他代币`;
                                        }
                                    }
                                }
                            }
                        } else {
                            // 普通交易处理逻辑
                            txType = '交易';
                            
                            if (walletInActivities.length > walletOutActivities.length) {
                                txDirection = 'in';
                                if (walletInActivities.length > 0) {
                                    const mainActivity = walletInActivities[0];
                                    mainToken = mainActivity.token;
                                    toToken = mainActivity.token;
                                    mainValue = `+${mainActivity.amount.toFixed(4)} ${mainActivity.token}`;
                                    if (walletInActivities.length > 1) {
                                        secondaryValue = `+${walletInActivities.length - 1} 个其他代币`;
                                    }
                                }
                            } else {
                                txDirection = 'out';
                                if (walletOutActivities.length > 0) {
                                    const mainActivity = walletOutActivities[0];
                                    mainToken = mainActivity.token;
                                    fromToken = mainActivity.token;
                                    mainValue = `-${mainActivity.amount.toFixed(4)} ${mainActivity.token}`;
                                    if (walletOutActivities.length > 1) {
                                        secondaryValue = `-${walletOutActivities.length - 1} 个其他代币`;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
            // 确保fromToken和toToken有值，用于筛选
            if (!fromToken && txGroup.tokens.size > 0) {
                fromToken = Array.from(txGroup.tokens)[0];
            }
            if (!toToken && txGroup.tokens.size > 0) {
                toToken = Array.from(txGroup.tokens)[0];
            }
            
            // 获取来源/目标信息
            let source = '';
            if (txDirection === 'in') {
                const activity = txGroup.activities.find(a => a.to.toLowerCase() === walletAddressLower);
                if (activity) {
                    const fromAddress = activity.from;
                    source = `从: ${fromAddress.substring(0, 6)}...${fromAddress.substring(fromAddress.length - 4)}`;
                }
            } else if (txDirection === 'out') {
                const activity = txGroup.activities.find(a => a.from.toLowerCase() === walletAddressLower);
                if (activity) {
                    const toAddress = activity.to;
                    source = `到: ${toAddress.substring(0, 6)}...${toAddress.substring(toAddress.length - 4)}`;
                }
            } else if (txDirection === 'swap') {
                source = '通过: DEX';
            }
            
            // 为不同类型的交易添加图标
            let iconClass = 'tx-icon';
            if (txType === '接收') iconClass += ' receive-icon';
            else if (txType === '发送') iconClass += ' send-icon'; 
            else if (txType === '兑换') iconClass += ' swap-icon';
            else iconClass += ' tx-default-icon';
            
            // 添加代币图标类
            let tokenIconClass = 'token-icon';
            if (mainToken === 'BNB') tokenIconClass += ' bnb-icon';
            else if (['USDT', 'BUSD', 'USDC', 'DAI'].includes(mainToken)) tokenIconClass += ' stablecoin-icon';
            else tokenIconClass += ' token-default-icon';
            
            // 短哈希显示
            const shortHash = `${txGroup.hash.substring(0, 6)}...${txGroup.hash.substring(txGroup.hash.length - 4)}`;
            
            // 添加数据属性用于筛选
            const dataAttributes = `
                data-hash="${txGroup.hash}"
                data-tx-type="${txType}"
                data-from-token="${fromToken || ''}"
                data-to-token="${toToken || ''}"
                data-tokens="${Array.from(txGroup.tokens).join(',')}"
            `;
            
            // 生成交易记录项
            html += `
                <div class="tx-item ${txDirection}" ${dataAttributes}>
                    <div class="tx-icon-container">
                        <div class="${iconClass}"></div>
                        <div class="${tokenIconClass}">${mainToken.charAt(0)}</div>
                    </div>
                    <div class="tx-content">
                        <div class="tx-header">
                            <div class="tx-type">${txType}</div>
                            <div class="tx-time">${dateStr} ${timeStr}</div>
                        </div>
                        ${tokenPairDisplay}
                        <div class="tx-details">
                            <div class="tx-value">${mainValue}</div>
                            <div class="tx-source">${source}</div>
                        </div>
                        ${secondaryValue ? `<div class="tx-secondary">${secondaryValue}</div>` : ''}
                        ${expenditureUsdtValueHtml}
                        <div class="tx-hash">Hash: <a href="https://bscscan.com/tx/${txGroup.hash}" target="_blank">${shortHash}</a></div>
                        ${txGroup.status === 'failed' ? '<div class="tx-failed-badge">失败</div>' : ''}
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        
        // 添加交易列表样式
        html += `
        <style>
            .transaction-list {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                margin-top: 0;
            }
            
            .tx-item {
                display: flex;
                padding: 16px;
                border-bottom: 1px solid #e0e0e0;
                position: relative;
                align-items: center;
                cursor: pointer;
                transition: background-color 0.2s;
            }
            
            .tx-item:hover {
                background-color: #f5f5f5;
            }
            
            .tx-item:last-child {
                border-bottom: none;
            }
            
            .tx-icon-container {
                position: relative;
                width: 42px;
                height: 42px;
                margin-right: 12px;
                flex-shrink: 0;
            }
            
            .tx-icon {
                width: 42px;
                height: 42px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #f1f3f5;
            }
            
            .receive-icon {
                background-color: rgba(3, 184, 125, 0.15);
                color: #03b87d;
                position: relative;
            }
            
            .receive-icon:before {
                content: "↓";
                font-size: 20px;
                font-weight: bold;
                color: #03b87d;
            }
            
            .send-icon {
                background-color: rgba(242, 65, 65, 0.15);
                color: #f24141;
                position: relative;
            }
            
            .send-icon:before {
                content: "↑";
                font-size: 20px;
                font-weight: bold;
                color: #f24141;
            }
            
            .swap-icon {
                background-color: rgba(240, 185, 11, 0.15);
                color: #f0b90b;
                position: relative;
            }
            
            .swap-icon:before {
                content: "⇄";
                font-size: 20px;
                font-weight: bold;
                color: #f0b90b;
            }
            
            .token-icon {
                position: absolute;
                bottom: -2px;
                right: -2px;
                width: 22px;
                height: 22px;
                border-radius: 50%;
                background-color: #f0b90b;
                color: #000;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                font-weight: bold;
                border: 2px solid #ffffff;
            }
            
            .bnb-icon {
                background-color: #f0b90b;
            }
            
            .stablecoin-icon {
                background-color: #26a17b;
            }
            
            .token-default-icon {
                background-color: #1e88e5;
            }
            
            .tx-content {
                flex: 1;
            }
            
            .tx-header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 4px;
            }
            
            .tx-type {
                font-weight: 500;
                font-size: 16px;
                color: #333;
            }
            
            .tx-time {
                font-size: 12px;
                color: #888;
            }
            
            .tx-details {
                display: flex;
                justify-content: space-between;
                margin-bottom: 2px;
            }
            
            .tx-value {
                font-weight: 500;
                font-size: 15px;
            }
            
            .tx-source {
                font-size: 13px;
                color: #888;
            }
            
            .tx-secondary {
                font-size: 13px;
                color: #666;
                margin-bottom: 2px;
            }
            
            .tx-hash {
                font-size: 12px;
                color: #888;
            }
            
            .tx-hash a {
                color: #2196f3;
                text-decoration: none;
            }
            
            .tx-hash a:hover {
                text-decoration: underline;
            }
            
            .tx-failed-badge {
                position: absolute;
                top: 12px;
                right: 12px;
                background-color: rgba(242, 65, 65, 0.1);
                color: #f24141;
                padding: 2px 8px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 500;
            }
            
            .in .tx-value {
                color: #03b87d;
            }
            
            .out .tx-value {
                color: #f24141;
            }
            
            .swap .tx-value {
                color: #f0b90b;
            }
            
            .no-transactions {
                padding: 20px;
                text-align: center;
                color: #666;
                background-color: #f8f9fa;
            }
            
            /* 改进的代币兑换显示样式 */
            .token-pair {
                background-color: rgba(240, 185, 11, 0.08);
                border-radius: 6px;
                padding: 10px 12px;
                margin: 6px 0 10px 0;
            }
            
            .token-exchange {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-wrap: wrap;
                gap: 8px;
            }
            
            .token-out {
                color: #f24141;
                font-weight: 500;
                font-size: 14px;
                background-color: rgba(242, 65, 65, 0.08);
                padding: 4px 10px;
                border-radius: 4px;
            }
            
            .token-in {
                color: #03b87d;
                font-weight: 500;
                font-size: 14px;
                background-color: rgba(3, 184, 125, 0.08);
                padding: 4px 10px;
                border-radius: 4px;
            }
            
            .exchange-arrow {
                color: #888;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .exchange-arrow i {
                font-size: 14px;
            }
        </style>
        `;
        
        return html;
    }

    // Add event listeners for the new token stats buttons
    if (calculateTokenStatsBtn) {
        calculateTokenStatsBtn.addEventListener('click', calculateSelectedTokenStats);
    }
    
    if (selectAllTokensBtn) {
        selectAllTokensBtn.addEventListener('click', selectAllTokens);
    }
    
    if (unselectAllTokensBtn) {
        unselectAllTokensBtn.addEventListener('click', unselectAllTokens);
    }
    
    // Add event listeners for the pair stats buttons
    if (calculatePairStatsBtn) {
        calculatePairStatsBtn.addEventListener('click', calculateSelectedPairStats);
    }
    
    if (selectAllPairsBtn) {
        selectAllPairsBtn.addEventListener('click', selectAllPairs);
    }
    
    if (unselectAllPairsBtn) {
        unselectAllPairsBtn.addEventListener('click', unselectAllPairs);
    }
    
    // Add event listeners for statistics type toggle
    if (tokenStatsBtn) {
        tokenStatsBtn.addEventListener('click', () => {
            tokenStatsBtn.classList.add('stats-type-active');
            pairStatsBtn.classList.remove('stats-type-active');
            tokenStatsSection.style.display = 'block';
            pairStatsSection.style.display = 'none';
        });
    }
    
    if (pairStatsBtn) {
        pairStatsBtn.addEventListener('click', () => {
            pairStatsBtn.classList.add('stats-type-active');
            tokenStatsBtn.classList.remove('stats-type-active');
            pairStatsSection.style.display = 'block';
            tokenStatsSection.style.display = 'none';
        });
    }
    
    // 设置默认显示交易对统计
    if (pairStatsBtn && tokenStatsBtn && pairStatsSection && tokenStatsSection) {
        pairStatsBtn.classList.add('stats-type-active');
        tokenStatsBtn.classList.remove('stats-type-active');
        pairStatsSection.style.display = 'block';
        tokenStatsSection.style.display = 'none';
    }
    
    // Add event listener for wallet selection change
    if (walletSelector) {
        walletSelector.addEventListener('change', () => {
            // 根据选择的钱包更新代币和交易对选择
            updateTokenAndPairSelections();
        });
    }
    
    /**
     * 更新代币和交易对选择列表
     */
    function updateTokenAndPairSelections() {
        const selectedWallet = walletSelector.value;
        
        // 更新代币选择
        populateTokenStatsSelection(getTokensForWallet(selectedWallet));
        
        // 更新交易对选择
        populatePairStatsSelection(getPairsForWallet(selectedWallet));
    }
    
    /**
     * 获取特定钱包的代币列表
     * @param {string} walletAddress - 钱包地址，'all'表示所有钱包
     * @returns {Array} 代币列表
     */
    function getTokensForWallet(walletAddress) {
        if (!currentResults || currentResults.length === 0) {
            return [];
        }
        
        if (walletAddress === 'all') {
            return allTokens;
        }
        
        // 获取指定钱包的代币
        const walletResult = currentResults.find(result => result.walletAddress === walletAddress);
        if (!walletResult) return [];
        
        const tokens = [];
        Object.keys(walletResult.statistics.tokenActivity).forEach(tokenKey => {
            const token = tokenKey.split(' ')[0]; // 获取代币符号
            if (!tokens.includes(token) && token !== '未知') {
                tokens.push(token);
            }
        });
        
        return tokens;
    }
    
    /**
     * 获取特定钱包的交易对列表
     * @param {string} walletAddress - 钱包地址，'all'表示所有钱包
     * @returns {Array} 交易对列表
     */
    function getPairsForWallet(walletAddress) {
        if (!currentResults || currentResults.length === 0) {
            return [];
        }
        
        if (walletAddress === 'all') {
            return allTradingPairs;
        }
        
        // 获取指定钱包的交易对
        const walletResult = currentResults.find(result => result.walletAddress === walletAddress);
        if (!walletResult) return [];
        
        // 从交易记录中提取交易对
        const pairs = extractTradingPairsFromTransactions(walletResult.walletAddress);
        return pairs;
    }
    
    /**
     * 从交易记录中提取交易对
     * @param {string} walletAddress - 钱包地址，null表示所有钱包
     * @returns {Array} 交易对列表
     */
    function extractTradingPairsFromTransactions(walletAddress = null) {
        const pairs = new Set();
        
        // 过滤需要处理的钱包结果
        const resultsToProcess = walletAddress ? 
            currentResults.filter(r => r.walletAddress === walletAddress) : 
            currentResults;
        
        resultsToProcess.forEach(result => {
            // 从HTML中提取交易对数据
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = result.transactionDetailsHtml;
            
            // 查找所有交易项
            const txItems = tempDiv.querySelectorAll('.tx-item');
            
            txItems.forEach(item => {
                // 只处理交易类型为"兑换"的项目
                if (item.getAttribute('data-tx-type') === '兑换') {
                    // 直接从交易元素中获取代币信息
                    const tokenExchangeDiv = item.querySelector('.token-exchange');
                    if (tokenExchangeDiv) {
                        // 提取从代币和到代币
                        const fromTokenSpan = tokenExchangeDiv.querySelector('.token-out');
                        const toTokenSpan = tokenExchangeDiv.querySelector('.token-in');
                        
                        if (fromTokenSpan && toTokenSpan) {
                            let fromToken = '';
                            let toToken = '';
                            
                            // 提取代币符号 - 改进正则表达式以支持带连字符的代币名称
                            const fromText = fromTokenSpan.textContent.trim();
                            // 匹配连字符代币名称，如BSC-USD
                            const fromMatch = fromText.match(/-[\d.]+\s+([A-Za-z0-9-]+)/);
                            if (fromMatch && fromMatch[1]) {
                                fromToken = fromMatch[1];
                            }
                            
                            const toText = toTokenSpan.textContent.trim();
                            // 匹配连字符代币名称，如BSC-USD
                            const toMatch = toText.match(/\+[\d.]+\s+([A-Za-z0-9-]+)/);
                            if (toMatch && toMatch[1]) {
                                toToken = toMatch[1];
                            }
                            
                            // 如果成功提取了代币符号，添加到交易对集合，格式为 "fromToken兑toToken"
                            if (fromToken && toToken) {
                                // 使用"兑"连接代币名称，体现交易关系
                                const pairKey = `${fromToken}兑${toToken}`;
                                pairs.add(pairKey);
                                
                                // 保存代币全名 (如果还未保存)
                                if (!tokenFullNames[fromToken]) {
                                    tokenFullNames[fromToken] = fromToken;
                                }
                                if (!tokenFullNames[toToken]) {
                                    tokenFullNames[toToken] = toToken;
                                }
                            }
                        }
                    } else {
                        // 向后兼容：如果找不到token-exchange元素，使用data属性
                        const fromToken = item.getAttribute('data-from-token');
                        const toToken = item.getAttribute('data-to-token');
                        
                        if (fromToken && toToken) {
                            // 使用"兑"连接代币名称
                            const pairKey = `${fromToken}兑${toToken}`;
                            pairs.add(pairKey);
                        }
                    }
                }
            });
        });
        
        return Array.from(pairs);
    }
    
    /**
     * 显示代币统计选择区域
     * @param {Array} tokens - 代币列表
     */
    function populateTokenStatsSelection(tokens) {
        if (!tokenStatsSelectionContainer) return;
        
        // 清空现有选项
        tokenStatsSelectionContainer.innerHTML = '';
        
        // 如果没有代币，显示提示信息
        if (!tokens || tokens.length === 0) {
            tokenStatsSelectionContainer.innerHTML = '<p class="no-stats">未找到代币数据</p>';
            return;
        }
        
        // 按字母顺序排序代币
        const sortedTokens = [...tokens].sort();
        
        // 为每个代币创建一个复选框
        sortedTokens.forEach(token => {
            const checkbox = document.createElement('div');
            checkbox.className = 'token-checkbox';
            
            // 获取代币全名
            const fullName = tokenFullNames[token] || token;
            const displayName = fullName !== token ? `${token} (${fullName})` : token;
            
            checkbox.innerHTML = `
                <input type="checkbox" id="stats-${token}" name="stats-token" value="${token}">
                <label for="stats-${token}" title="${displayName}">${displayName}</label>
            `;
            tokenStatsSelectionContainer.appendChild(checkbox);
        });
    }
    
    /**
     * 显示交易对统计选择区域
     * @param {Array} pairs - 交易对列表
     */
    function populatePairStatsSelection(pairs) {
        if (!pairStatsSelectionContainer) return;
        
        // 清空现有选项
        pairStatsSelectionContainer.innerHTML = '';
        
        // 如果没有交易对，显示提示信息
        if (!pairs || pairs.length === 0) {
            pairStatsSelectionContainer.innerHTML = '<p class="no-stats">未找到交易对数据</p>';
            return;
        }
        
        // 添加说明文字
        const instructionText = document.createElement('div');
        instructionText.className = 'selection-instruction';
        instructionText.innerHTML = `
            <p>${languageManager.getText('selectPairsPrompt')}</p>
        `;
        pairStatsSelectionContainer.appendChild(instructionText);
        
        // 按字母顺序排序交易对
        const sortedPairs = [...pairs].sort();
        
        // 创建交易对选择容器
        const pairsContainer = document.createElement('div');
        pairsContainer.className = 'pairs-container';
        
        // 为每个交易对创建一个复选框
        sortedPairs.forEach(pair => {
            // 使用"兑"分割交易对
            const [fromToken, toToken] = pair.split('兑');
            
            // 获取代币信息但不显示括号内容
            const fromDisplay = fromToken;
            const toDisplay = toToken;
            
            const checkbox = document.createElement('div');
            checkbox.className = 'token-checkbox pair-checkbox';
            checkbox.innerHTML = `
                <input type="checkbox" id="pair-${pair}" name="stats-pair" value="${pair}">
                <label for="pair-${pair}" title="${pair}">
                    <span class="token-from">${fromDisplay}</span>
                    <span class="token-arrow">兑</span>
                    <span class="token-to">${toDisplay}</span>
                </label>
            `;
            pairsContainer.appendChild(checkbox);
        });
        
        // BEGIN: Default selection logic
        const allPairCheckboxes = pairsContainer.querySelectorAll('input[name="stats-pair"]');
        const stableCoinsList = ['USDT', 'USDC', 'BUSD', 'DAI']; // Define locally for this function's scope

        allPairCheckboxes.forEach(checkbox => {
            const pairValue = checkbox.value; // e.g., "TOKENA兑TOKENB"
            const [fromToken, toToken] = pairValue.split('兑');

            let autoCheck = false;

            // Condition 1: BSC-USD 兑 X (where X is not USDC)
            if (fromToken === 'BSC-USD' && toToken !== 'USDC') {
                autoCheck = true;
            }
            // Condition 2: USDC 兑 Y (where Y is not BSC-USD and Y is non-stable)
            // This is checked only if Condition 1 was false.
            else if (fromToken === 'USDC' && toToken !== 'BSC-USD' && !stableCoinsList.includes(toToken)) {
                autoCheck = true;
            }

            if (autoCheck) {
                checkbox.checked = true;
            }
        });
        // END: Default selection logic
        
        pairStatsSelectionContainer.appendChild(pairsContainer);

        // BEGIN: Automatically trigger calculation if default pairs were selected
        const selectedByDefault = Array.from(allPairCheckboxes).some(cb => cb.checked);
        if (selectedByDefault) {
            // Ensure the stats result container exists before trying to update it
            if (tokenStatsResultContainer) {
                 // Display a brief loading message before calculation
                tokenStatsResultContainer.innerHTML = '<div class="loading-stats"><div class="mini-spinner"></div><p>正在加载默认统计...</p></div>';
                // Use a short timeout to allow the UI to update with the loading message
                setTimeout(() => {
                    calculateSelectedPairStats();
                }, 50); // 50ms delay
            } else {
                console.warn('tokenStatsResultContainer not found, cannot auto-trigger calculation.');
            }
        }
        // END: Automatically trigger calculation
    }
    
    /**
     * 选择所有代币
     */
    function selectAllTokens() {
        document.querySelectorAll('input[name="stats-token"]').forEach(checkbox => {
            checkbox.checked = true;
        });
    }
    
    /**
     * 取消选择所有代币
     */
    function unselectAllTokens() {
        document.querySelectorAll('input[name="stats-token"]').forEach(checkbox => {
            checkbox.checked = false;
        });
    }
    
    /**
     * 选择所有交易对
     */
    function selectAllPairs() {
        document.querySelectorAll('input[name="stats-pair"]').forEach(checkbox => {
            checkbox.checked = true;
        });
    }
    
    /**
     * 取消选择所有交易对
     */
    function unselectAllPairs() {
        document.querySelectorAll('input[name="stats-pair"]').forEach(checkbox => {
            checkbox.checked = false;
        });
    }
    
    /**
     * 计算所选代币的统计信息
     */
    function calculateSelectedTokenStats() {
        // 获取选中的代币
        const selectedTokens = Array.from(document.querySelectorAll('input[name="stats-token"]:checked')).map(cb => cb.value);
        
        if (selectedTokens.length === 0) {
            tokenStatsResultContainer.innerHTML = `<p class="no-stats">${languageManager.getText('selectAtLeastOneToken')}</p>`;
            return;
        }
        
        // 确保有分析结果
        if (!currentResults || currentResults.length === 0) {
            tokenStatsResultContainer.innerHTML = `<p class="no-stats">${languageManager.getText('analyzeWalletFirst')}</p>`;
            return;
        }
        
        // 获取选中的钱包
        const selectedWallet = walletSelector.value;
        
        // 统计所有选中代币的收入和支出
        const tokenStats = calculateTokenTransactionStats(currentResults, selectedTokens, selectedWallet);
        
        // 显示统计结果
        displayTokenStats(tokenStats, selectedWallet);
    }
    
    /**
     * 计算所选交易对的统计信息
     */
    async function calculateSelectedPairStats() {
        // 获取选中的交易对
        const selectedPairs = Array.from(document.querySelectorAll('input[name="stats-pair"]:checked')).map(cb => cb.value);
        
        if (selectedPairs.length === 0) {
            tokenStatsResultContainer.innerHTML = `<p class="no-stats">${languageManager.getText('selectAtLeastOnePair')}</p>`;
            return;
        }
        
        // 确保有分析结果
        if (!currentResults || currentResults.length === 0) {
            tokenStatsResultContainer.innerHTML = `<p class="no-stats">${languageManager.getText('analyzeWalletFirst')}</p>`;
            return;
        }
        
        // 获取选中的钱包
        const selectedWallet = walletSelector.value;
        
        // 显示加载提示
        tokenStatsResultContainer.innerHTML = `<div class="loading-stats"><div class="mini-spinner"></div><p>${languageManager.getText('calculatingPairStats')}</p></div>`;
        
        // 使用setTimeout延迟执行，让UI先更新
        setTimeout(() => {
            try {
                // 计算交易对统计
                const pairStats = calculatePairTransactionStats(currentResults, selectedPairs, selectedWallet);
                
                // 显示统计结果
                displayPairStats(pairStats, selectedWallet);
                
                // 添加提示信息
                const resultInfo = document.createElement('div');
                resultInfo.className = 'result-info';
                resultInfo.innerHTML = `
                    <p><i class="fas fa-info-circle"></i> 提示：点击交易对行可查看详细交易记录</p>
                `;
                tokenStatsResultContainer.appendChild(resultInfo);
            } catch (error) {
                console.error("计算交易对统计时出错:", error);
                tokenStatsResultContainer.innerHTML = `<p class="error-stats">${languageManager.getText('calculationError')}: ${error.message}</p>`;
            }
        }, 50);
    }
    
    /**
     * 计算代币交易统计信息
     * @param {Array} results - 分析结果
     * @param {Array} selectedTokens - 选中的代币
     * @param {string} walletAddress - 钱包地址，'all'表示所有钱包
     * @returns {Object} 代币统计信息
     */
    function calculateTokenTransactionStats(results, selectedTokens, walletAddress = 'all') {
        const stats = {};
        
        // 初始化所有选中代币的统计数据
        selectedTokens.forEach(token => {
            stats[token] = {
                totalReceived: 0,    // 总收入
                totalSent: 0,        // 总支出
                netChange: 0,        // 净变化
                inTransactions: 0,   // 收入交易数
                outTransactions: 0,  // 支出交易数
                usdtValue: 0         // USDT估值 (如果是稳定币)
            };
        });
        
        // 过滤需要处理的钱包结果
        const resultsToProcess = walletAddress !== 'all' ? 
            results.filter(r => r.walletAddress === walletAddress) : 
            results;
        
        // 汇总每个钱包的每个代币统计
        resultsToProcess.forEach(walletResult => {
            const tokenActivity = walletResult.statistics.tokenActivity;
            
            selectedTokens.forEach(token => {
                // 查找匹配的代币活动 (注意: 代币键名格式为 "SYMBOL (NAME)")
                Object.entries(tokenActivity).forEach(([tokenKey, activity]) => {
                    const tokenSymbol = tokenKey.split(' ')[0];
                    if (tokenSymbol === token) {
                        // 累加统计数据
                        stats[token].totalReceived += activity.bought;
                        stats[token].totalSent += activity.sold;
                        
                        // 更新交易计数
                        if (activity.bought > 0) stats[token].inTransactions++;
                        if (activity.sold > 0) stats[token].outTransactions++;
                        
                        // 如果是稳定币，记录USDT价值
                        if (['USDT', 'BUSD', 'USDC', 'DAI'].includes(token)) {
                            stats[token].usdtValue = activity.bought - activity.sold;
                        }
                    }
                });
            });
        });
        
        // 计算净变化
        selectedTokens.forEach(token => {
            stats[token].netChange = stats[token].totalReceived - stats[token].totalSent;
        });
        
        return stats;
    }
    
    /**
     * 计算交易对统计信息
     * @param {Array} results - 分析结果
     * @param {Array} selectedPairs - 选中的交易对
     * @param {string} walletAddress - 钱包地址，'all'表示所有钱包
     * @returns {Object} 交易对统计信息
     */
    function calculatePairTransactionStats(results, selectedPairs, walletAddress = 'all') {
        const stats = {};
        
        // 初始化所有选中交易对的统计数据
        selectedPairs.forEach(pair => {
            const [fromToken, toToken] = pair.split('兑');
            stats[pair] = {
                fromToken,
                toToken,
                totalTrades: 0,      // 总交易次数
                totalFromAmount: 0,  // 总支出量
                totalToAmount: 0,    // 总收入量
                transactions: []     // 交易记录
            };
        });
        
        // 过滤需要处理的钱包结果
        const resultsToProcess = walletAddress !== 'all' ? 
            results.filter(r => r.walletAddress === walletAddress) : 
            results;
        
        // 统计每个交易对的数据
        resultsToProcess.forEach(result => {
            // 从HTML中提取交易对数据
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = result.transactionDetailsHtml;
            
            // 查找所有交易项
            const txItems = tempDiv.querySelectorAll('.tx-item');
            
            txItems.forEach(item => {
                // 只处理交易类型为"兑换"的项目
                if (item.getAttribute('data-tx-type') === '兑换') {
                    const txHash = item.getAttribute('data-hash');
                    const txDate = item.querySelector('.tx-time').textContent;
                    
                    // 从交易元素中直接提取交易对信息
                    const tokenExchangeDiv = item.querySelector('.token-exchange');
                    const tokenPairDiv = item.querySelector('.token-pair');

                    if (tokenExchangeDiv) {
                        const fromTokenSpan = tokenExchangeDiv.querySelector('.token-out');
                        const toTokenSpan = tokenExchangeDiv.querySelector('.token-in');
                        
                        if (fromTokenSpan && toTokenSpan) {
                            let fromToken = '';
                            let toToken = '';
                            let fromAmount = 0;
                            let toAmount = 0;
                            let fromContract = tokenPairDiv ? tokenPairDiv.getAttribute('data-from-contract') : '';
                            let toContract = tokenPairDiv ? tokenPairDiv.getAttribute('data-to-contract') : '';
                            
                            // 提取从代币和金额
                            const fromText = fromTokenSpan.textContent.trim();
                            const fromMatch = fromText.match(/-(\d+(\.\d+)?)\s+([A-Za-z0-9-]+)/);
                            if (fromMatch) {
                                fromAmount = parseFloat(fromMatch[1]);
                                fromToken = fromMatch[3];
                            }
                            
                            // 提取到代币和金额
                            const toText = toTokenSpan.textContent.trim();
                            const toMatch = toText.match(/\+(\d+(\.\d+)?)\s+([A-Za-z0-9-]+)/);
                            if (toMatch) {
                                toAmount = parseFloat(toMatch[1]);
                                toToken = toMatch[3];
                            }
                            
                            // 构建交易对键名并检查是否在选定的交易对中
                            if (fromToken && toToken) {
                                const pairKey = `${fromToken}兑${toToken}`;
                                
                                if (selectedPairs.includes(pairKey)) {
                                    // 更新统计
                                    stats[pairKey].totalTrades++;
                                    stats[pairKey].totalFromAmount += fromAmount;
                                    stats[pairKey].totalToAmount += toAmount;
                                    
                                    // 保存交易记录
                                    stats[pairKey].transactions.push({
                                        hash: txHash,
                                        date: txDate,
                                        fromAmount,
                                        toAmount,
                                        fromContract,
                                        toContract,
                                        rate: toAmount / fromAmount,
                                        timestamp: parseInt(item.getAttribute('data-timestamp') || 0)
                                    });
                                }
                            }
                        }
                    } else {
                        // 向后兼容：如果找不到token-exchange元素，使用旧方法处理
                        const fromToken = item.getAttribute('data-from-token');
                        const toToken = item.getAttribute('data-to-token');
                        
                        if (fromToken && toToken) {
                            const pairKey = `${fromToken}兑${toToken}`;
                            
                            // 检查是否是所选交易对
                            if (selectedPairs.includes(pairKey)) {
                                // 提取交易金额 (旧方法)
                                let fromAmount = 0;
                                let toAmount = 0;
                                
                                // 尝试从其他元素提取金额
                                const valueDisplay = item.querySelector('.tx-value');
                                if (valueDisplay) {
                                    const valueText = valueDisplay.textContent;
                                    // 尝试匹配格式如 "USDT → BNB" 或类似的显示
                                    const amountMatches = valueText.match(/[-+]?[\d.]+/g);
                                    if (amountMatches && amountMatches.length >= 2) {
                                        fromAmount = Math.abs(parseFloat(amountMatches[0]));
                                        toAmount = Math.abs(parseFloat(amountMatches[1]));
                                    }
                                }
                                
                                // 只有当能够提取到金额时才更新统计
                                if (fromAmount > 0 && toAmount > 0) {
                                    // 更新统计
                                    stats[pairKey].totalTrades++;
                                    stats[pairKey].totalFromAmount += fromAmount;
                                    stats[pairKey].totalToAmount += toAmount;
                                    
                                    // 保存交易记录
                                    stats[pairKey].transactions.push({
                                        hash: txHash,
                                        date: txDate,
                                        fromAmount,
                                        toAmount,
                                        fromContract: '', // 旧方法无法获取
                                        toContract: '', // 旧方法无法获取
                                        rate: toAmount / fromAmount,
                                        timestamp: parseInt(item.getAttribute('data-timestamp') || 0)
                                    });
                                }
                            }
                        }
                    }
                }
            });
        });
        
        return stats;
    }
    
    /**
     * 显示代币统计结果
     * @param {Object} tokenStats - 代币统计信息
     * @param {string} walletAddress - 钱包地址，'all'表示所有钱包
     */
    function displayTokenStats(tokenStats, walletAddress = 'all') {
        // 计算总代币价值 (使用稳定币)
        let totalUsdtValue = 0;
        Object.values(tokenStats).forEach(stats => {
            if (stats.usdtValue) {
                totalUsdtValue += stats.usdtValue;
            }
        });
        
        // 生成标题
        const titleText = walletAddress !== 'all' ? 
            `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)} ${languageManager.getText('tokenTransactionStats')}` : 
            languageManager.getText('allWalletTokenStats');
        
        // 生成表格
        let html = `
            <h3>${titleText}</h3>
            <table class="token-stats-table">
                <thead>
                    <tr>
                        <th>${languageManager.getText('token')}</th>
                        <th>${languageManager.getText('income')}</th>
                        <th>${languageManager.getText('expense')}</th>
                        <th>${languageManager.getText('netChange')}</th>
                        <th>${languageManager.getText('transactionCount')}</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        // 按照净变化排序代币 (从大到小)
        const sortedTokens = Object.entries(tokenStats)
            .sort((a, b) => b[1].netChange - a[1].netChange);
        
        sortedTokens.forEach(([token, stats]) => {
            const netChangeClass = stats.netChange >= 0 ? 'token-stats-positive' : 'token-stats-negative';
            
            // 获取并显示代币全名
            const fullName = tokenFullNames[token] || token;
            const displayName = fullName !== token ? `${token} (${fullName})` : token;
            
            html += `
                <tr>
                    <td>${displayName}</td>
                    <td class="token-stats-income">+${stats.totalReceived.toFixed(4)}</td>
                    <td class="token-stats-expense">-${stats.totalSent.toFixed(4)}</td>
                    <td class="token-stats-balance ${netChangeClass}">${stats.netChange.toFixed(4)}</td>
                    <td>${stats.inTransactions + stats.outTransactions}</td>
                </tr>
            `;
        });
        
        html += `
                </tbody>
            </table>
        `;
        
        // 如果有稳定币，添加总价值摘要
        if (totalUsdtValue !== 0) {
            const totalValueClass = totalUsdtValue >= 0 ? 'token-stats-positive' : 'token-stats-negative';
            html += `
                <div class="token-stats-summary">
                    <p>总计价值（稳定币）: <span class="${totalValueClass}">${totalUsdtValue.toFixed(4)} USDT</span></p>
                </div>
            `;
        }
        
        tokenStatsResultContainer.innerHTML = html;
    }
    
    /**
     * 显示交易对统计结果
     * @param {Object} pairStats - 交易对统计信息
     * @param {string} walletAddress - 钱包地址，'all'表示所有钱包
     */
    async function displayPairStats(pairStats, walletAddress = 'all') {
        // 生成标题
        const titleText = walletAddress !== 'all' ? 
            `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)} ${languageManager.getText('pairTransactionStats')}` : 
            languageManager.getText('allWalletPairStats');
        
        // 创建控制按钮
        let html = `
            <h3>${titleText}</h3>
            <div class="pair-transactions-controls">
                <button class="btn-sort-date" data-sort="desc">${languageManager.getText('dateSort')} <i class="fas fa-sort-down"></i></button>
                <button class="btn-copy-expenses">${languageManager.getText('copyExpenseData')} <i class="fas fa-copy"></i></button>
                <button class="btn-copy-usdt-expenses">${languageManager.getText('copyUsdtExpenseData')} <i class="fas fa-copy"></i></button>
            </div>
        `;
        
        // 收集所有交易记录并平铺到一张表格中
        let allTransactions = [];
        const pairInfoMap = {}; // 用于存储每个交易的交易对信息
        
        // 按照交易次数排序 (从多到少)
        const sortedPairs = Object.entries(pairStats)
            .sort((a, b) => b[1].totalTrades - a[1].totalTrades);
        
        // 收集所有交易并添加交易对信息
        sortedPairs.forEach(([pair, stats]) => {
            const fromDisplay = stats.fromToken;
            const toDisplay = stats.toToken;
            
            stats.transactions.forEach(tx => {
                // 为每个交易添加交易对信息
                tx.pairDisplay = `
                    <span class="token-from">${fromDisplay}</span>
                    <span class="token-arrow">${languageManager.getText('exchange')}</span>
                    <span class="token-to">${toDisplay}</span>
                `;
                tx.fromToken = fromDisplay;
                tx.toToken = toDisplay;
                tx.pair = pair;
                
                allTransactions.push(tx);
                
                // 存储交易对信息以供后续使用
                pairInfoMap[tx.hash] = {
                    pair,
                    fromToken: fromDisplay,
                    toToken: toDisplay
                };
            });
        });
        
        // 按日期排序（从新到旧）
        allTransactions.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        
        // 生成平铺的交易表格
        html += `
            <table class="pair-transactions-table all-transactions-table" id="allTransactionsTable">
                <thead>
                    <tr>
                        <th>${languageManager.getText('tradingPair')}</th>
                        <th>${languageManager.getText('date')}</th>
                        <th>${languageManager.getText('expense')}</th>
                        <th>${languageManager.getText('expenseUsdt')}</th>
                        <th>${languageManager.getText('income')}</th>
                        <th>${languageManager.getText('price')}</th>
                        <th>${languageManager.getText('transactionHash')}</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        // 添加所有交易记录
        for (const tx of allTransactions) {
            const txRate = tx.fromAmount > 0 ? tx.toAmount / tx.fromAmount : 0;
            const shortHash = tx.hash ? 
                `${tx.hash.substring(0, 6)}...${tx.hash.substring(tx.hash.length - 4)}` : '';
            
            let usdtValueHtml = '<td class="token-stats-expense-usdt">-</td>';
            tx.usdtValue = 0; // 初始化usdtValue
            if (tx.fromContract) {
                const price = await getTokenPriceInUsdt(tx.fromContract);
                if (price > 0) {
                    const usdtValue = tx.fromAmount * price;
                    tx.usdtValue = usdtValue; // 存储USDT价值
                    usdtValueHtml = `<td class="token-stats-expense-usdt" style="color: #c93333;">${usdtValue.toFixed(4)}</td>`;
                }
            }

            // 为日期添加秒级显示
            const txDate = tx.date;
            // 如果日期中没有包含秒信息，尝试从timestamp中获取
            let displayDate = txDate;
            if (txDate && tx.timestamp) {
                // 尝试创建一个包含秒的日期字符串
                const dateObj = new Date(tx.timestamp * 1000);
                if (!isNaN(dateObj.getTime())) {
                    // 转换为中国时区
                    const chinaDate = convertToChineseTimezone(dateObj);
                    // 格式化中国时区的日期和时间（包含秒）
                    const dateStr = `${chinaDate.getFullYear()}-${String(chinaDate.getMonth() + 1).padStart(2, '0')}-${String(chinaDate.getDate()).padStart(2, '0')}`;
                    const timeStr = `${String(chinaDate.getHours()).padStart(2, '0')}:${String(chinaDate.getMinutes()).padStart(2, '0')}:${String(chinaDate.getSeconds()).padStart(2, '0')}`;
                    displayDate = `${dateStr} ${timeStr}`;
                }
            }
            
            html += `
                <tr class="transaction-row" data-date="${tx.date}" data-from-amount="${tx.fromAmount}" data-to-amount="${tx.toAmount}" data-pair="${tx.pair}">
                    <td>${tx.pairDisplay}</td>
                    <td>${displayDate}</td>
                    <td class="token-stats-expense">
                        <div class="number-container">${formatNumberWithCommas(tx.fromAmount.toFixed(4))} ${tx.fromToken}</div>
                    </td>
                    ${usdtValueHtml}
                    <td class="token-stats-income">
                        <div class="number-container">${formatNumberWithCommas(tx.toAmount.toFixed(4))} ${tx.toToken}</div>
                    </td>
                    <td>${txRate.toFixed(6)}</td>
                    <td><a href="https://bscscan.com/tx/${tx.hash}" target="_blank">${shortHash}</a></td>
                </tr>
            `;
        }
        
        // 计算总汇总数据
        // 按交易对分组的统计
        const pairSummary = {};
        sortedPairs.forEach(([pair, stats]) => {
            pairSummary[pair] = {
                totalTrades: stats.totalTrades,
                totalFromAmount: stats.totalFromAmount,
                totalToAmount: stats.totalToAmount,
                fromToken: stats.fromToken,
                toToken: stats.toToken
            };
        });
        
        // 总交易次数
        const totalTrades = sortedPairs.reduce((sum, [_, stats]) => sum + stats.totalTrades, 0);
        
        // 分组统计每种代币的总金额
        const tokensFromSum = {};
        const tokensToSum = {};
        
        // 收集所有出现的代币
        sortedPairs.forEach(([_, stats]) => {
            const fromToken = stats.fromToken;
            const toToken = stats.toToken;
            
            if (!tokensFromSum[fromToken]) {
                tokensFromSum[fromToken] = 0;
            }
            
            if (!tokensToSum[toToken]) {
                tokensToSum[toToken] = 0;
            }
            
            tokensFromSum[fromToken] += stats.totalFromAmount;
            tokensToSum[toToken] += stats.totalToAmount;
        });

        // 计算总的USDT支出
        const grandTotalUsdt = allTransactions.reduce((sum, tx) => sum + tx.usdtValue, 0);
        const grandTotalUsdtHtml = grandTotalUsdt > 0 ?
            `<td class="token-stats-expense-usdt" style="color: #c93333;">${grandTotalUsdt.toFixed(4)}</td>` :
            '<td class="token-stats-expense-usdt">-</td>';

        // Calculate grand total for doubled expenses once
        const grandTotalDoubledExpenses = grandTotalUsdt * 2;
        const formattedGrandTotalDoubledExpenses = formatNumberWithCommas(grandTotalDoubledExpenses.toFixed(4));
        
        // walletAddressAssociatedSum
        document.getElementById('walletAddressAssociatedSumValue').innerHTML = `${formattedGrandTotalDoubledExpenses}`;

        // 添加分割线和汇总标题
        html += `
                <tr class="summary-header">
                    <td colspan="7" class="summary-header-text">${languageManager.getText('pairSummaryInfo')}</td>
                </tr>
        `;
        
        // 添加每个交易对的汇总行
        for (const [pair, stats] of sortedPairs) {
            // 计算平均价格比率
            const avgRate = stats.totalFromAmount > 0 ? 
                stats.totalToAmount / stats.totalFromAmount : 0;
            
            const fromDisplay = stats.fromToken;
            const toDisplay = stats.toToken;
            
            // 格式化交易对显示
            const pairDisplay = `
                <span class="token-from">${fromDisplay}</span>
                <span class="token-arrow">${languageManager.getText('exchange')}</span>
                <span class="token-to">${toDisplay}</span>
            `;

            // 计算该交易对的USDT总支出
            const totalPairUsdtValue = stats.transactions.reduce((sum, tx) => sum + tx.usdtValue, 0);
            const totalUsdtValueHtml = totalPairUsdtValue > 0 ?
                `<td class="token-stats-expense-usdt" style="color: #c93333;">${totalPairUsdtValue.toFixed(4)}</td>` :
                '<td class="token-stats-expense-usdt">-</td>';
            
            html += `
                <tr class="pair-summary-row" data-pair="${pair}">
                    <td>${pairDisplay}</td>
                    <td>${languageManager.getText('transactionCountLabel')}: ${stats.totalTrades}</td>
                    <td class="token-stats-expense">
                        <div class="number-container">${formatNumberWithCommas(stats.totalFromAmount.toFixed(4))} ${fromDisplay}</div>
                    </td>
                    ${totalUsdtValueHtml}
                    <td class="token-stats-income">
                        <div class="number-container">${formatNumberWithCommas(stats.totalToAmount.toFixed(4))} ${toDisplay}</div>
                    </td>
                    <td>${avgRate.toFixed(6)}</td>
                    <td>-</td>
                </tr>
            `;
        }
        
        // 总计汇总行
        html += `
            <tr class="pair-stats-summary total-summary-row">
                <td><strong>总计</strong></td>
                <td><strong>交易次数：${totalTrades}</strong></td>
                <td class="token-stats-expense">
                    <div class="number-container">
                        ${Object.entries(tokensFromSum).map(([token, amount]) => 
                            `<div>${formatNumberWithCommas(amount.toFixed(4))} ${token}</div>`
                        ).join('')}
                    </div>
                </td>
                ${grandTotalUsdtHtml}
                <td class="token-stats-income">
                    <div class="number-container">
                        ${Object.entries(tokensToSum).map(([token, amount]) => 
                            `<div>${formatNumberWithCommas(amount.toFixed(4))} ${token}</div>`
                        ).join('')}
                    </div>
                </td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr class="pair-stats-summary double-amount-row">
                <td>
                    <strong>2倍交易量</strong>
                    ${grandTotalDoubledExpenses > 0 ? `<div style="margin-top: 8px; font-weight: normal; font-size: 0.9em;">总和(2x): ${formattedGrandTotalDoubledExpenses}</div>` : ''}
                </td>
                <td><strong>-</strong></td>
                <td class="token-stats-expense">
                    <div class="number-container">
                        ${Object.entries(tokensFromSum).map(([token, amount]) => 
                            `<div>${formatNumberWithCommas((amount * 2).toFixed(4))} ${token}</div>`
                        ).join('')}
                        ${grandTotalDoubledExpenses > 0 ? `<div class="grand-total-doubled-expense" style="margin-top: 8px; font-weight: bold; border-top: 1px solid #bbb; padding-top: 8px;">
                                    总和(2x): ${formattedGrandTotalDoubledExpenses}
                                </div>` : ''}
                    </div>
                </td>
                <td class="token-stats-income">
                    <div class="number-container">
                        ${Object.entries(tokensToSum).map(([token, amount]) => 
                            `<div>${formatNumberWithCommas((amount * 2).toFixed(4))} ${token}</div>`
                        ).join('')}
                    </div>
                </td>
                <td>-</td>
                <td>-</td>
            </tr>
        `;
        
        html += `
                </tbody>
            </table>
            <div class="token-stats-summary">
                <p>${languageManager.getText('totalTradingPairs')}: ${sortedPairs.length} | ${languageManager.getText('totalTransactions')}: ${totalTrades}</p>
            </div>
            <style>
                /* 控制按钮样式 */
                .pair-transactions-controls {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 15px;
                }
                
                .btn-sort-date, .btn-copy-expenses {
                    padding: 6px 12px;
                    background-color: #f1f3f5;
                    border: 1px solid #dee2e6;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 13px;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                
                .btn-sort-date:hover, .btn-copy-expenses:hover {
                    background-color: #e9ecef;
                }
                
                .btn-copy-expenses {
                    background-color: #e8f4fd;
                    border-color: #c9e2ff;
                }
                
                .btn-copy-expenses:hover {
                    background-color: #d0e8fb;
                }
                
                /* 详细交易记录表格样式 */
                .all-transactions-table {
                    font-size: 12px;
                    width: 100%;
                    border-collapse: collapse;
                    table-layout: fixed; /* 固定表格布局 */
                    margin-bottom: 20px;
                }
                
                .all-transactions-table th,
                .all-transactions-table td {
                    padding: 8px 10px;
                    text-align: left;
                    border: 1px solid #e9ecef;
                    vertical-align: top;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                }
                
                /* 设置各列宽度 */
                .all-transactions-table th:nth-child(1),
                .all-transactions-table td:nth-child(1) {
                    width: 14%; /* 交易对 */
                }
                
                .all-transactions-table th:nth-child(2),
                .all-transactions-table td:nth-child(2) {
                    width: 14%; /* 日期 */
                }
                
                .all-transactions-table th:nth-child(3),
                .all-transactions-table td:nth-child(3),
                .all-transactions-table th:nth-child(4),
                .all-transactions-table td:nth-child(4) {
                    width: 15%; /* 支出和支出 (USDT) */
                }
                
                .all-transactions-table th:nth-child(5),
                .all-transactions-table td:nth-child(5) {
                    width: 15%; /* 收入 */
                }
                
                .all-transactions-table th:nth-child(6),
                .all-transactions-table td:nth-child(6) {
                    width: 10%; /* 价格 */
                }
                
                .all-transactions-table th:nth-child(7),
                .all-transactions-table td:nth-child(7) {
                    width: 20%; /* 交易哈希 */
                }
                
                .all-transactions-table th {
                    background-color: #f5f5f5;
                    font-weight: 500;
                    color: #444;
                    font-size: 12px;
                }
                
                .all-transactions-table tr:nth-child(even) {
                    background-color: #f9f9f9;
                }
                
                /* 汇总行样式 */
                .summary-header {
                    background-color: #eaeaea;
                    font-weight: bold;
                }
                
                .summary-header-text {
                    text-align: center;
                    padding: 10px;
                    font-size: 14px;
                    color: #333;
                }
                
                .pair-summary-row {
                    background-color: #f0f8ff;
                }
                
                .pair-stats-summary {
                    font-weight: 500;
                    background-color: #f5f5f5;
                    border-top: 2px solid #ccc;
                }
                
                .total-summary-row {
                    background-color: #e8f4fd;
                }
                
                .double-amount-row {
                    background-color: #e0f2f1;
                    border-bottom: 2px solid #ccc;
                }
                
                .pair-stats-summary div {
                    margin-bottom: 4px;
                }
                
                /* 交易对样式优化 */
                .token-from, .token-to {
                    font-size: 12px;
                    font-weight: 500;
                }
                
                .token-arrow {
                    color: #888;
                    font-size: 11px;
                    margin: 0 4px;
                }
                
                .token-stats-expense, .token-stats-income {
                    font-size: 12px;
                    white-space: normal; /* 允许换行 */
                }
                
                /* 数字容器样式 */
                .number-container {
                    white-space: normal; /* 允许换行 */
                    word-break: break-word;
                    word-wrap: break-word;
                }
                
                /* 提示消息样式 */
                .copy-success {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background-color: rgba(3, 184, 125, 0.9);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 4px;
                    z-index: 9999;
                    animation: fadeOut 2s forwards;
                    animation-delay: 1.5s;
                    font-size: 13px;
                }
                
                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
            </style>
        `;
        
        tokenStatsResultContainer.innerHTML = html;
        
        // 添加日期排序事件
        document.querySelector('.btn-sort-date').addEventListener('click', function() {
            const currentSort = this.getAttribute('data-sort');
            const newSort = currentSort === 'desc' ? 'asc' : 'desc';
            
            // 更新排序按钮状态
            this.setAttribute('data-sort', newSort);
                            this.innerHTML = `${languageManager.getText('dateSort')} <i class="fas fa-sort-${newSort === 'desc' ? 'down' : 'up'}"></i>`;
            
            // 获取所有交易行（仅交易记录，不包括汇总行）
            const table = document.getElementById('allTransactionsTable');
            const tbody = table.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr.transaction-row'));
            
            // 根据排序方向对行进行排序
            rows.sort((a, b) => {
                const dateA = new Date(a.getAttribute('data-date'));
                const dateB = new Date(b.getAttribute('data-date'));
                return newSort === 'desc' ? dateB - dateA : dateA - dateB;
            });
            
            // 找到第一个汇总行
            const summaryHeader = tbody.querySelector('tr.summary-header');
            
            // 将排序后的行移动到汇总行之前
            rows.forEach(row => {
                tbody.insertBefore(row, summaryHeader);
            });
        });
        
        // 添加复制支出数据事件
        document.querySelector('.btn-copy-expenses').addEventListener('click', function() {
            const table = document.getElementById('allTransactionsTable');
            const rows = Array.from(table.querySelectorAll('tr.transaction-row'));
            
            // 提取所有支出数据
            const expenses = rows.map(row => {
                // 获取支出数据，只提取数值部分
                const expenseCell = row.querySelector('td:nth-child(3)');
                // 使用正则表达式提取数值部分 - 移除千分位分隔符和币种名称
                // 首先获取文本内容并删除所有逗号
                const textContent = expenseCell.textContent.trim().replace(/,/g, '');
                // 然后提取数字部分（忽略币种名称）
                const match = textContent.match(/(\d+\.\d+)/);
                return match ? match[1] : '0';
            });
            
            // 创建要复制的文本
            const copyText = expenses.join('\n');
            
            // 复制到剪贴板
            navigator.clipboard.writeText(copyText).then(() => {
                // 显示成功提示
                const notification = document.createElement('div');
                notification.className = 'copy-success';
                notification.textContent = '支出数据已复制到剪贴板';
                document.body.appendChild(notification);
                
                // 3.5秒后移除提示
                setTimeout(() => {
                    notification.remove();
                }, 3500);
            }).catch(err => {
                console.error('复制失败:', err);
                alert('复制失败，请重试');
            });
        });

        // 在显示结果后，为新的复制按钮添加事件监听器
        setTimeout(() => {
            const copyUsdtBtn = document.querySelector('.btn-copy-usdt-expenses');
            if (copyUsdtBtn) {
                copyUsdtBtn.addEventListener('click', () => {
                    const table = document.getElementById('allTransactionsTable');
                    if (!table) return;

                    let dataToCopy = '';
                    
                    // 复制明细行
                    const rows = table.querySelectorAll('tbody .transaction-row');
                    rows.forEach(row => {
                        const usdtCell = row.cells[3];
                        const usdtValue = usdtCell.innerText.trim();
                        
                        if (usdtValue !== '-') {
                            dataToCopy += `${usdtValue}\n`;
                        }
                    });

                    navigator.clipboard.writeText(dataToCopy).then(() => {
                        const originalText = copyUsdtBtn.innerHTML;
                        copyUsdtBtn.innerHTML = '已复制!';
                        copyUsdtBtn.disabled = true;
                        setTimeout(() => {
                            copyUsdtBtn.innerHTML = originalText;
                            copyUsdtBtn.disabled = false;
                        }, 2000);
                    }).catch(err => {
                        console.error('复制失败:', err);
                        alert('复制失败，请检查浏览器权限。');
                    });
                });
            }
        }, 0);
    }

    // 在页面加载完成后，将二维码元素移动到body最后，确保能显示在最上层
    setTimeout(function() {
        if (donationQR && document.body) {
            document.body.appendChild(donationQR);
            document.body.appendChild(qrBackdrop);
            console.log('二维码元素已移至body');
        }
    }, 1000);

    // 点击其他地方隐藏二维码 - 更新为同时关闭背景
    document.addEventListener('click', function(e) {
        if (donationQR.style.display === 'block' && !donationQR.contains(e.target) && !donationElement.contains(e.target)) {
            donationQR.style.display = 'none';
            qrBackdrop.style.display = 'none';
        }
    });
    
    // 添加ESC键关闭二维码 - 更新为同时关闭背景
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && donationQR.style.display === 'block') {
            donationQR.style.display = 'none';
            qrBackdrop.style.display = 'none';
        }
    });

    // 添加千分位格式化函数（放在文件适当位置，例如在显示函数之前）
    /**
     * 对数字添加千分位分隔符
     * @param {string|number} num - 要格式化的数字
     * @returns {string} 格式化后的数字字符串
     */
    function formatNumberWithCommas(num) {
        // 确保传入的是字符串
        const numStr = typeof num === 'string' ? num : num.toString();
        
        // 分离整数部分和小数部分
        const parts = numStr.split('.');
        
        // 对整数部分添加千分位
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        
        // 重新组合整数和小数部分
        return parts.join('.');
    }

    // 快捷钱包管理类
    class QuickWalletManager {
        constructor() {
            this.storageKey = 'quickWallets';
            this.wallets = this.loadWallets();
            this.selectedIds = new Set();
            this.initEventListeners();
            this.renderWallets();
        }
        loadWallets() {
            try {
                const stored = localStorage.getItem(this.storageKey);
                return stored ? JSON.parse(stored) : [];
            } catch (error) {
                return [];
            }
        }
        saveWallets() {
            try {
                localStorage.setItem(this.storageKey, JSON.stringify(this.wallets));
            } catch (error) {}
        }
        initEventListeners() {
            addQuickWalletBtn.addEventListener('click', () => this.addWallet());
            quickWalletAddress.addEventListener('keypress', e => { if (e.key === 'Enter') this.addWallet(); });
            quickWalletAlias.addEventListener('keypress', e => { if (e.key === 'Enter') this.addWallet(); });
        }
        addWallet() {
            const alias = quickWalletAlias.value.trim();
            const address = quickWalletAddress.value.trim();
            if (!alias) { this.showNotification(languageManager.getText('quickWalletAliasRequired') || '请输入钱包别名', 'error'); quickWalletAlias.focus(); return; }
            if (!address) { this.showNotification(languageManager.getText('quickWalletAddressRequired') || '请输入钱包地址', 'error'); quickWalletAddress.focus(); return; }
            if (!isValidAddress(address)) { this.showNotification(languageManager.getText('quickWalletAddressInvalid') || '钱包地址格式无效', 'error'); quickWalletAddress.focus(); return; }
            if (this.wallets.find(w => w.alias === alias)) { this.showNotification(languageManager.getText('quickWalletAliasExists') || '该别名已存在', 'error'); quickWalletAlias.focus(); return; }
            if (this.wallets.find(w => w.address.toLowerCase() === address.toLowerCase())) { this.showNotification(languageManager.getText('quickWalletAddressExists') || '该钱包地址已存在', 'error'); quickWalletAddress.focus(); return; }
            this.wallets.push({ id: Date.now().toString(), alias, address });
            this.saveWallets();
            this.renderWallets();
            quickWalletAlias.value = '';
            quickWalletAddress.value = '';
            this.showNotification(languageManager.getText('quickWalletAddSuccess') || '快捷钱包添加成功！点击标签可选择地址', 'success');
        }
        deleteWallet(walletId) {
            const wallet = this.wallets.find(w => w.id === walletId);
            if (!wallet) return;
            
            // 显示确认提示
            const confirmMessage = `${languageManager.getText('deleteWalletConfirm')} "${wallet.alias}" 吗？\n${languageManager.getText('walletAddress')}: ${wallet.address}`;
            if (confirm(confirmMessage)) {
                const wasSelected = this.selectedIds.has(walletId);
                this.wallets = this.wallets.filter(w => w.id !== walletId);
                this.selectedIds.delete(walletId);
                this.saveWallets();
                this.renderWallets();
                this.updateWalletInput();
                
                // 显示删除成功提示
                if (wasSelected) {
                    this.showNotification(`${languageManager.getText('walletDeletedAndRemoved')} "${wallet.alias}"`, 'success');
                } else {
                    this.showNotification(`${languageManager.getText('walletDeleted')} "${wallet.alias}"`, 'success');
                }
            }
        }
        toggleSelect(walletId) {
            if (this.selectedIds.has(walletId)) {
                this.selectedIds.delete(walletId);
            } else {
                this.selectedIds.add(walletId);
            }
            this.renderWallets();
            this.updateWalletInput();
        }
        updateWalletInput() {
            // 获取所有选中的钱包地址
            const selectedAddresses = this.wallets
                .filter(w => this.selectedIds.has(w.id))
                .map(w => w.address);
            
            // 更新输入框内容
            walletAddressesTextarea.value = selectedAddresses.join('\n');
            
            // 显示提示信息
            if (selectedAddresses.length > 0) {
                this.showNotification(`${languageManager.getText('walletsSelected')} ${selectedAddresses.length} ${languageManager.getText('walletsSelectedCount')}`, 'success');
            } else {
                this.showNotification(languageManager.getText('walletsCleared'), 'info');
            }
        }
        renderWallets() {
            // 清空chips行
            quickWalletChipsRow.innerHTML = '';
            if (this.wallets.length === 0) {
                const empty = document.createElement('span');
                empty.style.color = '#888';
                empty.style.fontSize = '12px';
                empty.textContent = languageManager.getText('noQuickWallets');
                quickWalletChipsRow.appendChild(empty);
                return;
            }
            this.wallets.forEach(wallet => {
                const chip = document.createElement('div');
                const isSelected = this.selectedIds.has(wallet.id);
                chip.className = 'quick-wallet-chip' + (isSelected ? ' selected' : '');
                chip.title = `${languageManager.getText(isSelected ? 'clickToUnselect' : 'clickToSelect')}: ${wallet.address}`;
                chip.addEventListener('click', e => {
                    if (e.target.classList.contains('chip-delete')) return;
                    this.toggleSelect(wallet.id);
                });
                // 别名
                const aliasSpan = document.createElement('span');
                aliasSpan.className = 'chip-alias';
                aliasSpan.textContent = wallet.alias;
                chip.appendChild(aliasSpan);
                // 地址
                const addrSpan = document.createElement('span');
                addrSpan.className = 'chip-address';
                addrSpan.textContent = wallet.address.slice(0, 6) + '...' + wallet.address.slice(-4);
                chip.appendChild(addrSpan);
                // 删除按钮
                const delBtn = document.createElement('button');
                delBtn.className = 'chip-delete';
                delBtn.title = languageManager.getText('delete');
                delBtn.innerHTML = '<i class="fas fa-times"></i>';
                delBtn.addEventListener('click', e => { e.stopPropagation(); this.deleteWallet(wallet.id); });
                chip.appendChild(delBtn);
                quickWalletChipsRow.appendChild(chip);
            });
        }
        showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `quick-wallet-notification ${type}`;
            notification.textContent = message;
            notification.style.cssText = `position: fixed; top: 20px; right: 20px; padding: 12px 20px; border-radius: 4px; color: white; font-size: 14px; z-index: 9999; opacity: 0; transform: translateX(100%); transition: all 0.3s ease; max-width: 300px; word-wrap: break-word;`;
            if (type === 'success') notification.style.backgroundColor = '#28a745';
            else if (type === 'error') notification.style.backgroundColor = '#dc3545';
            else notification.style.backgroundColor = '#2196f3';
            document.body.appendChild(notification);
            setTimeout(() => { notification.style.opacity = '1'; notification.style.transform = 'translateX(0)'; }, 100);
            setTimeout(() => { notification.style.opacity = '0'; notification.style.transform = 'translateX(100%)'; setTimeout(() => { if (notification.parentNode) notification.parentNode.removeChild(notification); }, 300); }, 3000);
        }
    }
    // 初始化快捷钱包管理器
    const quickWalletManager = new QuickWalletManager();
    window.quickWalletManager = quickWalletManager;
    
    // 折叠功能管理器
    class CollapsibleManager {
        constructor() {
            this.initApiSettingsCollapse();
            this.initTimeRangeCollapse();
        }
        
        // 初始化API设置折叠功能
        initApiSettingsCollapse() {
            // 设置默认折叠状态
            apiSettingsContent.classList.add('collapsed');
            
            // 点击头部或按钮都可以切换折叠状态
            apiSettingsHeader.addEventListener('click', () => {
                this.toggleApiSettings();
            });
            
            // 防止按钮点击事件冒泡
            apiSettingsCollapseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleApiSettings();
            });
        }
        
        // 切换API设置的折叠状态
        toggleApiSettings() {
            const isCollapsed = apiSettingsContent.classList.contains('collapsed');
            
            if (isCollapsed) {
                // 展开
                apiSettingsContent.classList.remove('collapsed');
                apiSettingsCollapseBtn.classList.add('expanded');
                
                // 为了兼容性，添加类到父元素
                apiSettingsContent.parentElement.classList.remove('collapsed');
            } else {
                // 折叠
                apiSettingsContent.classList.add('collapsed');
                apiSettingsCollapseBtn.classList.remove('expanded');
                
                // 为了兼容性，添加类到父元素
                apiSettingsContent.parentElement.classList.add('collapsed');
            }
        }
        
        // 初始化时间范围折叠功能
        initTimeRangeCollapse() {
            // 设置默认折叠状态
            timeRangeContent.classList.add('collapsed');
            
            // 点击头部或按钮都可以切换折叠状态
            timeRangeHeader.addEventListener('click', () => {
                this.toggleTimeRange();
            });
            
            // 防止按钮点击事件冒泡
            timeRangeCollapseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleTimeRange();
            });
        }
        
        // 切换时间范围的折叠状态
        toggleTimeRange() {
            const isCollapsed = timeRangeContent.classList.contains('collapsed');
            
            if (isCollapsed) {
                // 展开
                timeRangeContent.classList.remove('collapsed');
                timeRangeCollapseBtn.classList.add('expanded');
                
                // 为了兼容性，添加类到父元素
                timeRangeContent.parentElement.classList.remove('collapsed');
            } else {
                // 折叠
                timeRangeContent.classList.add('collapsed');
                timeRangeCollapseBtn.classList.remove('expanded');
                
                // 为了兼容性，添加类到父元素
                timeRangeContent.parentElement.classList.add('collapsed');
            }
        }
    }
    
    // 初始化折叠功能管理器
    const collapsibleManager = new CollapsibleManager();
}); 