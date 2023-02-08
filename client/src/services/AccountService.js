import Api from "./Api";

class UserService {
  // Get all users
  static getUsers() {
    return async (resolve, reject) => {
      Api.get("/")
        .then((res) => {
          const data = res.data;
          resolve(
            data.map((post) => ({
              ...post,
              createdAt: new Date(post.createdAt),
            }))
          );
        })
        .catch((err) => {
          reject(err);
        });
    };
  }

  // Add a user
  static createUser(user) {
    return Api.post("/", {
      user,
    });
  }

  // Delete a user
  /*   static deletetUser(id) {
    return Api.delete("/${id}");
  } */
}

export default UserService;
