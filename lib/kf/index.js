import addAccount from './addAccount'
import deleteAccount from './deleteAccount'
import getList from './getList'
import sendMsg from './sendMsg'
import updateAccount from './updateAccount'
import uploadAvatar from './uploadAvatar'


const kf = function(core){
  return {

    addAccount: addAccount(core),
    deleteAccount: deleteAccount(core),
    getList: getList(core),
    sendMsg: sendMsg(core),
    updateAccount: updateAccount(core),
    uploadAvatar: uploadAvatar(core)
  }

}

export default kf