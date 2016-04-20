import passiveReply from './passiveReply'

const chatMsg = function(core){
  return {
    passiveReply: passiveReply(core)
  }
}

export default chatMsg