import { elements } from '../elements';
import { common } from '../common';
import { exercisesApi } from '../services/exercises-api';
import { quoteMarkup } from '../templates';

async function renderQuote() {
   
    const date = new Date();
    const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    let quote;
        
        
    const parseQuote = JSON.parse(localStorage.getItem(common.LS_KEY_QUOTE));
    if (parseQuote) {
       
        if (today !== parseQuote.date) {

            try {
                quote = await exercisesApi.getQuote();
                
                if (!quote.author || !quote.quote) {
                    throw Error("empty data")
                }

            } catch (error) {
                elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(common.BASE_QUOTE))
                console.log(error.message);
                return;
            }

            quote.date = today;
            localStorage.setItem(common.LS_KEY_QUOTE, JSON.stringify(quote))
            elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(quote))
        } else {
            elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(parseQuote))
        }
        
    } else {

         try {
                quote = await exercisesApi.getQuote();
                
                if (!quote.author || !quote.quote) {
                    throw Error("empty data")
                }

            } catch (error) {
                elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(common.BASE_QUOTE))
                console.log(error.message);
                return;
            }

        quote.date = today;
        localStorage.setItem(common.LS_KEY_QUOTE, JSON.stringify(quote))
        elements.quote.insertAdjacentHTML("beforeend", quoteMarkup(quote))
    }

}

export default renderQuote;