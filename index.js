module.exports = {
    blocks: {
        codepen: function (block) {
            const config = this.config.values.pluginsConfig['codepen-placeholder']
            const args = block.kwargs

            const account = args.account || config.account
            const username = args.username || config.username || account
            const height = args.height || config.height || null
            const width = args.width || config.width || null
            const themeId = args.themeId || config.themeId || null
            const defaultTab = args.defaultTab || config.defaultTab || null
            const title = args.title || config.title || `Pen by @${account}`

            const body = block.body || `
                See the Pen <a href='https://codepen.io/${account}/pen/${args.id}/'>${title}</a> by ${username}
                (<a href='https://codepen.io/${account}'>@${account}</a>) on <a href='https://codepen.io'>CodePen</a>.
            `

            const params = []
            height && params.push(`height=${height}`)
            themeId && params.push(`theme-id=${themeId}`)
            defaultTab && params.push(`default-tab=${defaultTab}`)

            const attributes = [
                'scrolling="no"',
                'frameborder="no"',
                'allowtransparency="true"',
                'allowfullscreen="true"',
                `src="//codepen.io/${account}/embed/preview/${args.id}/?${params.join('&')}"`,
            ]
            title && attributes.push(`title="${title}"`)
            height && attributes.push(`height="${height}"`)
            width && attributes.push(`style="width: ${width}"`)

            return `<iframe ${attributes.join(' ')}>${body}</iframe>`
        },
    },
}
