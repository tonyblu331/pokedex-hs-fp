<template>
  <header>
    <router-link to="/AboutView.vue">About the Project</router-link>
    <suspense>
      <div class="Search">
        <label for="">
          Type for Pokemon Name or ID
          <input type="text" v-model="pokemonID" />
          <button class="SearchBtn" @click="SearchPokemon">
            Search Pokemon!
          </button>
        </label>
      </div>
    </suspense>
  </header>
  <main v-if="Object.entries(pokemonData).length > 0">
    <div class="PokemonCard">
      <div class="NameImage">
        <h1 class="PokemonName">{{ pokemonData.name }}</h1>
        <img :src="pokemonData.sprites.front_default" :alt="pokemonData.name" />
      </div>
      <div class="PokemonSize">
        <ul>
          <li>
            <span>
              <span class="LabelSize">Weight: </span>
              {{ Math.ceil(pokemonData.weight / 10) }}kg</span
            >
          </li>
          <li>
            <span>
              <span class="LabelSize">Height: </span
              >{{ Math.ceil(pokemonData.height / 10) }}m</span
            >
          </li>
        </ul>
      </div>
      <div class="PokemonType">
        <ul>
          <h2>Type:</h2>
          <li
            v-for="(value, index) in pokemonData.types"
            :key="'value' + index"
          >
            <span :class="value.type.name">{{ value.type.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { PokeApi } from "../api/PokeApi.JS";

export default {
  name: "PokedexApp",

  data() {
    return {
      pokemonData: {},
      pokemonID: "",
    };
  },

  methods: {
    async SearchPokemon() {
      try {
        const PokemonToFind = await fetch(`${PokeApi}/${this.pokemonID}`);
        const pokemon = await PokemonToFind.json();
        this.pokemonData = pokemon;
        console.log(pokemon);
        return pokemon;
      } catch (error) {
        alert("Pokemon not found :(");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../PokemonTypes.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  font-family: "Poppins", sans-serif;
  background: url(../assets/pixelBackground.jpg) no-repeat center center fixed;
  background-size: cover;
}

header {
  .Search {
    display: flex;
    justify-content: center;
    button {
      padding: 8px;
      border-radius: 4px;
      border: 0;
      outline: none;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      font-weight: bold;
      margin-left: 8px;
    }
  }
}

.PokemonCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 35vh;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;
  text-align: center;
  margin-top: 60px;
  .NameImage {
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      height: 100%;
      margin-bottom: 25px;
    }
  }
  .PokemonSize {
    ul {
      display: block;
      margin-top: 205px;
      .LabelSize {
        font-weight: bold;
      }
    }
  }
  .PokemonType {
    span {
      padding: 12px;
      border-radius: 8px;
      display: block;
      font-weight: bold;
      margin-top: 9px;
    }
  }
}

.normal {
  background-color: $normal;
}
.fire {
  background-color: $fire;
}
.water {
  background-color: $water;
}
.grass {
  background-color: $grass;
}
.electric {
  background-color: $electric;
}
.ice {
  background-color: $ice;
}
.fighting {
  background-color: $fighting;
}
.poison {
  background-color: $poison;
}
.ground {
  background-color: $ground;
}
.flying {
  background-color: $flying;
}
.psychic {
  background-color: $psychic;
}
.bug {
  background-color: $bug;
}
.rock {
  background-color: $rock;
}
.ghost {
  background-color: $ghost;
}
.dark {
  background-color: $dark;
}
.dragon {
  background-color: $dragon;
}
.steel {
  background-color: $steel;
}
.fairy {
  background-color: $fairy;
}
</style>
