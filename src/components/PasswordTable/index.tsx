import { PasswordState, TagState } from "../../core/types/reducers";
import { PasswordCard } from "../PasswordCard";
import { PasswordCardEmpty } from "../PasswordCard/PasswordCardEmpty";

type Props = {
  TAG_STATE: TagState;
  PASSWORD_STATE: PasswordState;
  setSelectedPassword: (state: any) => void;
  setShowModal: (state: boolean) => void;
};

function PasswordDatatable({
  TAG_STATE,
  PASSWORD_STATE,
  setSelectedPassword,
  setShowModal,
}: Props) {
  return (
    <>
      {PASSWORD_STATE.passwords?.length ? (
        <PasswordCard
        // setShowModal={setShowModal}
        // setSelectedPassword={setSelectedPassword}
        // PASSWORD_STATE={PASSWORD_STATE}
        // TAG_STATE={TAG_STATE}
        />
      ) : (
        <PasswordCardEmpty />
      )}
    </>
  );
}
