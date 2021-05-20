module.exports = {
    async redirects() {
        return [
            {
                source: '/pastors',
                destination: 'https://gcm.formstack.com/forms/disciple_life_app__free_gift_for_pastors',
                permanent: false
            },
        ]
    },
    target: 'serverless',
    images: {
        loader: 'imgix',
        path: 'https://gracechurchmentor.imgix.net/disciple-life-app/'
    }
}