
(async function () {

    const data = window.dataLayer.find(layer => layer.event === "pageLoad")

    fetch("https://flambo.fun/api/public/toggle", {
        method: "POST",
        body: data.design__design_id
    }).catch(_ => undefined)

    var old_element = document.querySelector(".jsAddToCart")

    var new_element = old_element.cloneNode(true)

    old_element.parentNode.replaceChild(new_element, old_element)

    TeePublic.ProductHelper.initPage({
        design_id: data.design__design_id,
        store_id: "3301929",
        images: true,
        paths: {
            similar_products_path: `/designs/${data.design__design_id}/canvas/1/similar_products`
        },
        similar_products_enabled: true
    }, 0)

})();