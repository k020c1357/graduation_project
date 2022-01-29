import * as React from 'react';
import { Layout } from '../../layouts/Layout';
import type { NotificationState, UserState } from '../../core/types/reducers';
import { connect } from 'react-redux';
import { useNotification } from '../../hooks/useNotification';
import { PasswordDatatableComponent as PasswordDatatable } from '../../components/PasswordDatatable';
import { ActionsHeaderComponent as ActionsHeader } from '../../components/ActionsHeader';
import { Auth } from '../../components/Auth';
import { useUserAccess } from '../../hooks/useAccess';

type Props = {
  NOTIFICATIONS_STATE: NotificationState;
  USER_STATE: UserState;
};

function HomePage({ NOTIFICATIONS_STATE, USER_STATE }: Props) {
  const { renderToast } = useNotification();
  const { revokeAccess } = useUserAccess();

  const [selectedPassword, setSelectedPassword] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    if (NOTIFICATIONS_STATE.notifications) renderToast(NOTIFICATIONS_STATE.notifications);
  }, [NOTIFICATIONS_STATE]);

  React.useEffect(() => {
    return () => {
      revokeAccess();
    };
  }, []);

  return (
    <>
      {USER_STATE.hasAccess ? (
        <Layout>
          <>
            <ActionsHeader
              setSelectedPassword={setSelectedPassword}
              showModal={showModal}
              setShowModal={setShowModal}
              selectedPassword={selectedPassword}
            />

            <PasswordDatatable
              setShowModal={setShowModal}
              setSelectedPassword={setSelectedPassword}
            />
          </>
        </Layout>
      ) : (
        <Auth />
      )}
    </>
  );
}

const mapStateToProps = (state: { notifications: NotificationState; user: UserState }) => {
  return {
    NOTIFICATIONS_STATE: state.notifications,
    USER_STATE: state.user,
  };
};

export default connect(mapStateToProps)(HomePage);
