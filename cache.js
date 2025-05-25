
 import NodeCache from "node-cache";

const myCache = new NodeCache({ stdTTL: 600 }); // TTL de 10 minutos
export default myCache;