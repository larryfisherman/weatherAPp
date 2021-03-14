import types from './types'

const add = item => ({
    type: types.CURRENT_WEATHER, item
})

export default {
    add
}