import type { PasswordState, TagState } from '../../core/types/reducers';
import { connect } from 'react-redux';
import { PasswordTableComponent } from '../PasswordTable/PasswordTable';
import { PasswordTableEmptyComponent } from '../PasswordTable/PasswordTableEmpty';

const mapStateToProps = (state: { tags: TagState; passwords: PasswordState }) => {
  return {
    TAG_STATE: state.tags,
    PASSWORD_STATE: state.passwords,
  };
};

type Props = {
  TAG_STATE: TagState;
  PASSWORD_STATE: PasswordState;
  setSelectedPassword: (state: any) => void;
  setShowModal: (state: boolean) => void;
};

const PasswordDatatable = ({
  TAG_STATE,
  PASSWORD_STATE,
  setSelectedPassword,
  setShowModal,
}: Props) => {
  return (
    <>
      {PASSWORD_STATE.passwords?.length ? (
        <PasswordTableComponent
          setShowModal={setShowModal}
          setSelectedPassword={setSelectedPassword}
          PASSWORD_STATE={PASSWORD_STATE}
          TAG_STATE={TAG_STATE}
        />
      ) : (
        <PasswordTableEmptyComponent />
      )}
    </>
  );
};

export const PasswordDatatableComponent = connect(mapStateToProps)(PasswordDatatable);
