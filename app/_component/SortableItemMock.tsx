import React, { forwardRef } from "react";

interface SortableItemMockProps {
  id: string;
  [key: string]: any;
}

const SortableItemMock = forwardRef<HTMLDivElement, SortableItemMockProps>(
  ({ id, ...props }, ref) => {
    return (
      <div className="bg-neutral-500 px-4 py-2 rounded" {...props} ref={ref}>
        <p>id: {id}</p>
      </div>
    );
  }
);

SortableItemMock.displayName = "SortableItemMock";

export { SortableItemMock };
