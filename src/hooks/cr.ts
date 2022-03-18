import type { IHtml } from "src/interface";

const hidePopup = (html: IHtml) => {
    if(html != undefined && document.querySelector('.js-popup-stash-restriction')) {
        document.querySelector('.js-popup-stash-restriction').addEventListener('click', () => {
            if(document.querySelector('.js-promo-popup')) {
                document.querySelector('.js-promo-popup').classList.add('hide');
            }
        })
    } 
}

export {hidePopup}