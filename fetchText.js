const fetchStory = async () => {

  try {
    const response = await fetch('http://localhost:8080/ShortStory.txt');
    const data = await response.text();
    return data;
  } catch (error) {
    console.log("error");
  };
};  


