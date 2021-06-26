module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'contents': 'components/contents',
                'common': 'components/common',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}