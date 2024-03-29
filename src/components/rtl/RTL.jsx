'use client';

import { useEffect } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import useSettings from 'hooks/useSettings';
import PropTypes from 'prop-types';

const RTL = ({ children }) => {
  const { settings } = useSettings();
  useEffect(() => {
    document.dir = settings.direction;
  }, [settings.direction]);
  const cacheRtl = createCache({
    key: 'rtl',
    prepend: true,
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });

  if (settings.direction === 'rtl') {
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  }

  return <div>{children}</div>;
};

export default RTL;

RTL.propTypes = {
  children: PropTypes.node.isRequired,
};
