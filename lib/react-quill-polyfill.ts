// Polyfill for ReactDOM.findDOMNode for React 19 compatibility
// react-quill still uses findDOMNode which was removed in React 19
// This is a temporary workaround

if (typeof window !== 'undefined') {
  const ReactDOM = require('react-dom');
  
  if (!ReactDOM.findDOMNode) {
    // @ts-ignore
    ReactDOM.findDOMNode = (node: any) => {
      if (node == null) {
        return null;
      }
      if (node.nodeType === 1) {
        return node;
      }
      // Return the node's internal instance if it's a React component
      const instance = node._reactInternals?.stateNode;
      if (instance && instance.nodeType === 1) {
        return instance;
      }
      // Fallback: try to get the DOM node from the component
      if (typeof node.render === 'function') {
        return null; // Can't get DOM node from class component
      }
      return null;
    };
  }
}

export {};
