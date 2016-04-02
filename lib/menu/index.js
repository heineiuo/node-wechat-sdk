import getMenu from './getMenu'
import createMenu from './createMenu'

const Menu = function(core){
  return {
    getMenu: getMenu(core),
    createMenu: createMenu(core)
  }
}

export default Menu