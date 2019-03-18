import axios from "axios";
import auth from "./../auth";

const defaultUser = {
  id: 123,
  name: "guillaume",
  lastname: "amg",
  email: "gui@ohm.com"
};



const userStore = {
  namespaced: true,
  state: {
    currentUser: defaultUser,
      allUsers: []
  },
  getters: {
    current(state) {
      return state.currentUser;
    },
    all(state) {
      return state.allUsers;
    }
  },
  mutations: {
    setUsers(state, users) {
        state.allUsers = users;
    }
  },
  actions: {
    register(ctx, user) {
      return axios
        .post("/inscription", user)
        .then(res => {
          console.log("response server", res);
        })
        .catch(err => {
          console.error("error server", err);
        });
    },
    login(ctx, user) {
         // return console.log(user);
         axios.post("/connexion", user)
         .then(res => {
           console.log(res);
           auth.setLocalToken(res.data);
         })
         .catch(err => {
           console.error(err); 
         })
    },
    // logout(ctx) {},
    getAll(ctx, user) {
      axios
        .get("/admin", user)
        .then(res => {
          console.log("good", res.data);
        //   ctx.commit("setUsers", res.data);
        })
        .catch(err => {
          console.error("baaad", err);
        });
    },
    // updateUser(ctx) {},
    // deleteUser(ctx) {}
  }
};

export default userStore;