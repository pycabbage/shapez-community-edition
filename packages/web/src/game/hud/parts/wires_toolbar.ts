import { MetaAnalyzerBuilding } from "../../buildings/analyzer"
import { MetaComparatorBuilding } from "../../buildings/comparator"
import { MetaConstantSignalBuilding } from "../../buildings/constant_signal"
import { MetaDisplayBuilding } from "../../buildings/display"
import { MetaFilterBuilding } from "../../buildings/filter"
import { MetaLeverBuilding } from "../../buildings/lever"
import { MetaLogicGateBuilding } from "../../buildings/logic_gate"
import { MetaReaderBuilding } from "../../buildings/reader"
import { MetaStorageBuilding } from "../../buildings/storage"
import { MetaTransistorBuilding } from "../../buildings/transistor"
import { MetaVirtualProcessorBuilding } from "../../buildings/virtual_processor"
import { MetaWireBuilding } from "../../buildings/wire"
import { MetaWireTunnelBuilding } from "../../buildings/wire_tunnel"
import { HUDBaseToolbar } from "./base_toolbar"

export class HUDWiresToolbar extends HUDBaseToolbar {
  constructor(root) {
    super(root, {
      primaryBuildings: [
        MetaWireBuilding,
        MetaWireTunnelBuilding,
        MetaConstantSignalBuilding,
        MetaLogicGateBuilding,
        MetaVirtualProcessorBuilding,
        MetaAnalyzerBuilding,
        MetaComparatorBuilding,
        MetaTransistorBuilding,
      ],
      secondaryBuildings: [
        MetaStorageBuilding,
        MetaReaderBuilding,
        MetaLeverBuilding,
        MetaFilterBuilding,
        MetaDisplayBuilding,
      ],
      visibilityCondition: () =>
        !this.root.camera.getIsMapOverlayActive() &&
        this.root.currentLayer === "wires",
      htmlElementId: "ingame_HUD_wires_toolbar",
      layer: "wires",
    })
  }
}
