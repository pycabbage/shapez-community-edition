import { generateMatrixRotations } from "../../core/utils"
import { Vector, enumDirection } from "../../core/vector"
import { ConstantSignalComponent } from "../components/constant_signal"
import { WiredPinsComponent, enumPinSlotType } from "../components/wired_pins"
import { Entity } from "../entity"
import { MetaBuilding, defaultBuildingVariant } from "../meta_building"
import { GameRoot } from "../root"
import { enumHubGoalRewards } from "../tutorial_goals"

const overlayMatrix = generateMatrixRotations([0, 1, 0, 1, 1, 1, 1, 1, 1])

export class MetaConstantSignalBuilding extends MetaBuilding {
  constructor() {
    super("constant_signal")
  }

  static getAllVariantCombinations() {
    return [
      {
        internalId: 31,
        variant: defaultBuildingVariant,
      },
    ]
  }

  getSilhouetteColor() {
    return "#2b84fd"
  }

  /**
   * @param {GameRoot} root
   */
  getIsUnlocked(root) {
    return root.hubGoals.isRewardUnlocked(
      enumHubGoalRewards.reward_constant_signal
    )
  }

  /** @returns {"wires"} **/
  getLayer() {
    return "wires"
  }

  getDimensions() {
    return new Vector(1, 1)
  }

  getRenderPins() {
    return false
  }

  getSpecialOverlayRenderMatrix(rotation) {
    return overlayMatrix[rotation]
  }

  /**
   * Creates the entity at the given location
   * @param {Entity} entity
   */
  setupEntityComponents(entity) {
    entity.addComponent(
      new WiredPinsComponent({
        slots: [
          {
            pos: new Vector(0, 0),
            direction: enumDirection.top,
            type: enumPinSlotType.logicalEjector,
          },
        ],
      })
    )
    entity.addComponent(new ConstantSignalComponent({}))
  }
}
