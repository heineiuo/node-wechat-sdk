import getUserAccessToken from './getUserAccessToken'
import freshUserAccessToken from './freshUserAccessToken'
import generateUrl from './generateUrl'
import getUserInfo from './getUserInfo'

const auth = function(core){
  return {
    getUserAccessToken: getUserAccessToken(core),
    freshUserAccessToken: freshUserAccessToken(core),
    getUserInfo: getUserInfo(core),
    generateUrl: generateUrl(core)
  }
}

export default auth