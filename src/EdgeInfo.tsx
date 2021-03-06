import { Description } from '@geist-ui/react';
import React from 'react';
import { useGraphNodeValue } from 'react-graph-state';

import refreshedSelectedEdge from './nodes/refreshed-selected-edge';

import { NodeURL } from './NodeInfo';

interface EdgeLinkProps {
  title: string;
  type: 'from' | 'to';
}

function EdgeLink({ title, type }: EdgeLinkProps): JSX.Element {
  const { edge } = useGraphNodeValue(refreshedSelectedEdge);

  if (edge) {
    return (
      <div className="SidebarContentSection">
        <Description
          title={title}
          content={<NodeURL id={edge[type]} />}
        />
      </div>
    );
  }

  return <></>;
}

export default function EdgeInfo(): JSX.Element {
  return (
    <>
      <EdgeLink title="From" type="from" />
      <EdgeLink title="To" type="to" />
    </>
  );
}
