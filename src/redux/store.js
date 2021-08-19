import customizeRedux from "../utils/customizeRedux";
import modules from "./modules";

const store = customizeRedux({ ...modules });

export default store;
