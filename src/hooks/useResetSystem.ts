import { useDispatch } from 'react-redux';
import { createNotification } from '../core/store/actions/notifications';

export function useResetSystem() {
  const dispatch = useDispatch();

  const resetApp = () => {
    let counter = 6;
    window.localStorage.removeItem('persist:root');

    dispatch(createNotification({ type: 'success', message: '復元しました' }));

    setInterval(() => {
      if (counter <= 1) return window.location.reload();

      counter--;
      return dispatch(
        createNotification({ type: 'warning', message: `${counter}秒でリロードします` })
      );
    }, 1000);
  };

  return {
    resetApp,
  };
}
