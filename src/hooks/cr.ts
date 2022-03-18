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

const loadScript = () => {
    const script = document.createElement('script');
    script.src =
        'https://development.coinrivet.com/wp-content/themes/coinrivet/assets/scripts/main.js?v=1.0.79';
    const secondScript = document.createElement('script');
    secondScript.src =
        'https://development.coinrivet.com/wp-content/themes/coinrivet/assets/scripts/landing.js?v=1.0.79';
    //   document.head.appendChild(script)
    document.head.appendChild(secondScript);
};


export {hidePopup, loadScript}