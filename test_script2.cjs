const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// Also make sure z-index or pointer events on the card aren't blocking clicks.
// `pointer-events-auto cursor-pointer` is already there.
// `z-30 pointer-events-none` is on the wrapper, and `pointer-events-auto` is on the card.
// That should work, but on iOS sometimes nested pointer-events can be tricky.
// Let's add an explicit tap target for mobile

content = content.replace(
  /className="block w-full bg-white rounded-\[28px\] p-\[16px\] md:p-\[32px\] shadow-\[0_4px_24px_rgba\(0,0,0,0\.04\)\] border border-\[#eaeaea\] group transition-all duration-300 hover:shadow-\[0_8px_32px_rgba\(0,0,0,0\.08\)\] pointer-events-auto cursor-pointer">/g,
  'className="block w-full bg-white rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#eaeaea] group transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] pointer-events-auto cursor-pointer relative z-50 overflow-hidden" tabIndex={0} role="button" aria-pressed="false">'
);

fs.writeFileSync(path, content, 'utf-8');
