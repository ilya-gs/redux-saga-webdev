import { createActionCreators } from "../utils/cerateActionCreators";
import { counterActions, newsActions, errorActions } from "./constants";

export const counterActionCreators=createActionCreators(counterActions);
export const newsActionCreators = createActionCreators(newsActions);
export const errorActionCreators = createActionCreators(errorActions);