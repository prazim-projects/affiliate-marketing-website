const apiURL = import.meta.env.VITE_API_URL
module.exports = {
    client: {
        service: {
            name: 'affMrkt',
            url: `${apiURL}/graphql`,
        },

        includes: [
            'src/**/*.js',
            'src/**/*.vue',
        ],
    },

}
