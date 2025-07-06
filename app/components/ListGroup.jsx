import React, { useEffect, useRef, useState } from "react";
import { ListGroup, ListGroupItem } from "flowbite-react";

export function Component({onClose}) {
    
  return (
    <div className="flex justify-center absolute -left-25 z-10">
      <ListGroup className="w-48">
        <ListGroupItem onClick={() => {
          onClose();
        }}>Edit</ListGroupItem>
        <ListGroupItem onClick={() => {
          onClose();
        }}>Delete</ListGroupItem>
        <ListGroupItem onClick={() => {
          onClose();
        }}>Print</ListGroupItem>
      </ListGroup>
    </div>
  );
}
export default Component