import { useDispatch } from 'react-redux';
import { createNotification } from '../core/store/actions/notifications';

export default function useClipboard() {
  const dispatch = useDispatch();

  const handleClipboard = (entry: string | undefined) => {
    if (!entry) return false;

    try {
      navigator.clipboard.writeText(entry);
      dispatch(
        createNotification({
          type: 'success',
          message: 'クリップボードにコピーされた',
        })
      );
    } catch (error) {
      console.error(error);

      dispatch(
        createNotification({
          type: 'error',
          message: 'クリップボードにコピーされていません',
        })
      );
    }
  };

  return {
    handleClipboard,
  };
}
