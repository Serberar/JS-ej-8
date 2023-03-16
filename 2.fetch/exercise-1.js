const getCharacters = () => {
    try {
      fetch("https://api.agify.io?name=michael")
        .then((response) => response.json())
        .then((responseJson) => console.log(responseJson))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };console.log(responseJson)