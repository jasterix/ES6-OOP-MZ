import $ from "jquery";

import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";
import { ApplicationBase } from "./framework/application-base";

export class App extends ApplicationBase {
  constructor() {
    super("Fleet Manager");
    this.dataService = new FleetDataService();
      this.dataService.loadData( fleet );
      this.route("Home", null true)
      this.route("Cars",null)
      this.route("Drones",null)
      this.route("Map",null)
  }
}

export let application = new App();

application.show($("body"));
