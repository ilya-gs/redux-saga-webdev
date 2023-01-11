import { createActionCreators } from "../utils/cerateActionCreators";
import { counterActions } from "./constants";

export const counterActionCreators=createActionCreators(counterActions);