import VersionSwitcher from '@/component/VersionSwitcher';

import v1 from './v1';
import v2 from './v2';
import v3 from './v3';

const componentVersionMap = { v1, v2, v3 } as const;

const ShoppingCart: React.FC = () => {
  return <VersionSwitcher versions={componentVersionMap} />;
};

export default ShoppingCart;
