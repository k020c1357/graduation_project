import * as React from 'react';
import { Box, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { connect, useDispatch } from 'react-redux';
import { updateSearch } from '../../core/store/actions/search';
import { PasswordCreationModalComponent } from '../PasswordCreationModal';
import { Password, TagState } from '../../core/types/reducers';
import { toggleSidebar } from '../../core/store/actions/sidebar';

const mapStateToProps = (state: { tags: TagState }) => {
  return {
    TAG_STATE: state.tags,
  };
};

type Props = {
  TAG_STATE: TagState;
  selectedPassword: Password | undefined | null;
  setSelectedPassword: (state: any) => void;
  showModal: boolean;
  setShowModal: (state: boolean) => void;
};

const ActionsHeader = ({
  TAG_STATE,
  selectedPassword,
  showModal,
  setShowModal,
  setSelectedPassword,
}: Props) => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');

  const handleUpdateSearch = () => dispatch(updateSearch(search));

  React.useEffect(() => {
    handleUpdateSearch();
  }, [search]);

  return (
    <>
      <Box
        display='flex'
        justifyContent='space-between'
        flexDirection='row'
        backgroundColor='gray.100'
        p={4}
      >
        <Box display='flex' mb={6}>
          <Button
            mr={4}
            color='purple.800'
            // variant='outline'
            // colorScheme='purple'
            _focus={{ outline: 'none' }}
            maxWidth={70}
            width='100%'
            onClick={() => dispatch(toggleSidebar())}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='app-nav-icon'
              enableBackground='new 0 0 377 377'
              version='1.1'
              viewBox='0 0 377 377'
              xmlSpace='preserve'
            >
              <circle cx='15' cy='88.5' r='15'></circle>
              <path d='M75 73.5H377V103.5H75z'></path>
              <circle cx='15' cy='288.5' r='15'></circle>
              <path d='M75 273.5H377V303.5H75z'></path>
              <circle cx='15' cy='188.5' r='15'></circle>
              <path d='M75 173.5H377V203.5H75z'></path>
            </svg>
          </Button>

          <Button
            // variant='outline'
            color='purple.800'
            // colorScheme='purple'
            _focus={{ outline: 'none' }}
            maxWidth={70}
            width='100%'
            onClick={() => setShowModal(true)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='app-nav-icon'
              enableBackground='new 0 0 490 490'
              version='1.1'
              viewBox='0 0 490 490'
              xmlSpace='preserve'
            >
              <path d='M17.1 490h349.4c9.5 0 17.2-7.7 17.2-17.2v-89.2h89.2c9.5 0 17.1-7.7 17.1-17.1V17.1C490 7.6 482.3 0 472.9 0H123.5c-9.5 0-17.2 7.7-17.2 17.1v89.2H17.1C7.6 106.3 0 114 0 123.5v349.4c0 9.4 7.7 17.1 17.1 17.1zM140.6 34.3h315.1v315.1H140.6V34.3zM34.3 140.6h72v225.9c0 9.5 7.7 17.1 17.2 17.1h225.9v72H34.3v-315z'></path>
              <path d='M219.5 209H281v61.5c0 9.5 7.7 17.2 17.2 17.2s17.1-7.7 17.1-17.2V209h61.5c9.5 0 17.1-7.7 17.1-17.2s-7.7-17.2-17.1-17.2h-61.5v-61.5c0-9.5-7.7-17.2-17.1-17.2-9.5 0-17.2 7.7-17.2 17.2v61.5h-61.5c-9.5 0-17.1 7.7-17.1 17.2-.1 9.5 7.6 17.2 17.1 17.2z'></path>
            </svg>
          </Button>
        </Box>

        <Box textAlign='right'>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='app-search-icon'
                  enableBackground='new 0 0 487.95 487.95'
                  version='1.1'
                  viewBox='0 0 487.95 487.95'
                  xmlSpace='preserve'
                >
                  <path d='M481.8 453l-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z'></path>
                </svg>
              }
            />
            <Input
              width='100%'
              variant='solid'
              background='gray.200'
              fontWeight='bold'
              _placeholder={{ color: 'gray' }}
              placeholder='Quick search'
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </Box>
      </Box>

      <PasswordCreationModalComponent
        setSelectedPassword={setSelectedPassword}
        tagState={TAG_STATE}
        showModal={showModal}
        setShowModal={setShowModal}
        passwordSelected={selectedPassword}
      />
    </>
  );
};

export const ActionsHeaderComponent = connect(mapStateToProps)(ActionsHeader);
