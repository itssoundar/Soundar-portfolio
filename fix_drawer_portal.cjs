const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

if (!content.includes('createPortal')) {
    content = content.replace(
        /import \{ useEffect, useState \} from "react";/,
        `import { useEffect, useState } from "react";\nimport { createPortal } from "react-dom";`
    );

    content = content.replace(
        /  return \(\n    <div className="fixed inset-0 z-\[100000\] pointer-events-auto"/,
        `  return createPortal(\n    <div className="fixed inset-0 z-[100000] pointer-events-auto"`
    );

    content = content.replace(
        /    <\/div>\n  \);\n\}/,
        `    </div>,\n    document.body\n  );\n}`
    );

    fs.writeFileSync(path, content, 'utf-8');
}
