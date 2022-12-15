
export class NavigationService {

  constructor(router) {
    this.router = router;
  }

  navigation() {
    this.router.push("/success");
  }
}