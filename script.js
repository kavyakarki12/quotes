document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  generate = () => {
    var quotes = {
      "- Dalai Lama": '"The purpose of our lives is to be happy."',
      "- Mae West": '"You only live once, but if you do it right, once is enough."',
      "- Babe Ruth": '"Never let the fear of striking out keep you from playing the game."',
      "- Will Smith": '"Money and success don’t change people; they merely amplify what is already there."',
      "- Seneca": '"Not how long, but how well you have lived is the main thing."',
    };
  
    
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author]
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
  
  }