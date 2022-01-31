import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNotification } from '../core/store/actions/notifications';
import { createTag, editTag } from '../core/store/actions/tags';

export default function useTagCreationModal(setShowModal: Function) {
  const dispatch = useDispatch();

  const [tagName, setTagName] = useState('');
  const [tagIcon, setTagIcon] = useState('');

  const clearForm = () => {
    setTagIcon('');
    setTagName('');
  };

  const handleEdit = (id: string | number) => {
    dispatch(editTag({ id: id, name: tagName, icon: tagIcon }));
    dispatch(createNotification({ type: 'success', message: 'タグ編集しました' }));

    clearForm();
    setShowModal(false);
  };

  const handleCreate = (id: string | number) => {
    dispatch(createTag({ id: id, name: tagName, icon: tagIcon }));
    dispatch(createNotification({ type: 'success', message: 'タグ作成しました' }));

    clearForm();
    setShowModal(false);
  };

  return {
    tagName,
    tagIcon,
    setTagName,
    setTagIcon,
    handleCreate,
    handleEdit,
  };
}
