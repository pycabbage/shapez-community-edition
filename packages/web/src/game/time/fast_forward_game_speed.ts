import { globalConfig } from "../../core/config"
import { BaseGameSpeed } from "./base_game_speed"

export class FastForwardGameSpeed extends BaseGameSpeed {
  static getId() {
    return "fast-forward"
  }

  getTimeMultiplier() {
    return globalConfig.fastForwardSpeed
  }

  getMaxLogicStepsInQueue() {
    return 3 * globalConfig.fastForwardSpeed
  }
}
