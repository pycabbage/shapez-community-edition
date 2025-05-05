import { Vector, enumDirection } from "../../core/vector"
import { LogicGateComponent, enumLogicGateType } from "../components/logic_gate"
import { WiredPinsComponent, enumPinSlotType } from "../components/wired_pins"
import { Entity } from "../entity"
import { MetaBuilding, defaultBuildingVariant } from "../meta_building"
import { GameRoot } from "../root"
import { enumHubGoalRewards } from "../tutorial_goals"

export class MetaComparatorBuilding extends MetaBuilding {
  constructor() {
    super("comparator")
  }

  static getAllVariantCombinations() {
    return [
      {
        internalId: 46,
        variant: defaultBuildingVariant,
      },
    ]
  }

  getSilhouetteColor() {
    return "#823cab"
  }

  /**
   * @param {GameRoot} root
   */
  getIsUnlocked(root) {
    return root.hubGoals.isRewardUnlocked(
      enumHubGoalRewards.reward_virtual_processing
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
    // We already have it included
    return false
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
          {
            pos: new Vector(0, 0),
            direction: enumDirection.left,
            type: enumPinSlotType.logicalAcceptor,
          },
          {
            pos: new Vector(0, 0),
            direction: enumDirection.right,
            type: enumPinSlotType.logicalAcceptor,
          },
        ],
      })
    )

    entity.addComponent(
      new LogicGateComponent({
        type: enumLogicGateType.compare,
      })
    )
  }
}
