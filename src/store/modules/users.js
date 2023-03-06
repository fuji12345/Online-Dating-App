export const usersStore = {
    namespaced: true,
    state() {
        return{
            users: {},
        }
    },
    getters: {
        getUserById: (state) => (id) => {
            return state.users[id];
        },
    },
    mutations: {
        setUsers: (state, usersData) => {
            for(let i = 0; i < usersData.length; i++){
                state.users[usersData[i].login.uuid] = usersData[i];
            }
        },
    
    },
    actions: {
        fetchUsers: async (context) => {
            let currUsers = [];
            let checker = {};
            for(let i = 0; i < 10; i++){
                let res = await fetch('https://randomuser.me/api/');
                let user = await res.json();
                if(checker[user.results[0].login.uuid]){
                    i--;
                }else{
                    currUsers.push(user.results[0]);
                    checker[user.results[0].login.uuid] = true;
                }
            }
            context.commit("setUsers", currUsers);
        },
    }
}