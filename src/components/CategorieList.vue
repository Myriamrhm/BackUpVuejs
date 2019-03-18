<template>
  <div>
    <h1 class="titre">Choisis ta categorie !</h1>
    <div id="contenu1">
      <section v-for="(category, n) in categories.international" :key="n">
        <p>{{category.title}}</p>
        <router-link :to="'/categories' + category.path">
          <img class="img" :src="getImage(category.img)" alt>
        </router-link>
      </section>
    </div>
    <hr>
    <div id="contenu2">
      <section v-for="(category, n) in categories.french" :key="n">
        <p>{{category.title}}</p>
        <router-link :to="'/categories' + category.path">
          <img class="img" :src="getImage(category.img)" alt>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: {
        international: [
          { title: "Brit Rock", img: "CatBrit.jpg", path: "/britRock" },
          { title: "New Indie/Rock", img: "Categorie2.jpg", path: "/indieRock" },
          { title: "Dance", img: "Funk.jpg", path: "/dance" },
          { title: "Hits", img: "HitsCat.jpg", path: "/eightiesHits" },
          { title: "Chill", img: "ChillCat.jpg", path: "/chill" },
          { title: "Band Eighties", img: "Eighties.jpg", path: "/eightiesBand" },
          { title: "Eighties Rock", img: "RockEighties.jpg", path: "/eightiesRock"},
          { title: "Teen 2010 Rock", img: "2010rock.jpg", path: "/rock2000" },
          { title: "Teen 2010 RNB", img: "Rnb.jpg", path: "/rnb" }
        ],
        french: [
          { title: "Tendance French", img: "Tendance.jpg", path: "/tendance" },
          { title: "2000-2010 French", img: "2010.jpg", path: "/deuxMille" },
          {
            title: "Eighties French",
            img: "MichelBerger.jpg",
            path: "/eightiesFrench"
          },
          {
            title: "Seventies French",
            img: "Seventiees.jpg",
            path: "/sixtiesFrench"
          }
        ]
      }
    };
  },
  methods: {
    getImage(imgName) {
      return require("./../assets/" + imgName);
    }
  }
};
</script>

<style lang="scss" scoped>
#contenu1,
#contenu2 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 100px;
  margin-right: 100px;
  padding-bottom: 150px;
}
p {
  font-size: 140%;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.342);
  border-radius: 3px;
  margin-top: 25%;
}
.img {
  width: 220px;
  height: 220px;
  box-shadow: 10px 12px rgba(0, 0, 0, 0.404);
}
.img:hover {
  transform: scale(1.01);
  outline-style: solid;
  outline-color: rgb(187, 187, 187);
  outline-offset: 15px;
}
hr {
  height: 2px;
  width: 88%;
  background-color: white;
}

@import url('https://fonts.googleapis.com/css?family=Sigmar+One');
.titre{
    font-family: 'Sigmar One', cursive;
    font-size: 225%;
    color:white;
    padding-top: 100px;
}

</style>
