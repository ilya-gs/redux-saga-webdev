import { createActionCreators } from "../utils/cerateActionCreators";
import { counterActions, newsActions, errorActions, commonActions } from "./constants";

export const commonActionCreators = createActionCreators(commonActions);
export const counterActionCreators=createActionCreators(counterActions);
export const newsActionCreators = createActionCreators(newsActions);
export const errorActionCreators = createActionCreators(errorActions);