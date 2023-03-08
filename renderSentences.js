const renderSentences = async () => {

  const arrayOfSentences = await createArray();
  document.querySelector(".sentence").replaceChildren();

  arrayOfSentences.forEach((sentence)=> {
    const newLi = document.createElement("li");
    newLi.classList.add(".oneSentence");
    newLi.innerHTML = `${sentence}`;
    document.querySelector(".sentence").append(newLi);
  });

};

renderSentences();
  