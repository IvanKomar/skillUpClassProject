const productLikeReducer = (state={
    '1': true,
    '2': true,
}, action) => {


//type is important властивість в параметрі акшн, має строкове значення і пишеться веливики 

    switch (action.type) {
        case 'LIKE': 
            return {
                ...state,
                [action.id]: true,
            }   
        case 'DISLIKE': 
        return {
            ...state,
            [action.id]: false,
        }  

            default:
                return state
    }

}

export default productLikeReducer