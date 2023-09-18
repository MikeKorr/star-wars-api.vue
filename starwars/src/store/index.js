import { createStore } from "vuex";
// const baseUrl = "https://swapi.dev/api";

const store = createStore({
  state() {
    return {
      api: "https://swapi.dev/api",
      // people: [],
      // planets: [],
      // ships: [],
      check: {},
      error: "",
    };
  },
  actions: {
    // async requestPeopleApi(context, page) {
    //   const res = await fetch(`"https://swapi.dev/api/people/?page=${page}"`);
    //   const people = await res.json();
    //   const newPeople = [...people];

    //   // const newPeople = await people.results.map((el, index) => {
    //   //   return { ...el, id: index + 1 };
    //   // });

    //   context.commit("updatePeople", newPeople);
    // },

    updateObject(context, obj) {
      const newObj = { ...obj };
      context.commit("updateObject", newObj);
    },

    updateError(context, err) {
      const newErr = err;
      context.commit("updateError", newErr);
    },

    // async requestPlanetsApi(context) {
    //   const res = await fetch(baseUrl + "/planets/");
    //   const planets = await res.json();
    //   const newPlanets = await planets.results.map((el, index) => {
    //     return { ...el, id: index + 1 };
    //   });

    //   context.commit("updatePlanets", newPlanets);
    // },

    // async requestShipsApi(context) {
    //   const res = await fetch(baseUrl + "/starships/");
    //   const starships = await res.json();
    //   const newShips = await starships.results.map((el, index) => {
    //     return { ...el, id: index + 1 };
    //   });

    //   context.commit("updateShips", newShips);
    // },
  },
  getters: {
    getUrl(state) {
      return state.api;
    },
    // peopleArr(state) {
    //   return state.people;
    // },
    // planetsArr(state) {
    //   return state.planets;
    // },
    // shipsArr(state) {
    //   return state.ships;
    // },
    checkObj(state) {
      return state.check;
    },

    checkErr(state) {
      return state.error;
    },
  },
  mutations: {
    // updatePeople(state, people) {
    //   state.people = people;
    // },
    // updatePlanets(state, planets) {
    //   state.planets = planets;
    // },
    // updateShips(state, ships) {
    //   state.ships = ships;
    // },
    updateObject(state, obj) {
      state.check = obj;
    },
    updateError(state, err) {
      state.error = err;
    },
  },
});

export default store;
