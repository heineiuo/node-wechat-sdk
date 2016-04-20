import {sendMsg} from './sendMsg'
import setIndustry from './setIndustry'

const templateMsg = function(core){
  return {
    sendMsg: sendMsg(core),
    setIndustry: sendMsg(setIndustry)
  }
}

export default templateMsg