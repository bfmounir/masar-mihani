// =====================================================
// إعدادات منصة المسار المهني
// =====================================================

const SUPABASE_URL = "https://etqbcnskmzlumfguryjk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_lTuyKeXZOPZO5AzVzRuGUA_6wZwjz1m";

// إنشاء اتصال واحد مشترك بين صفحات المنصة
if (typeof window !== "undefined" && window.supabase) {
    window.db = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );
}
