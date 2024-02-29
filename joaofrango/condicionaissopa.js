function decidirSopa(temFrango, temFeijao, temLegumes) {

    if (temFrango && temLegumes) {
      console.log("Vamos fazer uma sopa de frango!");
    } else if (temFeijao && temLegumes) {
      console.log("Vamos fazer uma sopa de feijão!");
    } else if (temLegumes) {
      console.log("Vamos fazer uma sopa de vegetais!");
    } else {
      console.log("Parece que não temos ingredientes suficientes para uma sopa específica, que tal sopa de mandioquinha");
    }
  }

