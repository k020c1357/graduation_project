import type { PasswordState, TagState } from '../../core/types/reducers';
import { connect } from 'react-redux';
import { PasswordTableComponent } from '../PasswordTable/PasswordTable';
import { PasswordTableEmptyComponent } from '../PasswordTable/PasswordTableEmpty';
import { Container } from '@chakra-ui/react';

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
    <Container className='main-container' minHeight='70vh' minWidth='calc(100% - 80px)' mx='auto'>
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
    </Container>
  );
};

export const PasswordDatatableComponent = connect(mapStateToProps)(PasswordDatatable);
