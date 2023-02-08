import Api from "./Api";

class UserService {
  // Create a new user
  async createUser() {
    await Api.post(
      "/register",
      {
        username: this.username,
        email: this.email,
        password: this.password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
}
export default UserService;

/* export default {
  createUser(user) {
    return Api.post("/", user);
  },
}; */

// Create a new user
/* const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  // Add to database
  try {
    const newUser = await User.create({
      username,
      email,
      password,
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; */
