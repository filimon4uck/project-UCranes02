import { elements } from '../elements';
import { common } from '../common';
import { exercisesApi } from '../services/exercises-api';
import { quoteMarkup } from '../templates';

async function renderQuote() {
   
    try {
        const date = new Date();
        const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
        let quote;
        
        
        const parseQuote = JSON.parse(localStorage.getItem(common.LS_KEY_QUOTE));
        if (parseQuote) {
            
            if (today !== parseQuote.date) {
                quote = await exercisesApi.getQuote();
                quote.date = today;
                localStorage.setItem(common.LS_KEY_QUOTE, JSON.stringify(quote))
                elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(quote))
            } else {
                elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(parseQuote))
            }
            
        } else {
            quote = await exercisesApi.getQuote();
            quote.date = today;
            localStorage.setItem(common.LS_KEY_QUOTE, JSON.stringify(quote))
            elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(quote))
        }

    } catch {
        
    }

}

export default renderQuote;