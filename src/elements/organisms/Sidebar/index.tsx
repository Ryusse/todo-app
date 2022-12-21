import { MdKeyboardArrowRight, RiStarFill, RiTaskLine } from 'react-icons/all';

const links = [
  {
    id: 1,
    label: 'Important',
    icon: (
      <RiStarFill
        size="1.25rem"
        className="text-light-secondary-main dark:text-dark-secondary-main"
      />
    ),
  },
  {
    id: 2,
    label: 'Tasks',
    icon: (
      <RiTaskLine
        size="1.25rem"
        className="text-light-primary-main dark:text-light-primary-main"
      />
    ),
  },
];

export const Sidebar = () => {
  return (
    <div className="w-[17.5rem] px-5 py-8 bg-light-background-paper dark:bg-dark-background-paper">
      <ul className="pb-4 border-b border-light-divider dark:border-dark-divider">
        {links &&
          links.map((_, i) => (
            <li key={i} className="flex justify-between items-center p-5">
              <div className="flex gap-4 items-center">
                {_?.icon}
                <p className="font-medium text-light-text dark:text-dark-text">
                  {_?.label}
                </p>
              </div>
              <MdKeyboardArrowRight
                size="1.6rem"
                className="text-primary-red-300"
              />
            </li>
          ))}
      </ul>
      <ul>
        {links &&
          links.map((_, i) => (
            <li key={i} className="flex justify-between items-center p-5">
              <div className="flex gap-4 items-center">
                {_?.icon}
                <p className="font-medium text-light-text dark:text-dark-text">
                  {_?.label}
                </p>
              </div>
              <MdKeyboardArrowRight
                size="1.6rem"
                className="text-primary-red-300"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
