import { Models } from "@rematch/core";
import { home } from "../page/home/model/homeModel";

export interface RootModel extends Models<RootModel> {
  home: typeof home;
}

export const models: RootModel = {
  home,
};
