import { createGraphNode } from 'graph-state';
import nodes from './nodes';

import network from './network';
import networkSelected from './network-selected';
import nodeSearchSelected from './node-search-selected';

import { moveNetworkViewToNode, selectNode } from '../utils/network';

const networkSelectedNode = createGraphNode<string | undefined>({
  get: ({ get, set }) => {
    const selected = get(networkSelected);

    if (selected && selected.type === 'node') {
      const currentNodes = get(nodes);

      const value = currentNodes.get(selected.id);

      if (value) {
        set(nodeSearchSelected, value.label);

        const instance = get(network);

        if (instance) {
          selectNode(instance, selected.id);
          moveNetworkViewToNode(instance, selected.id);
        }

        return selected.id;
      }
    }

    return undefined;
  },
});

export default networkSelectedNode;
