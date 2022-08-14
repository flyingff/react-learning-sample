import React, { useState } from 'react';

function VersionSwitcher<T extends string>({
  versions: versionMap,
}: {
  versions: Record<T, React.ComponentType<{}>>;
}) {
  const versionList = Array.from(Object.keys(versionMap)) as T[];
  const [version, setVersion] = useState(() => versionList[0]);
  const RenderingComponent = versionMap[version] as React.ComponentType<{}>;
  return (
    <div>
      <p>
        <span>Version: &nbsp;</span>
        <select onChange={(e) => setVersion(e.target.value as T)}>
          {versionList.map((version) => (
            <option key={version} value={version}>
              {version}
            </option>
          ))}
        </select>
        <code>{' | '}</code>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          Home
        </a>
      </p>
      <hr />
      <RenderingComponent />
    </div>
  );
}

export default VersionSwitcher;
