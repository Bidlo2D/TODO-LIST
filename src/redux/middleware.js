import { TASK_CREATE } from "./types"
import { errorOn } from "./action"

const badWords = ['козел', 'сука', 'бля']

export function spamFilter({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === TASK_CREATE) {
                const hasBadWord = badWords.some(
                    word => action.data.text.includes(word)
                )
                if (hasBadWord) { return dispatch(errorOn("Нельзя так выражаться!")) }
            }
            return next(action)
        }
    }
}