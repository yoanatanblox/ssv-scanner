"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterCommand = void 0;
const tslib_1 = require("tslib");
const Command_1 = require("./Command");
const ClusterScanner_1 = require("../lib/ClusterScanner/ClusterScanner");
class ClusterCommand extends Command_1.Command {
    constructor() {
        super('cluster', 'Handles cluster operations');
    }
    setArguments(parser) {
        parser.add_argument('-n', '--node-url', {
            help: `The ETH1 node url.`,
            required: true,
            dest: 'nodeUrl'
        });
        parser.add_argument('-ca', '--ssv-contract-address', {
            help: 'The SSV Contract address, used to find the latest cluster data snapshot. ' +
                'Refer to https://docs.ssv.network/developers/smart-contracts',
            required: true,
            dest: 'contractAddress'
        });
        parser.add_argument('-oa', '--owner-address', {
            help: "The owner address regarding the cluster that you want to query",
            required: true,
            dest: 'ownerAddress'
        });
        parser.add_argument('-oids', '--operator-ids', {
            help: `Comma-separated list of operators IDs regarding the cluster that you want to query`,
            required: true,
            dest: 'operatorIds'
        });
    }
    run(args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const operatorIds = args.operatorIds.split(',')
                    .map((value) => {
                    if (Number.isNaN(+value))
                        throw new Error('Operator Id should be the number');
                    return +value;
                })
                    .sort((a, b) => a - b);
                const clusterScanner = new ClusterScanner_1.ClusterScanner(args);
                const result = yield clusterScanner.run(operatorIds, true);
                console.table(result.payload);
                console.log('Cluster snapshot:');
                console.table(result.cluster);
                console.log(JSON.stringify({
                    'block': result.payload.Block,
                    'cluster snapshot': result.cluster,
                    'cluster': Object.values(result.cluster)
                }, null, '  '));
            }
            catch (e) {
                console.error('\x1b[31m', e.message);
            }
        });
    }
}
exports.ClusterCommand = ClusterCommand;
//# sourceMappingURL=ClusterCommand.js.map