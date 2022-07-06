import { useState } from "react";
import { useEffect } from "react";

function Home (){

    const [quotes, setQuotes] = useState("");
    const [randomQuotes, setRandomQuotes] = useState("");
    const [color, setColor] = useState("");

    useEffect (() => {
        async function fetchData(){
            const response = await fetch ("https://type.fit/api/quotes")
            const data = await response.json();
            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuotes(data[randIndex]);
        }
        fetchData();
    }, [])

    const getNewQuotes = () => {
        const colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
          ];

          

          let randColorIndex = Math.floor(Math.random() * colors.length);
          let randIndex = Math.floor(Math.random() * quotes.length);
          setRandomQuotes(quotes[randIndex])
          setColor(colors[randColorIndex])
          
    }



    return (
        
        <body className="quote-design" style={{color, backgroundColor: color, minHeight: "100vh"}}>
        <div className="container">
            <div id="quote-box">
                <div id="quote-text">
                    <i className="fas fa-quote-left"></i>
                    <span id="quote" className="text-design">{randomQuotes.text}</span>
                </div>
        
                <div className="quote-author">
                    <span id="author" className="text-design">{randomQuotes.author || "No author"}</span>
                </div>
                
             
                <div id="footer">
                    <div className="footer-socials">
                        <a href={
                            'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                            encodeURIComponent('"' + randomQuotes.text + '" ' + randomQuotes.author)
                        }
                        id="tweet-quote" className="quote-design" target="_blank" style={{backgroundColor: color}}><i className="fab fa-twitter"></i></a>
                        <a href={
                            'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
                            encodeURIComponent(randomQuotes.author) +
                            '&content=' +
                            encodeURIComponent(randomQuotes.text) +
                            '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
                        }
                        id="tumbler-quote" className="quote-design"  target="_blank" style={{backgroundColor: color}}><i className="fab fa-tumblr"></i></a>
                    </div>

                    <div className="footer-btn">
                        <button id="new-quote" className="quote-design" onClick={getNewQuotes} style={{backgroundColor: color}}>New Quote</button>
                    </div>
                </div>
        
            </div>
       
        </div>    
        </body> 
       
    )
}

export default Home;