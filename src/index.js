import Slider from './Data Entry/Slider/Slider';
// Due to the way the antd import plugin only imports styles for components which are passed through babel
// any ant components which are only imported in a library will be missing their styles.

// To correct this we make sure to import all antd styles here directly.
import "~antd/dist/antd.less";

export { Slider };
