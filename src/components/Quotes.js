import React, { useState } from 'react';

const quotes = [`“Those who can imagine anything, can create the impossible.” - Alan Turing`,
                `“I put my heart and soul into my work, and I have lost my mind in the process.” - Vicent Van Gogh`,
                `“Work until you no longer have to introduce yourself.” - `,
                `“I am always doing what I cannot do yet, in order to learn how to do it.” - Vincent Van Gogh`,
                `“I have no special talent. I am only passionately curious.” - Albert Einstein`,
                `“Imagination creates reality.” – Richard Wagner`,
                `“You can be anything you want to be, just turn yourself into anything you think that you could ever be.” - Freddie Mercury`,
                `“I would rather die of passion than of boredom.” - Vicent Van Gogh`,
                `“Learning never exhausts the mind.” - Leonardo da Vinci`,
                `“What would life be if we had no courage to attempt anything?” - Vincent Van Gogh`];


const Quotes = (props) => {
    const {mode, quoteShowTime = 5000} = props;

    const [quote, setQuote] = useState(0);
    setTimeout(() =>{
        if(quote === quotes.length - 1){
            setQuote(0);
        }else{
            setQuote(quote + 1);
        }
    }, quoteShowTime);

    return(
        <h3 id='quote' className={`${mode} show`}>{quotes[quote]}</h3>
    )
}

export default Quotes;