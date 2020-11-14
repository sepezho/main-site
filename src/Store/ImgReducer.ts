export const initialState = {
  imgs: {
    graphql: {
      user: {
        biography: 'loading...',
        profile_pic_url: '',
        full_name: 'loading...',
        username: 'loading',
      }
    }
  },
};

export function imgReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_IMGS':
      return { ...state, imgs: action.payload };

    default:
      return state;
  }
}
