import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase';

import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';

const Chat = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <header>
        <h1>⚛️💬</h1>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </>
  )
}

export default Chat;
