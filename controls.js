export default {
    jump: new KeyboardEvent('keydown', {key: 'Space', keyCorde: 32}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}