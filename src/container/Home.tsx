import * as React from "react";
import { Layout } from "./Layout";
import { NotificationState, UserState } from "../core/types/reducers";
import { connect } from "react-redux";
import { useNotification } from "../hooks/useNotification";
import { PasswordDatatableComponent } from "../components/PasswordDatatable";
import { ActionsHeaderComponent } from "../components/ActionsHeader";
import { AuthComponent } from "../components/Auth";
import { useUserAccess } from "../hooks/useAccess";

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
    if (NOTIFICATIONS_STATE.notifications)
      renderToast(NOTIFICATIONS_STATE.notifications);
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
            <ActionsHeaderComponent
              setSelectedPassword={setSelectedPassword}
              showModal={showModal}
              setShowModal={setShowModal}
              selectedPassword={selectedPassword}
            />

            <PasswordDatatableComponent
              setShowModal={setShowModal}
              setSelectedPassword={setSelectedPassword}
            />
          </>
        </Layout>
      ) : (
        <AuthComponent />
      )}
    </>
  );
}

const mapStateToProps = (state: {
  notifications: NotificationState;
  user: UserState;
}) => {
  return {
    NOTIFICATIONS_STATE: state.notifications,
    USER_STATE: state.user,
  };
};

export default connect(mapStateToProps)(HomePage);
