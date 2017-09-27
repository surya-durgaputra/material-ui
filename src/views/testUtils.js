import Nightmare from 'nightmare'
require('nightmare-upload')(Nightmare)
import url from 'url'
jasmine.DEFAULT_TIMEOUT_INTERVAL = 400000 // 400 second timeout
export const visit = path => {
  const BASE_URL = url.format({
    protocol: process.env.PROTOCOL || 'http',
    hostname: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
  })
  const location = url.resolve(BASE_URL, path)
  const config = {
    // Try changing this to true and run the tests
    // It is pretty cool
    show: false,
    // From the docs: Note that, even though goto normally waits
    // for all the resources on a page to load, a timeout exception
    // is only raised if the DOM itself has not yet loaded.
    gotoTimeout: 30000
  }
  const nightmare = Nightmare(config)
  return nightmare.goto(location)
}
