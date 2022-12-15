import { describe, expect, it, vi } from "vitest";
import {screen, waitFor} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import {render} from "@testing-library/vue";
import SignUp from "./SignUp.vue";
import { NavigationService } from "./../service/NavigationService";

describe("signup", () => {
  it("redirects to the success page when signup is ok", async () => {
    const navigationService = new NavigationService();
    vi.spyOn(navigationService, "navigation");

    const user = userEvent.setup();
    render(SignUp, {
      props: {
        navigationService,
      }
    });
    const emailInput = screen.getByLabelText("Your email");
    await user.click(emailInput);
    await user.keyboard("pepito@gmail.com");
    const passwordInput = screen.getByLabelText("Your password");
    await user.click(passwordInput);
    await user.keyboard("123456");
    
    const signupButton = screen.getByText("Signup");
    await user.click(signupButton);
    await waitFor(() => expect(navigationService.navigation).toHaveBeenCalled());

  });

  // it("A text connected to the input that indicates the user where to write the email", async () => {

  // });

  // it("A text connected to the input that indicates the user where to write the password", async () => {
    
  // });

  // it("redirects to the success page when signup is ok", async () => {

  // });
});
