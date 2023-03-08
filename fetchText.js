const fetchStory = async () => {

  try {
    const response = await fetch('ShortStory.txt');
    const data = await response.text();
    return data
  } catch (error) {
    console.log("error")
  }
};  


