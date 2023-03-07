const fetchStory = () => {
  fetch('ShortStory.txt')
  .then(response => response.text())
  .then((data) => {
    document.querySelector(".sentence").replaceChildren();
               
    //FUNCTION TO CREATE ARRAY OF SENTENCES 

    const createSentenceArray = (rawText) => {
      const sentenceRaw = rawText
                          .replaceAll("------------------------------------------------" , "")
                          .replaceAll("\r" , "")
                          .replaceAll("\n", " ")
                          .match(/[^\.!\?]+[\.!\?]+["']?|.+$/g);

      let cleanedSentenceArray = [];

      const stringCleanUp = sentenceRaw.forEach((string) => {
        
        let cleanedString = string.replace(/^[^A-Za-z0-9"]/, "");
        const splitString  = [...cleanedString]

        let t = 0;
        for (let i=0; i<splitString.length; i++) {
          if (splitString[i] === '"') {
            t += 1;       
          };
        };

        if ( t > 0 && t < 2) {
          const cleaned = cleanedString.replaceAll('"', "")
          cleanedSentenceArray.push(cleaned)
        } else {
          cleanedSentenceArray.push(cleanedString)
        };
      });
      return cleanedSentenceArray;
    };

    //FUNCTION TO ALPHABETIZE ALL SENTENCES 

    
    
    const arrayOfSentences = createSentenceArray(data);


    //FUNCTION TO CONCATENATE TWO STRINGS IF ONE ENDS IN ?" OR !", AND THE FIRST INDEX OF THE NEXT STRING IS LOWERCASE
  
    for (i=0; i<arrayOfSentences.length; i++) {
  
      const checkQuoteEndPunctuation = (str) => {
        return /[?!]["']$/.test(str);
      }; 

      const checkIsNextStringCap = (str) => {
        return /^[a-z]/.test(str);
      };

      const currentSentence = arrayOfSentences[i];
      const nextSentence = arrayOfSentences[i+1];

      if (checkQuoteEndPunctuation(currentSentence) === true && checkIsNextStringCap(nextSentence) === true) {
        const newSentence = currentSentence + nextSentence;
        arrayOfSentences.splice(i, 2, `${newSentence}`);
      };
    };


    //APPEND FINAL RESULTS TO HTML 

    arrayOfSentences.forEach((sentence)=> {
      const newLi = document.createElement("li");
      newLi.innerHTML = `${sentence}`;
      document.querySelector(".sentence").append(newLi);
    });
  });
};

fetchStory();

