import VersionSwitcher from '@/component/VersionSwitcher';

import v1 from './v1';
import v2 from './v2';
import v3 from './v3';
import v4 from './v4';
import v5 from './v5';
import v6 from './v6';

const componentVersionMap = { v1, v2, v3, v4, v5, v6 } as const;

const ShoppingCart: React.FC = () => {
  return <VersionSwitcher versions={componentVersionMap} />;
};

export default ShoppingCart;
