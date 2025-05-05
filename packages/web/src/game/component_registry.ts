import { gComponentRegistry } from "../core/global_registries"
import { BeltComponent } from "./components/belt"
import { BeltReaderComponent } from "./components/belt_reader"
import { BeltUnderlaysComponent } from "./components/belt_underlays"
import { ConstantSignalComponent } from "./components/constant_signal"
import { DisplayComponent } from "./components/display"
import { FilterComponent } from "./components/filter"
import { GoalAcceptorComponent } from "./components/goal_acceptor"
import { HubComponent } from "./components/hub"
import { ItemAcceptorComponent } from "./components/item_acceptor"
import { ItemEjectorComponent } from "./components/item_ejector"
import { ItemProcessorComponent } from "./components/item_processor"
import { ItemProducerComponent } from "./components/item_producer"
import { LeverComponent } from "./components/lever"
import { LogicGateComponent } from "./components/logic_gate"
import { MinerComponent } from "./components/miner"
import { StaticMapEntityComponent } from "./components/static_map_entity"
import { StorageComponent } from "./components/storage"
import { UndergroundBeltComponent } from "./components/underground_belt"
import { WireComponent } from "./components/wire"
import { WireTunnelComponent } from "./components/wire_tunnel"
import { WiredPinsComponent } from "./components/wired_pins"

export function initComponentRegistry() {
  const components = [
    StaticMapEntityComponent,
    BeltComponent,
    ItemEjectorComponent,
    ItemAcceptorComponent,
    MinerComponent,
    ItemProcessorComponent,
    UndergroundBeltComponent,
    HubComponent,
    StorageComponent,
    WiredPinsComponent,
    BeltUnderlaysComponent,
    WireComponent,
    ConstantSignalComponent,
    LogicGateComponent,
    LeverComponent,
    WireTunnelComponent,
    DisplayComponent,
    BeltReaderComponent,
    FilterComponent,
    ItemProducerComponent,
    GoalAcceptorComponent,
  ]
  components.forEach((component) => gComponentRegistry.register(component))

  // IMPORTANT ^^^^^ UPDATE ENTITY COMPONENT STORAGE AFTERWARDS

  // Sanity check - If this is thrown, you forgot to add a new component here

  assert(
    // @ts-ignore
    import.meta
      .webpackContext("./components", { recursive: false, regExp: /.*\.js/i })
      .keys().length === gComponentRegistry.getNumEntries(),
    "Not all components are registered"
  )

  console.log("📦 There are", gComponentRegistry.getNumEntries(), "components")
}
