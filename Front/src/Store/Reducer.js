export const initialState = {
  instData: {
    biography: 'loading...',
    profile_pic_url: '',
    full_name: 'loading...',
    username: 'loading',
  },
  views: 'loading...',
  likesData: {
    Likes: 'loading...',
    IsLiked: false
  },
  gitData: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_INST_DATA':
      return { ...state, instData: action.payload };

    case 'UPDATE_GIT_DATA':
      return { ...state, gitData: action.payload };
  
    case 'UPDATE_LIKES_DATA':
      return { ...state, likesData: action.payload };
        
    case 'UPDATE_VIEWS':
      return { ...state, views: action.payload };
  
    default:
      return state;
  }
}
