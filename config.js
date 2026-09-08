// =====================================================
// إعدادات منصة المسار المهني
// =====================================================

// رابط مشروع Supabase
const SUPABASE_URL = "https://etqbcnskmzlumfguryjk.supabase.co";

// المفتاح العام Publishable / Anon
const SUPABASE_ANON_KEY = "sb_publishable_lTuyKeXZOPZO5AzVzRuGUA_6wZwjz1m";

// إنشاء اتصال Supabase
const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);