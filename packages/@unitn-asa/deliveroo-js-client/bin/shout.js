#!/usr/bin/env node
import * as config from "../../../../../config.js";
import { DeliverooApi } from "../../index.js";

const client = new DeliverooApi( config.host, config.token )

client.shout( ...process.argv.slice(2) );

await client.timer(100);
process.exit();

