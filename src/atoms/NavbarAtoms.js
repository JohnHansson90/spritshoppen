import { atom } from "recoil";

const favoritesAtom = atom({
  key: "Favorite Atom",
  default: [],
});

export default favoritesAtom;
