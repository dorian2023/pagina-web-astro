import { useEffect } from 'preact';
import { Collapse, Dropdown, Ripple, initTWE } from 'tw-elements';


export default function TwElementsInit() {
  useEffect(() => {
    initTWE({ Collapse, Dropdown, Ripple });
  }, []);

  return null;
}