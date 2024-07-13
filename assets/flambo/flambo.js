const script = document.createElement("script")

const baseServer = "BASE_SERVER"

const href = btoa(window.location.href)

const currentDate = new Date

script.setAttribute("src", `${baseServer}script?href=${href}&time=${currentDate.getTime()}`)

document.body.appendChild(script)

const link__content = document.querySelector(".m-design-details__by .link__content")

link__content.innerHTML = link__content.textContent.trim().replace(/ㅤ/g, "")