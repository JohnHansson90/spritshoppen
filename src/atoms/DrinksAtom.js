import { atom } from 'recoil'

const allDrinksAtom = atom({
    key: "All Drinks Atom",
    default: []
})

export default allDrinksAtom