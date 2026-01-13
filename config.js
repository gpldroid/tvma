// config.js
// إعدادات اتصال API - يمكنك تحديث هذه القيم بخادمك الفعلي

const API_CONFIG = { 
    // استبدل هذا بعنوان الخادم الفعلي الذي يعمل
    base: "http://p1.planet208.com:7000", 
    user: "sigma747", 
    pass: "747123658" 
};

// يمكنك أيضًا إضافة خوادم احتياطية
const BACKUP_SERVERS = [
    "https://backup1.server.com:7000",
    "https://backup2.server.com:7000",
    "http://p1.planet208.com:7000"
];

// إعدادات إضافية للمشغل
const PLAYER_CONFIG = {
    autoplay: true,
    defaultVolume: 0.8,
    qualityOptions: [360, 480, 720, 1080],
    enableStats: true
};

// تصدير الإعدادات إذا لزم الأمر
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { API_CONFIG, BACKUP_SERVERS, PLAYER_CONFIG };
}
