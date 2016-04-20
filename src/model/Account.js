import nedb from '../lib/nedb-promise'

const Account = new nedb({
  filename: './data/Account.db',
  autoload: true
})


export default Account