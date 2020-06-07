The Modal

```jsx
import React from "react";
import useModal from "../useModal";
import Modal from "./Modal";

const [isShowing, toggle, outerContent] = useModal();
    <div>
      <div ref={outerContent}>
      <h1>Accessible Modal</h1>
      <h2>This will be assigned "aria-hidden="true"</h2>
      <button onClick={toggle}>
        show modal
      </button>
      </div>
      <Modal isShowing={isShowing} toggle={toggle} outerContent={outerContent} >
        <button>Click Me</button>
        <input type="text"/>
      </Modal>
      </div>

```