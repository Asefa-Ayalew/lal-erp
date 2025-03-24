// Usage:
    // Reorder items in a list
    // Supports drag and drop using react-dnd
    
    import { useState } from "react";
    import { DndProvider, useDrag, useDrop } from "react-dnd";
    import { HTML5Backend } from "react-dnd-html5-backend";
    
    const ItemType = "ITEM";
    
    function DraggableItem({ item, index, moveItem }) {
      const [, ref] = useDrag({
        type: ItemType,
        item: { index },
      });
    
      const [, drop] = useDrop({
        accept: ItemType,
        hover: (draggedItem: { index: number }) => {
          if (draggedItem.index !== index) {
            moveItem(draggedItem.index, index);
            draggedItem.index = index;
          }
        },
      });
    
      return (
        <div ref={(node) => ref(drop(node))} className="p-2 bg-gray-100 rounded my-1 cursor-pointer">
          {item}
        </div>
      );
    }
    
    export default function DragDropList({ items, onReorder }) {
      const [list, setList] = useState(items);
    
      const moveItem = (fromIndex, toIndex) => {
        const updatedList = [...list];
        const [movedItem] = updatedList.splice(fromIndex, 1);
        updatedList.splice(toIndex, 0, movedItem);
        setList(updatedList);
        onReorder(updatedList);
      };
    
      return (
        <DndProvider backend={HTML5Backend}>
          <div>
            {list.map((item, index) => (
              <DraggableItem key={index} item={item} index={index} moveItem={moveItem} />
            ))}
          </div>
        </DndProvider>
      );
    }
    