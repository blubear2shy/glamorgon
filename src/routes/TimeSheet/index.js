import { injectReducer } from '../../store/reducers'

export default (store) => ({
    path: 'timeSheet',
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
            and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
                dependencies for bundling   */
            const TimeSheet = require('./containers/TimeSheetContainer').default
            const reducer = require('./modules/timeSheet').default

            /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, { key: 'timeSheet', reducer })

            /*  Return getComponent   */
            cb(null, TimeSheet)

            /* Webpack named bundle   */
        }, 'timeSheet')
    }
})
