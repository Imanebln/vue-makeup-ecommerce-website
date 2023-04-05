import { API_URL } from "./CartService";

export default {
  signIn(username, password) {
    if (username != "" && password != "") {
      return true;
    }
  },
};
