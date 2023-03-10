import { useState } from 'react';

import {
  AiOutlinePlus,
  BiSearchAlt2,
  BsListTask,
  MdKeyboardArrowRight,
  RiStarFill,
  RiTaskLine,
} from 'react-icons/all';

import { useGeneralContext } from '@/context';
import { Link } from '@/elements/atoms';
import { AddListForm, CardSave } from '@/elements/molecules';
import { BottomSheet } from '@/elements/organisms';
import { Form } from '@/interfaces';

const links1 = [
  {
    id: 1,
    label: 'Important',
    to: 'important',
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
    to: 'tasks',
    icon: (
      <RiTaskLine
        size="1.25rem"
        className="text-light-primary-main dark:text-light-primary-main"
      />
    ),
  },
];

const links2 = [
  {
    id: 1,
    label: 'Task List',
    to: '/',
    icon: (
      <BsListTask
        size="1.25rem"
        className="text-light-primary-main dark:text-light-primary-main"
      />
    ),
  },
  {
    id: 2,
    label: 'House List',
    to: '',
    icon: (
      <BsListTask
        size="1.25rem"
        className="text-light-primary-main dark:text-light-primary-main"
      />
    ),
  },
];

export const Sidebar = () => {
  const [openAddList, setOpenAddList] = useState<boolean>(false);
  const [basicForm, setBasicForm] = useState<Form<any>>();

  const { window, setWindow } = useGeneralContext();

  const onReady = () => setOpenAddList(true);

  const onDismiss = () => setOpenAddList(false);

  const sendFormData = async () => {
    if (!basicForm) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append('listTitle', basicForm?.value.listTitle);
    } catch (e: any) {
      console.log(e);
    }
  };

  const handleOpenWindow = () => {
    setWindow(true);
  };

  return (
    <>
      <div className="fixed lg:sticky lg:top-0 inset-0 h-full w-full lg:w-[17.5rem] p-4 lg:py-8 lg:px-5 bg-light-background-container dark:bg-dark-background-container flex flex-col">
        <div className="flex lg:hidden items-center justify-between mb-5">
          <p>Foto</p>
          <BiSearchAlt2
            size="1.25rem"
            className="text-light-primary-main dark:text-light-primary-main"
          />
        </div>
        <div className="">
          <ul className="pb-5 border-b border-light-divider-light dark:border-b-dark-divider-light">
            {links1 &&
              links1.map((_, i) => (
                <li key={i} onClick={() => handleOpenWindow()}>
                  <Link to={_?.to}>
                    <div className="flex gap-4 items-center">
                      {_?.icon}
                      <p className="font-medium text-light-text-primary dark:text-dark-text-primary">
                        {_?.label}
                      </p>
                    </div>
                    <MdKeyboardArrowRight
                      size="1.6rem"
                      className="text-light-text-secondary dark:text-dark-text-secondary"
                    />
                  </Link>
                </li>
              ))}
          </ul>
          <ul className="mt-5">
            {links2 &&
              links2.map((_, i) => (
                <li key={i}>
                  <Link to={_?.to}>
                    <div className="flex gap-4 items-center">
                      {_?.icon}
                      <p className="font-medium text-light-text-primary dark:text-dark-text-primary">
                        {_?.label}
                      </p>
                    </div>
                    <MdKeyboardArrowRight
                      size="1.6rem"
                      className="text-light-text-secondary dark:text-dark-text-secondary"
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <button
          onClick={() => setOpenAddList(true)}
          className="px-5 py-3 flex items-center gap-3 mt-auto hover:bg-light-primary-light hover:dark:bg-dark-primary-light"
        >
          <AiOutlinePlus
            size="1.5rem"
            className="text-light-primary-main dark:text-dark-primary-main"
          />
          <p className="text-light-primary-main dark:text-dark-primary-main">
            New List
          </p>
        </button>
      </div>
      <BottomSheet
        open={openAddList}
        onReady={onReady}
        onDismiss={onDismiss}
        //onClose={setOpenAddList(false)}
        header={
          <div>
            <p className="text-start">New list</p>
          </div>
        }
        classNameBody="pb-20"
        body={<AddListForm onHandleValue={setBasicForm} />}
        footer={
          <CardSave
            buttonType="submit"
            closeBottomSheet={() => setOpenAddList(false)}
            disabled={!basicForm?.isValid}
            onSave={sendFormData}
            buttonText="Create"
            cancelButton
          />
        }
      />
    </>
  );
};
