// import { create } from 'tailwind-react-native-classnames';
import styles from '../../../tw-rn-styles.json';

// const  useTailwind = create(styles);

// export default useTailwind;

import { create } from 'twrnc';
// import tailwindConfig from '../../../tailwind.config.js';
const tw = create(styles); 
export default tw;
