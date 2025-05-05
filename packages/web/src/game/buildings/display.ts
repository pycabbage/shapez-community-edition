import { Vector, enumDirection } from "../../core/vector"
import { DisplayComponent } from "../components/display"
import { WiredPinsComponent, enumPinSlotType } from "../components/wired_pins"
import { Entity } from "../entity"
import { MetaBuilding, defaultBuildingVariant } from "../meta_building"
import { GameRoot } from "../root"
import { enumHubGoalRewards } from "../tutorial_goals"

export class MetaDisplayBuilding extends MetaBuilding {
  constructor() {
    super("display")
  }

  static getAllVariantCombinations() {
    return [
      {
        internalId: 40,
        variant: defaultBuildingVariant,
      },
    ]
  }

  getSilhouetteColor() {
    return "#aaaaaa"
  }

  /**
   * @param {GameRoot} root
   */
  getIsUnlocked(root) {
    return root.hubGoals.isRewardUnlocked(enumHubGoalRewards.reward_display)
  }

  getDimensions() {
    return new Vector(1, 1)
  }

  getShowWiresLayerPreview() {
    return true
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
            direction: enumDirection.bottom,
            type: enumPinSlotType.logicalAcceptor,
          },
        ],
      })
    )
    entity.addComponent(new DisplayComponent())
  }
}
