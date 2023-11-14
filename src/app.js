window.onload = function() {
  const pronouns = ["the", "our"];

  const adjectives = ["great", "big"];

  const nouns = ["jogger", "racoon"];

  const extens = [".com", ".us", ".io", ".es"];

  for (let pronoun of pronouns) {
    for (let adj of adjectives) {
      for (let noun of nouns) {
        for (let exten of extens) {
          console.log(pronoun + adj + noun + exten);
        }
      }
    }
  }
};
