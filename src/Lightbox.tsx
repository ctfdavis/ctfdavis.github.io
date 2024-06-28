import LightboxComponent, {
  LightboxExternalProps,
} from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/styles.css";

export default function Lightbox(
  props: Omit<LightboxExternalProps, "plugins">
) {
  return <LightboxComponent plugins={[Zoom]} {...props} />;
}
