const createArray = async () => {
  
  const rawText =  await fetchStory();
  
  //FUNCTION TO SPLIT TEXT INTO ARRAY OF SENTENCES  
  const createSentenceArray = (data) => {
    const sentenceRaw = data
    .replaceAll("------------------------------------------------" , "")
    .replaceAll("\r" , "")
    .replaceAll("\n", "")
    .replaceAll("----",".")
    .match(/[^\.!\?]+[\.!\?]+["']?|.+$/g);
    
    let cleanedSentenceArray = [];
    
    const stringCleanUp = sentenceRaw.forEach((string) => {
      
      let cleanedString = string
      .replace(/^[^A-Za-z0-9"(\[]/, '')
      .replaceAll('""',"");
      
      const splitString  = [...cleanedString];
      
      let t = 0;
      for (let i=0; i<splitString.length; i++) {
        if (splitString[i] === '"') {
          t += 1;       
        };
      };
      
      if ( t > 0 && t < 2) {
        const cleaned = cleanedString.replaceAll('"', "");
        cleanedSentenceArray.push(cleaned);
      } else {
        cleanedSentenceArray.push(cleanedString);
      };
    });
    return cleanedSentenceArray;
  };

  //FUNCTION TO CONCATENATE QUOTESS IF ONE STRING ENDS IN ?" OR !", AND THE FIRST LETTER OF THE NEXT STRING IS LOWERCASE
  const concatQuotes = (array) => {
    
    for (i=0; i<array.length; i++) {
    
      const checkQuoteEndPunctuation = (str) => {
        return /[?!]["']$/.test(str);
      }; 

      const checkIsNextStringLowCase = (str) => {
        return /^[a-z]/.test(str);
      };

      const currentSentence = array[i];
      const nextSentence = array[i+1];

      if (checkQuoteEndPunctuation(currentSentence) === true && checkIsNextStringLowCase(nextSentence) === true) {
        const newSentence = currentSentence + nextSentence;
        array.splice(i, 2, `${newSentence}`);
      };
    };
    return array;
  };

  //FUNCTION TO ASSEMBLE ARRAY OF SENTENCES 
  const assembleQuotes = (bigString) => {
    const arrayToSplit = createSentenceArray(bigString);
    const arrayWithJoinedQuotes = concatQuotes(arrayToSplit);
    return arrayWithJoinedQuotes;
  }

  //FUNCTION TO ALPHABETIZE SENTENCES     
  const sortSentences = (array) => {
    const sorted = array.sort(function (a, b) {
      return a.localeCompare(b, undefined, { ignorePunctuation: true });
    });
    return sorted;
  };

  // ROUTER FOR ARRAY CREATION FOR EACH PAGE 
  let arrayOfSentences;
  
    if (window.location.pathname === "/index.html") {
      arrayOfSentences = assembleQuotes(rawText);
    } else if (window.location.pathname === "/sortedAZ.html") {
      const rawArray = assembleQuotes(rawText);
      arrayOfSentences = sortSentences(rawArray);
    } else if (window.location.pathname === "/sortedZA.html") {
      const rawArray = assembleQuotes(rawText);
      arrayOfSentences = sortSentences(rawArray).reverse();
    };

  return arrayOfSentences;
};

