import { auth } from '../firebase';

const SignOut = () => {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign out</button>
  )
}

export default SignOut;
