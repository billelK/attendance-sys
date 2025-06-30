import React, { useEffect, useRef, useState } from "react";
import { ListGroup, ListGroupItem } from "flowbite-react";

export function Component({onClose}) {
    
  return (
    <div className="flex justify-center absolute -left-25 z-10">
      <ListGroup className="w-48">
        <ListGroupItem onClick={() => {
          onClose();
        }}>Profile</ListGroupItem>
        <ListGroupItem onClick={() => {
          onClose();
        }}>Settings</ListGroupItem>
        <ListGroupItem onClick={() => {
          onClose();
        }}>Messages</ListGroupItem>
        <ListGroupItem onClick={() => {
          onClose();
        }} disabled>Download</ListGroupItem>
      </ListGroup>
    </div>
  );
}
export default Component