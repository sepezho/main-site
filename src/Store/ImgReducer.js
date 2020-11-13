export const initialState = {
    imgs: {},
};
export function imgReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_IMGS':
            return { ...state, imgs: action.payload };
        default:
            return state;
    }
}
//# sourceMappingURL=ImgReducer.js.map