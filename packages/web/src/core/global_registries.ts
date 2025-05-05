import type { BaseItem } from "../game/base_item"
import type { Component } from "../game/component"
import type { GameMode } from "../game/game_mode"
import type { MetaBuilding } from "../game/meta_building"
import type { BaseGameSpeed } from "../game/time/base_game_speed"

import { Factory } from "./factory"
import { SingletonFactory } from "./singleton_factory"

// These factories are here to remove circular dependencies

export const gMetaBuildingRegistry = new SingletonFactory<MetaBuilding>(
  "metaBuilding"
)

export const gComponentRegistry = new Factory<Component>("component")

export const gGameModeRegistry = new Factory<GameMode>("gameMode")

export const gGameSpeedRegistry = new Factory<BaseGameSpeed>("gameSpeed")

export const gItemRegistry = new Factory<BaseItem>("item")
