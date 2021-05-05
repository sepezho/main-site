export const initialState = {
  instData: {
    biography: 'loading...',
    profile_pic_url: '',
    full_name: 'loading...',
    username: 'loading',
  },
  views: 'loading...',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_INST_DATA':
      return { ...state, instData: action.payload };

    case 'UPDATE_VIEWS':
      return { ...state, views: action.payload };
  
    default:
      return state;
  }
}
