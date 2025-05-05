import { gGameSpeedRegistry } from "../core/global_registries"
import { RegularGameSpeed } from "./time/regular_game_speed"

export function initGameSpeedRegistry() {
  gGameSpeedRegistry.register(RegularGameSpeed)

  // Others are disabled for now
}
