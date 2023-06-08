import { defineConfig } from 'umi';

export default defineConfig({
    // 其他配置项...
    proxy: {
        '/api': {
            target: 'https://192.168.101.18:8102',
            changeOrigin: true,
            secure: true,
        },
    },
});