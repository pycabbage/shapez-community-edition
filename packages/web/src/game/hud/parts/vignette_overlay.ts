import { makeDiv } from "../../../core/utils"
import { BaseHUDPart } from "../base_hud_part"

export class HUDVignetteOverlay extends BaseHUDPart {
  createElements(parent) {
    this.element = makeDiv(parent, "ingame_VignetteOverlay")
  }

  initialize() {}
}
