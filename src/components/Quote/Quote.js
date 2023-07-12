import React, {useEffect, useState} from 'react';
import "./Quote.css";
import fetchJsonp from "fetch-jsonp";

const Quote = ({generateColor}) => {
    const [quote, setQuote] = useState({});

    const fetchQuote = () => {
        fetchJsonp("https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=?", {
            jsonpCallback: "jsonp"
        })
            .then((res) => res.json())
            .then((data) => {
                setQuote(data)
                generateColor();
            });
    }

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="quote">
            <q>{quote.quoteText}</q>
            <h5>{quote.quoteAuthor}</h5>
            <button onClick={() => fetchQuote()}>New Quote</button>
        </div>
    );
};

export default Quote;