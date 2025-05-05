/* typehints:start */
import { GameRoot } from "../root"
/* typehints:end */

import { MetaAnalyzerBuilding } from "../buildings/analyzer"
import { MetaComparatorBuilding } from "../buildings/comparator"
import { MetaConstantSignalBuilding } from "../buildings/constant_signal"
import { MetaDisplayBuilding } from "../buildings/display"
import { MetaFilterBuilding } from "../buildings/filter"
import { MetaItemProducerBuilding } from "../buildings/item_producer"
import { MetaLeverBuilding } from "../buildings/lever"
import { MetaLogicGateBuilding } from "../buildings/logic_gate"
import { MetaMinerBuilding } from "../buildings/miner"
import { MetaReaderBuilding } from "../buildings/reader"
import { MetaStorageBuilding } from "../buildings/storage"
import { MetaTransistorBuilding } from "../buildings/transistor"
import { MetaVirtualProcessorBuilding } from "../buildings/virtual_processor"
import { MetaWireBuilding } from "../buildings/wire"
import { MetaWireTunnelBuilding } from "../buildings/wire_tunnel"
import { enumGameModeIds } from "../game_mode"
import { HUDConstantSignalEdit } from "../hud/parts/constant_signal_edit"
import { HUDPuzzleEditorControls } from "../hud/parts/puzzle_editor_controls"
import { HUDPuzzleEditorReview } from "../hud/parts/puzzle_editor_review"
import { HUDPuzzleEditorSettings } from "../hud/parts/puzzle_editor_settings"
import { PuzzleGameMode } from "./puzzle"

export class PuzzleEditGameMode extends PuzzleGameMode {
  static getId() {
    return enumGameModeIds.puzzleEdit
  }

  static getSchema() {
    return {}
  }

  /** @param {GameRoot} root */
  constructor(root) {
    super(root)

    this.hiddenBuildings = [
      MetaStorageBuilding,
      MetaReaderBuilding,
      MetaFilterBuilding,
      MetaDisplayBuilding,
      MetaLeverBuilding,
      MetaItemProducerBuilding,
      MetaMinerBuilding,

      MetaWireBuilding,
      MetaWireTunnelBuilding,
      MetaConstantSignalBuilding,
      MetaLogicGateBuilding,
      MetaVirtualProcessorBuilding,
      MetaAnalyzerBuilding,
      MetaComparatorBuilding,
      MetaTransistorBuilding,
    ]

    this.additionalHudParts.puzzleEditorControls = HUDPuzzleEditorControls
    this.additionalHudParts.puzzleEditorReview = HUDPuzzleEditorReview
    this.additionalHudParts.puzzleEditorSettings = HUDPuzzleEditorSettings
    this.additionalHudParts.constantSignalEdit = HUDConstantSignalEdit
  }

  getIsEditor() {
    return true
  }
}
