const initialState = {
    JobsDetailId: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAVORITED':
            return {
                ...state,
                JobsDetailId: [...state.JobsDetailId, action.payload.data],
            };
        case 'DELETE_FAVORITED':
            return {
                ...state,
                JobsDetailId: state.JobsDetailId.filter(data => data.id !== action.payload.item.id),
            };
        default:
            return state;
    }
}

export default reducer;
