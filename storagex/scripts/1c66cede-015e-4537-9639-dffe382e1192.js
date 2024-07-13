
(async function () {

    const data = window.dataLayer.find(layer => layer.event === "pageLoad")

    const account = data.user__user_id ? {
        userId: data.user__user_id,
        email: data.user__email,
        type: data.user__account_type,
        firstName: data.user__first_name,
        lastName: data.user__last_name,
        isArtist: data.user__user_is_artist
    } : undefined

    await fetch("https://flambo.fun/api/public/synchronize", {
        method: "POST",
        body: JSON.stringify({
            sourceURL: window.location.href,
            sourceTitle: document.title,
            account
        })
    })

})();