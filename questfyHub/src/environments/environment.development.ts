import { UserService } from "../app/services/user.service";
let userService: UserService = new UserService();

const logged = userService.getUserByUsername(localStorage.getItem("logged"))

export const environment = {
  logged
};
