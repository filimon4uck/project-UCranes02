import { elements } from '../elements';
import { common } from '../common';
import { exercisesApi } from '../services/exercises-api';
import { quoteMarkup } from '../templates';

async function renderQuote(page) {
   
    const date = new Date();
    const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    let quote;
        
        
    const parseQuote = JSON.parse(localStorage.getItem(common.LS_KEY_QUOTE));
    if (parseQuote) {
       
        if (today !== parseQuote.date) {

            try {
                quote = await exercisesApi.getQuote();

                quote.quote = quote.quote || common.BASE_QUOTE.quote;
                quote.author = quote.author || "Unknown"

            } catch (error) {
                elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(common.BASE_QUOTE, page))
                return;
            }

           if (quote.author !== "Unknown" && quote.quote !== common.BASE_QUOTE.quote) {
                quote.date = today;
                localStorage.setItem(common.LS_KEY_QUOTE, JSON.stringify(quote))
            }

            elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(quote, page))

        } else {
            elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(parseQuote, page))
        }
        
    } else {

         try {
                quote = await exercisesApi.getQuote();
             
                quote.quote = quote.quote || common.BASE_QUOTE.quote;
                quote.author = quote.author || "Unknown"

            } catch (error) {
                elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(common.BASE_QUOTE, page))
                return;
            }
        
        if (quote.author !== "Unknown" && quote.quote !== common.BASE_QUOTE.quote) {
            quote.date = today;
            localStorage.setItem(common.LS_KEY_QUOTE, JSON.stringify(quote))
        }
    
        elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(quote, page))
    }

}

export default renderQuote;