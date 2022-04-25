module.exports = {
    devServer: {
        proxy: `${process.env.VUE_APP_ENDPOINT_URL}`,
    }
}