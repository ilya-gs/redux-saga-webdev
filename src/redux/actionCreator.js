import { createActionCreators } from "../utils/cerateActionCreators";
import { counterActions, newsActions } from "./constants";

export const counterActionCreators=createActionCreators(counterActions);
export const newsActionCreators=createActionCreators(newsActions);